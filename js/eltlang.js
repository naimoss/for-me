

$(document).ready(function(){
    
	var app_lang = localStorage.getItem("language");	
	if(!app_lang || app_lang == 'null' || app_lang == '' || app_lang == 'false' || app_lang == 'undefined'){ window.localStorage.setItem("language","en"); } 
	
	changeLang(localStorage.getItem("language"));
	
	var admobid = {};
	if( /(android)/i.test(navigator.userAgent) ) { 
		admobid = { 
			banner: 'ca-app-pub-2103221276430615/8862205646',
			interstitial: 'ca-app-pub-2103221276430615/8678935835'
		};
	}
	
	function initApp() {
		if (AdMob) {
			AdMob.createBanner({
				adId : admobid.banner,
				position : AdMob.AD_POSITION.BOTTOM_CENTER,
				autoShow : true
			});
		}
		
		if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:true} );
		 if(AdMob) AdMob.showInterstitial();	
	}	

	document.addEventListener('deviceready', initApp, false);

}); 
