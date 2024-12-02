// Ensure no conflict with 'event' by using proper scoping or renaming it
Array.from(document.querySelectorAll('div.docs-category-2-info>a'))
    .filter((el, i) => i % 2 === 1)
    .forEach(el => {
        el.href = el.previousElementSibling.href.replace("https://docs.google.com/open?id=", "https://www.univdocs.com/p/apps.html?");
    });

$('a#mob').each(function() {
    this.href = this.href.replace('https://docs.google.com/open?id=', 'page.html?=');
});

// Renaming the 'event' variable to 'eventElement' to avoid conflicts
let eventElement = document.getElementById('event');

// Renaming 'cleanText' function to 'clearEventText' to avoid conflicts
let clearEventText = () => {
    eventElement.value = '';  // Using 'eventElement' instead of 'event'
};

// Renaming 'bannerConfig' to 'bannerAdConfig' to avoid conflicts
const bannerAdConfig = [
    adUnitId = "ca-app-pub-2103221276430615/7945144448",
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

// Load banner ad
let loadBannerAd = () => {
    cordova.plugins.emiAdmobPlugin.loadBannerAd(bannerAdConfig);
    // call loadBannerAd();
}

// Show Banner Ad
let showBannerAd = () => {
    // Check if the banner is already initialized
    if (bannerInitialized) {
        cordova.plugins.emiAdmobPlugin.showBannerAd();
        // call showBannerAd();
    }
}

const config_Interstitial = [
    adUnitId = "ca-app-pub-2103221276430615/7193555154",
    autoShow = true
]

// Load Interstitial Ad
let loadInterstitialAd = () => {
    cordova.plugins.emiAdmobPlugin.loadInterstitialAd(config_Interstitial);
}

// Show Interstitial Ad
let showInterstitialAd = () => {
    cordova.plugins.emiAdmobPlugin.showInterstitialAd();
}

// Local storage for tracking ad shown time
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
    setInterval(showInterstitialIfNeeded, 3 * 60 * 1000);
  }, 3 * 60 * 1000); 
}, false);
