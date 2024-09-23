$('a#mob').each(function(){ this.href=this.href.replace('https://docs.google.com/open?id=', 'https://drive.google.com/open?id=')});
let event = document.getElementById('event');

let cleanText = () => {
    event.value = '';
};

// WARNING config must be an array[] not an object{}
const bannerConfig = [
    adUnitId = "ca-app-pub-2103221276430615/5809823000",
    position = "bottom-center",
    size = "BANNER",
    collapsible = "bottom",
    adaptive_Width = 320,
    autoShow = true
];

// Flag to track if the banner is loaded and shown
let bannerInitialized = false;

document.addEventListener("deviceready", function(){
    cordova.plugins.emiAdmobPlugin.initialize();
    
    // Load and show banner ad only if not already initialized
    if (!bannerInitialized) {
        loadBannerAd();
        bannerInitialized = true;
    }
}, false);

// load banner ad
let loadBannerAd = () => {
    cordova.plugins.emiAdmobPlugin.loadBannerAd(bannerConfig);
    // call loadBannerAd();
}

// show Banner Ad
let showBannerAd = () => {
    // Check if the banner is already initialized
    if (bannerInitialized) {
        cordova.plugins.emiAdmobPlugin.showBannerAd();
        // call showBannerAd();
    }
}

  const config_Interstitial = [

  adUnitId = "ca-app-pub-2103221276430615/6537542742",

  autoShow = true

  ]

// Load Interstitial Ad

let loadInterstitialAd = () => {

  cordova.plugins.emiAdmobPlugin.loadInterstitialAd(config_Interstitial);

  // Or like this

  // cordova.plugins.emiAdmobPlugin.loadInterstitialAd([adUnitId = "ca-app-pub-3940256099942544/1033173712", autoShow = false ]);

  // call loadInterstitialAd();

}



// Show Interstitial Ad

let showInterstitialAd = () => {

  cordova.plugins.emiAdmobPlugin.showInterstitialAd();

  // call showInterstitialAd();

}




const STORAGE_KEY = 'lastAdShownTime';

function getAdShownTime() {
  const storedTime = localStorage.getItem(STORAGE_KEY);
  return storedTime ? parseInt(storedTime) : null;
}

function setAdShownTime() {
  localStorage.setItem(STORAGE_KEY, new Date().getTime());
}

function showInterstitialIfNeeded() {
  const lastAdShownTime = getAdShownTime();
  const currentTime = new Date().getTime();

  if (!lastAdShownTime || (currentTime - lastAdShownTime) >= 3 * 60 * 1000) {
    loadInterstitialAd();
    showInterstitialAd();
    setAdShownTime();
  }
}

document.addEventListener("deviceready", function(){

  cordova.plugins.emiAdmobPlugin.initialize();
 setTimeout(function() {
    showInterstitialIfNeeded();

    // Set up the interval after the initial delay
    setInterval(showInterstitialIfNeeded, 4 * 60 * 1000);
  },3 * 60 * 1000); 
}, false);
