Array.from(document.querySelectorAll('div.docs-category-2-info>a'))
    .filter((el, i) => i % 2 === 1)
    .forEach(el => el.href = el.previousElementSibling.href.replace("https://docs.google.com/open?id=", "https://www.univdocs.com/p/apps.html?"));

$('a#mob').each(function() {
    this.href = this.href.replace('https://docs.google.com/open?id=', 'page.html?=');
});

let banner ;

// Function to show a confirmation dialog
function showExitConfirmation() {
    navigator.notification.confirm(
        'هل تريد الخروج من التطبيق ؟', // Message
        (buttonIndex) => {
            if (buttonIndex === 1) {
                navigator.app.exitApp(); // Exit the app if the user confirms
            }
        },
        'الخروج من التطبيق', // Title
        ['نعم', 'لا'] // Buttons
    );
}

// Custom back button behavior
function handleBackButton() {
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page name

    if (currentPage === 'index11.html') {
        // Show confirmation dialog on the home page
        showExitConfirmation();
    } else {
        // Navigate back to the previous page
        window.history.back();
    }
}

document.addEventListener('deviceready', async () => {
    // Listen for the back button
    document.addEventListener('backbutton', (event) => {
        event.preventDefault(); // Prevent default back button behavior
        handleBackButton(); // Use custom behavior
    });

    // Check if the banner has already been displayed in this session
    if (sessionStorage.getItem('bannerDisplayed') === 'true') {
        return; // Do not display the banner again if it has already been shown in this session
    }

    try {
        // Initialize the BannerAd instance
        banner = new admob.BannerAd({
            adUnitId: 'ca-app-pub-2103221276430615/1071348361', // Replace with your test or production Ad Unit ID
            size: { height: 60 }
        });

        // Show the banner ad
        await banner.show();
        console.log('Banner ad displayed successfully.');

        // Set the session storage flag to true to prevent the banner from being shown again
        sessionStorage.setItem('bannerDisplayed', 'true');
    } catch (error) {
        console.error('Error displaying banner ad:', error);
    }

    try {
        // Initialize the InterstitialAd instance
        interstitial = new admob.InterstitialAd({
            adUnitId: ' ', // Replace with your interstitial Ad Unit ID
        });

        // Load the Interstitial Ad
        await interstitial.load();

        // Start a loop to display interstitial ads every 4 minutes
        setInterval(async () => {
            console.log('Attempting to show interstitial ad in loop...');
            try {
                if (await interstitial.isLoaded()) {
                    // Hide banner before showing interstitial
                    await banner.hide();
                    await interstitial.show();
                    console.log('Interstitial ad displayed.');
                } else {
                    console.log('Interstitial ad not loaded. Reloading...');
                    await interstitial.load();
                }
            } catch (error) {
                console.error('Error displaying interstitial ad in loop:', error);
            }
        }, 340000); // 4 minutes in milliseconds

        // Event listener for Interstitial Ad 'dismiss'
        interstitial.on('dismiss', async () => {
            console.log('Interstitial ad dismissed.');
            // Reload interstitial for next display
            try {
                await interstitial.load();
                console.log('Interstitial ad reloaded.');
            } catch (reloadError) {
                console.error('Error reloading interstitial ad:', reloadError);
            }
            // Re-show the banner after the interstitial is dismissed
            await banner.show();
        });
    } catch (error) {
        console.error('Error with interstitial ad:', error);
    }
}, false);

// Handle page navigation or unload to remove the banner and reset the flag
window.addEventListener('beforeunload', () => {
    if (banner) {
        banner.remove(); // Remove the banner when navigating away or page is unloaded
        sessionStorage.removeItem('bannerDisplayed'); // Reset the session flag
    }
});




let interstitial;
let lastInterstitialTimestamp = Date.now(); // Track the last time an interstitial was shown

// Function to check and show the interstitial ad
const checkAndShowInterstitial = async () => {
    const currentTime = Date.now();
    if (currentTime - lastInterstitialTimestamp >= 240000) { // 4 minutes
        try {
            if (await interstitial.isLoaded()) {
                await interstitial.show(); // Show the interstitial
                console.log('Interstitial ad displayed.');
                lastInterstitialTimestamp = currentTime; // Update the timestamp
            } else {
                console.log('Interstitial ad not loaded. Reloading...');
                await interstitial.load();
            }
        } catch (error) {
            console.error('Error displaying interstitial ad:', error);
        }
    }
};

document.addEventListener('deviceready', async () => {
    // Initialize the InterstitialAd instance
    try {
        interstitial = new admob.InterstitialAd({
            adUnitId: 'ca-app-pub-2103221276430615/4357900688', // Replace with your interstitial Ad Unit ID
        });

        await interstitial.load();

        // Periodic check for interstitial
        setInterval(checkAndShowInterstitial, 60000); // Check every minute

        // Reload interstitial on dismiss
        interstitial.on('dismiss', async () => {
            console.log('Interstitial ad dismissed.');
            try {
                await interstitial.load(); // Reload for next use
                console.log('Interstitial ad reloaded.');
            } catch (error) {
                console.error('Error reloading interstitial ad:', error);
            }
        });

        // Handle app resume to check interstitial
        document.addEventListener('resume', async () => {
            console.log('App resumed.');
            await checkAndShowInterstitial();
        });
    } catch (error) {
        console.error('Error with interstitial ad:', error);
    }
});
