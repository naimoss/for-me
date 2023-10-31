$('a#mob').each(function(){ this.href=this.href.replace('https://docs.google.com/open?id=', 'https://drive.google.com/open?id=')});
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  // Replace 'YOUR_ADMOB_APP_ID' with your AdMob App ID
  admob.interstitial.config({
      id: 'ca-app-pub-2103221276430615/4737556473',
    autoShow: true, // Set to true if you want the interstitial ad to show immediately when loaded
  });

  // Function to check if it's time to show the interstitial ad
  function shouldShowInterstitial() {
    const lastShownTimestamp = localStorage.getItem('lastInterstitialTimestamp');
    if (!lastShownTimestamp) {
      return true; // Show the ad if it hasn't been shown before
    }

    const currentTime = new Date().getTime();
    const timeSinceLastShown = currentTime - parseInt(lastShownTimestamp, 10);

    return timeSinceLastShown >= 40000; // 60 seconds (60,000 milliseconds)
  }

  // Event listener for when the interstitial ad is closed
  document.addEventListener('admob.interstitial.events.CLOSE', function () {
    console.log('Interstitial ad is closed');

    // Store the current timestamp
    localStorage.setItem('lastInterstitialTimestamp', new Date().getTime());

    // Load a new interstitial ad after it's closed, but only if the delay has passed
    if (shouldShowInterstitial()) {
      admob.interstitial.prepare();
    }
  });

  // Load the interstitial ad, but only if the delay has passed
  if (shouldShowInterstitial()) {
    admob.interstitial.prepare();
  }
}
