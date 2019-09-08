jQuery(document).ready(function($){

$('.live-search-list li').each(function(){
$(this).attr('data-search-term', $(this).text().toLowerCase());
});

$('.live-search-box').on('keyup', function(){

var searchterm = $(this).val().toLowerCase();

    $('.live-search-list li').each(function(){

        if ($(this).filter('[data-search-term *= ' + searchterm + ']').length > 0 || searchterm.length < 1) {
            $(this).show();
        } else {
            $(this).hide();
        }

    });

});

});
$('.ndfHFb-c4YZDc-Wrql6b').remove();
$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
  $(this).parent(".sub-menu").children("ul").slideToggle("100");
  $(this).find(".right").toggleClass("fa-caret-down fa-caret-down");
});
var imageOffset = 0
function moving_Image() {
  imageOffset += 50
  document.getElementById("movingImage1").style.left = imageOffset + "px";
    document.getElementById("movingImage").style.left = imageOffset + "px";


}
var imageOffset = 0
function moving_Image1() {
  imageOffset += -50
  document.getElementById("movingImage1").style.left = imageOffset + "px";
    document.getElementById("movingImage").style.left = imageOffset + "px";

}



function popupOpeClose(popup2) {
	
	/* Add div inside popup1 for layout if one doesn't exist */
	if ($(".wrapper").length == 0){
		$(popup2).wrapInner("<div class='wrapper'></div>");
	}
	
	/* Open popup1 */
	$(popup2).show();

	/* Close popup1 if user clicks on background */
	$(popup2).click(function(e) {
		if ( e.target == this ) {
			if ($(popup2).is(':visible')) {
				$(popup2).hide();
			}
		}
	});

	/* Close popup1 and remove errors if user clicks on cancel or close buttons */
	$(popup2).find("button[name=close2]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popup2).hide();
	});
}

$(document).ready(function () {
	$("[data-js=open2]").on("click", function() {
		popupOpeClose($(".popup2"));
	});
});
function popupOpeClose(popup1) {
	
	/* Add div inside popup1 for layout if one doesn't exist */
	if ($(".wrapper").length == 0){
		$(popup1).wrapInner("<div class='wrapper'></div>");
	}
	
	/* Open popup1 */
	$(popup1).show();

	/* Close popup1 if user clicks on background */
	$(popup1).click(function(e) {
		if ( e.target == this ) {
			if ($(popup1).is(':visible')) {
				$(popup1).hide();
			}
		}
	});

	/* Close popup1 and remove errors if user clicks on cancel or close buttons */
	$(popup1).find("button[name=close1]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popup1).hide();
	});
}

$(document).ready(function () {
	$("[data-js=open1]").on("click", function() {
		popupOpeClose($(".popup1"));
	});
});
function popupOpenClose(popup) {
	
	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper").length == 0){
		$(popup).wrapInner("<div class='wrapper'></div>");
	}
	
	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

	/* Close popup and remove errors if user clicks on cancel or close buttons */
	$(popup).find("button[name=close]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popup).hide();
	});
}

$(document).ready(function () {
	$("[data-js=open]").on("click", function() {
		popupOpenClose($(".popup"));
	});
});
(function($) {
  "use strict";

// Page Transitions
$(document).ready(function() {
  
  $(".animsition").animsition({
  
    inClass               :   'fade-in',
    outClass              :   'fade-out-down',
    inDuration            :    800,
    outDuration           :    800,
    linkElement           :   '.animsition-link',
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading               :    true,
    loadingParentElement  :   'body', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    
    overlay               :   false,
    
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
  });
});

// Image Lightbox
( function( $ ) {

    $( '.swipebox' ).swipebox( {
        useCSS : true, // false will force the use of jQuery for animations
        useSVG : true, // false to force the use of png for buttons
        initialIndexOnArray : 0, // which image index to init when a array is passed
        hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
        hideBarsDelay : 0, // delay before hiding bars on desktop
        videoMaxWidth : 1140, // videos max width
        beforeOpen: function() {}, // called before opening
        afterOpen: null, // called after opening
        afterClose: function() {}, // called after closing
        loopAtEnd: false // true will return to the first image after the last image is reached
    } );

} )( jQuery );

// Accordion 

    $(function(){
      $('.mdl-collapse__content').each(function(){
        var content = $(this);
        content.css('margin-top', -content.height());
      })

      $(document.body).on('click', '.mdl-collapse__button', function(){
        $(this).parent('.mdl-collapse').toggleClass('mdl-collapse--opened');
      })
    })

})(jQuery);
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    window.open = cordova.InAppBrowser.open;
}

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(FileTransfer);
}
var fileTransfer = new FileTransfer();
var uri = encodeURI("https://googleusercontent.com/","https://drive.google.com","");

fileTransfer.download(
    uri,
    fileURL,
    function(entry) {
        console.log("download complete: " + entry.toURL());
    },
    function(error) {
        console.log("download error source " + error.source);
        console.log("download error target " + error.target);
        console.log("download error code" + error.code);
    },
    false,
    {
        headers: {
            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
        }
    }
);
