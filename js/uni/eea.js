
document.addEventListener('deviceready', function () {
    let interstitial;
    const Interstitial_ID = 'ca-app-pub-2103221276430615/3909650410'; // Replace with actual Ad Unit ID

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
