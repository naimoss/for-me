$('a#mob').each(function(){ this.href=this.href.replace('https://docs.google.com/open?id=', 'com.electrotechnique.dz.univ&')});
$('a#mob').each(function(){ this.href=this.href.replace('https://drive.google.com/open?id=', 'com.electrotechnique.dz.univ&')});

   window.onload = function() {
     Swal.fire({
  icon: 'error',
  title: '<a href="market://details?id=com.electrotechnique.dz.univ" style=" font-family:exo 2;color: #000; ">Oops...</a>',
  text: 'Desole, cette version a rencontre de nombreuses erreurs, tres peu de documents. Veuillez mettre a jour vers la derniere version pour continuer à utiliser l"application. Merci',
  footer: '<a href="market://details?id=com.electrotechnique.dz.univ" style="font-size: large;color: #f00; ">Cliquez ici pour mettre à jour</a>'
})
    } ;
document.addEventListener('deviceready', function () {
    let interstitial;
    const Interstitial_ID = 'ca-app-pub-2103221276430615/6961253960'; // Replace with actual Ad Unit ID

    function loadInterstitial() {
        try {
            console.log("Loading interstitial ad...");
            cordova.plugins.emiAdmobPlugin.loadInterstitialAd({ 
                adUnitId: Interstitial_ID, 
                autoShow: false 
            });
        } catch (error) {
            console.error("Error initializing interstitial ad:", error);
        }
    }

    // Reload ad after dismissal
    document.addEventListener('on.interstitial.dismissed', () => {
        console.log("Interstitial Ad Dismissed. Reloading...");
        loadInterstitial();
    });

    let clickCount = sessionStorage.getItem('clickCount') ? parseInt(sessionStorage.getItem('clickCount')) : 0;

    document.querySelectorAll('a#mob').forEach(link => {
        link.addEventListener('click', () => {
            clickCount++;
            sessionStorage.setItem('clickCount', clickCount);

            console.log(`Click count: ${clickCount}`);

            if (clickCount % 5 === 0) {
                
                
                console.log("Attempting to display interstitial ad.");
                cordova.plugins.emiAdmobPlugin.showInterstitialAd();
            }
        });
    });

    loadInterstitial();
});
