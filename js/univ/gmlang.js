	 
 let interstitial;

document.addEventListener('deviceready', async () => {
    try {
        // Initialize the InterstitialAd instance
        interstitial = new admob.InterstitialAd({
            adUnitId: 'ca-app-pub-2103221276430615/2830049212', // Test Ad Unit ID for AdMob Interstitial
        });

        // Event listener for Interstitial Ad 'load'
        interstitial.on('load', () => {
            console.log('Interstitial ad loaded.');
        });

        // Event listener for Interstitial Ad 'dismiss'
        interstitial.on('dismiss', async () => {
            console.log('Interstitial ad dismissed.');
            // Load the next Interstitial ad after dismissal
            await interstitial.load();
        });

        // Load the Interstitial Ad
        await interstitial.load();

        // Check return count from localStorage
        let returnCount = parseInt(localStorage.getItem('returnCount')) || 0;
        returnCount++;
        localStorage.setItem('returnCount', returnCount);

        if (returnCount === 3) {
            // Reset the counter
            localStorage.setItem('returnCount', 0);

          

            // Show the interstitial ad
            if (interstitial.isLoaded()) {
                await interstitial.show();
                console.log('Interstitial ad displayed.');
            } else {
                console.warn('Interstitial ad not loaded in time.');
            }
        }
    } catch (error) {
        console.error('Error displaying ads:', error);
    }
}, false);

 
