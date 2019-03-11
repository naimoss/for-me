document.addEventListener('deviceready', function() {
document.addEventListener("online", onOnline, false);
function onOnline() {   $(document).ready(function(){


		if (location.href.indexOf("#") != -1) {
        // Your code in here accessing the string like this
         location.href.substr(location.href.indexOf("#"))
    }
	 $('a[disabled], a.disabled').click(function(e){
        console.log('override?');
        e.stopImmediatePropagation();           
            e.preventDefault();
        e.stopPropagation();
        return false;       
    });
  $("a").click(function(event){
      swal({
    text: "Vous n'avez pas de connexion Internet",
    timer: 2000,
    showConfirmButton: false
  });

	event.preventDefault();
  });
});
 }

document.addEventListener("offline", onOffline, false);
function onOffline() {  
$(document).ready(function(){


		if (location.href.indexOf("#") != -1) {
        // Your code in here accessing the string like this
         location.href.substr(location.href.indexOf("#"))
    }
	 $('a[disabled], a.disabled').click(function(e){
        console.log('override?');
        e.stopImmediatePropagation();           
            e.preventDefault();
        e.stopPropagation();
        return false;       
    });
  $("a").click(function(event){
      swal({
    text: "Vous n'avez pas de connexion Internet",
    timer: 2000,
    showConfirmButton: false
  });

	event.preventDefault();
  });
});


 }

}, false);
