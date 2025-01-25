document.addEventListener('deviceready', function () {
    if (typeof cordova !== 'undefined') {
        loadBanner();
    }
});

function loadBanner() {
    if (typeof cordova !== 'undefined' && cordova.plugins && cordova.plugins.emiAdmobPlugin) {

        var Banner_ID = 'ca-app-pub-2103221276430615/1418399238'; // Test ID

        // Fix WebView fullscreen mode issue
        document.body.style.marginBottom = "0px"; 
        document.body.style.paddingBottom = "0px";  

        // Load AdMob Banner
        cordova.plugins.emiAdmobPlugin.loadBannerAd({
            adUnitId: Banner_ID,
            position: "bottom-center",  // Forces it to the bottom
            size: "full_width_adaptive", // Ensures full width
            collapsible: "bottom", 
            autoResize: true, 
            autoShow: true 
        });

        // Fix Banner Position After Load
        document.addEventListener('on.banner.load', function (event) {
            console.log("âœ… Banner loaded successfully", event);

            // Force banner to overlay on the WebView
            cordova.plugins.emiAdmobPlugin.styleBannerAd({
                isOverlapping: true,  // Allows full overlap
                isStatusBarShow: false, 
                overlappingHeight: 0, 
                padding: 0, 
                margins: 0 
            });

            setTimeout(() => {
                document.body.style.marginBottom = "0px"; // Ensure no extra space
            }, 300);
        });

        document.addEventListener('on.banner.failed.load', function (error) {
            console.error("âŒ Failed to load banner:", JSON.stringify(error));
        });

    } else {
        console.error("ðŸš¨ AdMob plugin is not available");
    }
}
 
document.addEventListener('deviceready', function () {
    let interstitial;
    const Interstitial_ID = 'ca-app-pub-2103221276430615/7312912646'; // Replace with actual Ad Unit ID

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
