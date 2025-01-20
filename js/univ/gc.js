$('a#mob').each(function(){ this.href=this.href.replace('https://docs.google.com/open?id=', 'market://details?id=com.genie.civile.dz.univ&')});
$('a#mob').each(function(){ this.href=this.href.replace('https://drive.google.com/open?id=', 'market://details?id=com.genie.civile.dz.univ&')});

   window.onload = function() {
     Swal.fire({
  icon: 'error',
  title: '<a href="market://details?id=com.genie.civile.dz.univ" style=" font-family:exo 2;color: #000; ">Oops...</a>',
  text: 'Desole, cette version a rencontre de nombreuses erreurs, tres peu de documents. Veuillez mettre a jour vers la derniere version pour continuer à utiliser l"application. Merci',
  footer: '<a href="market://details?id=com.genie.civile.dz.univ" style="font-size: large;color: #f00; ">Cliquez ici pour mettre à jour</a>'
})
    } ;
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






document.addEventListener('deviceready', async () => {
    let interstitial;

    try {
        // Initialize the InterstitialAd instance
        interstitial = new admob.InterstitialAd({
            adUnitId: 'ca-app-pub-2103221276430615/4357900688', // Test Ad Unit ID
        });

        // Load the interstitial ad
        await interstitial.load();
        console.log("Interstitial ad loaded.");

        // Reload interstitial after dismiss
        interstitial.on('dismiss', async () => {
            console.log('Interstitial ad dismissed. Reloading...');
            try {
                await interstitial.load();
                console.log('Interstitial ad reloaded.');
            } catch (error) {
                console.error('Error reloading interstitial ad:', error);
            }
        });

    } catch (error) {
        console.error('Error initializing interstitial ad:', error);
        return; // Stop execution if ad initialization fails
    }

    // Initialize click count in sessionStorage if not set
    if (!sessionStorage.getItem('clickCount')) {
        sessionStorage.setItem('clickCount', 0);
    }

    let clickCount = parseInt(sessionStorage.getItem('clickCount'));

    // Track clicks on links with id="mob"
    document.querySelectorAll('a#mob').forEach(link => {
        link.addEventListener('click', async () => {
            clickCount++;
            sessionStorage.setItem('clickCount', clickCount); // Update sessionStorage

            console.log(`Click count: ${clickCount}`);

            // Show alert and interstitial for every 3 clicks
            if (clickCount % 2 === 0) {

                console.log('Attempting to display interstitial ad.');

                if (interstitial && interstitial.isLoaded()) {
                    try {
                        await interstitial.show();
                        console.log('Interstitial ad displayed.');
                    } catch (error) {
                        console.error('Error displaying interstitial ad:', error);
                    }
                } else {
                    console.log('Interstitial ad not loaded. Skipping display.');
                }
            }
        });
    });

    // Prevent back navigation with an alert
    window.addEventListener('popstate', () => {
        if (clickCount >= 2) {
            
            window.history.pushState(null, document.title, window.location.href); // Prevent back navigation
        }
    });

    // Push an initial state to prevent immediate back navigation
    window.history.pushState(null, document.title, window.location.href);
});

