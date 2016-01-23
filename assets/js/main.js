

/*================= when scroll to fix header =================*/
$(window).scroll(function() {
		var y_scroll_pos = window.pageYOffset;
		var scroll_pos_test = 25;

		if(y_scroll_pos > scroll_pos_test) {
		 $("body").addClass('scrolled');
		}
		else
		{
			$("body").removeClass('scrolled');
		}
});




/*===================== swipe / touch support for carousel =====================*/
$("#storyCarousel").swiperight(function() {
	$(this).carousel('prev');
});
$("#storyCarousel").swipeleft(function() {
	$(this).carousel('next');
});


/*===================== #carousel key Control =====================*/
$(document).bind('keyup', function(e) {

  if(e.keyCode==39){
  $('a.story-controls.right').trigger('click');
  $('.keys').addClass('animated fadeOut');
  }

  else if(e.keyCode==37){
  $('a.story-controls.left').trigger('click');
  $('.keys').addClass('animated fadeOut');
  }

});



/*===================== owlCarousel / LightBox =====================*/
 $(document).ready(function () {
     $("a[rel^='prettyPhoto']").prettyPhoto();

     $(".owl-slider").owlCarousel({
      navigation : true, // Show next and prev buttons
         autoPlay: 3000, //Set AutoPlay to 3 seconds

         items: 5,
         itemsDesktop: [1199, 3],
         navigationText: ["<i class=\"fa fa-caret-left\"></i>", "<i class=\"fa fa-caret-right\"></i>"],
         itemsDesktopSmall: [979, 3]

     });
		 $('#storyCarousel, #home_carousel').carousel({
			 interval: false
		 });
 });


 /*===================== Form WIZARD =====================*/
	var theForm = document.getElementById( 'theForm' );

	new stepsForm( theForm, {
		onSubmit : function( form ) {
			// hide form
			classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );

			/*
			form.submit()
			or
			AJAX request (maybe show loading indicator while we don't have an answer..)
			*/

			// let's just simulate something...
			var messageEl = theForm.querySelector( '.final-message' );
			messageEl.innerHTML = 'Thank you! We\'ll be in touch.';
			classie.addClass( messageEl, 'show' );
		}
	} );

	// trigger
	$('.submit_storey').click(function () {
		$('#wizard').toggleClass('bounceInUpI');
	});








	/*===================== Main Navigation =====================*/
	// (function() {
	// 	[].slice.call(document.querySelectorAll('.menu')).forEach(function(menu) {
	// 		var menuItems = menu.querySelectorAll('.menu__link'),
	// 			setCurrent = function(ev) {
	// 				ev.preventDefault();
	//
	// 				var item = ev.target.parentNode; // li
	//
	// 				// return if already current
	// 				if (classie.has(item, 'menu__item--current')) {
	// 					return false;
	// 				}
	// 				// remove current
	// 				classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
	// 				// set current
	// 				classie.add(item, 'menu__item--current');
	// 			};
	//
	// 		[].slice.call(menuItems).forEach(function(el) {
	// 			el.addEventListener('click', setCurrent);
	// 		});
	// 	});
	//
	// 	[].slice.call(document.querySelectorAll('.link-copy')).forEach(function(link) {
	// 		link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
	// 		new Clipboard(link);
	// 		link.addEventListener('click', function() {
	// 			classie.add(link, 'link-copy--animate');
	// 			setTimeout(function() {
	// 				classie.remove(link, 'link-copy--animate');
	// 			}, 300);
	// 		});
	// 	});
	// })(window);

	// nav needs a set width an the li>a for the line to work.
	// var navItem = $('.menu--omar .menu__item');
	// var navItemWidth = navItem.width();
	//
	// $(document).ready(function(){
	// 	navItem.css({'width': navItemWidth + 'px'});
	// 	console.log(navItemWidth);
	// });






















	/*===================== Nav Hamburger Icon =====================*/
	$(document).ready(function() {
	    var hamburger = $('li.hamburger');

	    hamburger.on('click', function() {
				$('body').toggleClass('ham_menu_open');
	    }); //click-function

	});















	/*===================== Smooth Scroll =====================*/
	$(function() {
	  $('a[href*=#smooth]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});


















	/*===================== Blur On Scroll =====================*/
	// settings
	var    blurRange = 0   ;/* higher = blur slower - 15 */
	var   scaleRange = 4000 ;/* higher = scale slower */
	var opacityRange = 0 ;/* higher = fade slower - 600 */
	var opacityStart = 1  ;
	var ropc_opacityRange = 650 ;/* higher = fade slower */
	var ropc_opacityStart = 3  ;
	var reverseopacityRange = 700 ;/* higher = fade slower */
	var reverseopacityStart = 0  ;

	$(window).on('scroll', function () {

		// blur
	    var pixs = $(document).scrollTop();
	    pixs = pixs / blurRange;

	    // scale
	    var scalE = $(document).scrollTop();
	    scalE = scalE / scaleRange;
	    scalE ++;
	    var sscale = "scale(" + scalE;

	    // Opacity
	    var opC = $(document).scrollTop();
	    opC = opC / opacityRange;
	    opC = opacityStart - opC;

	    // Opacity - ropc out
	    var rOpc_out = $(document).scrollTop();
	    rOpc_out = rOpc_out / ropc_opacityRange;
	    rOpc_out = ropc_opacityStart - rOpc_out;

	    // reverseOpacity
	    var rOpc = $(document).scrollTop();
	    rOpc = rOpc / reverseopacityRange;
	    rOpc = reverseopacityStart + rOpc;




	    $(".trio").css({
	    	"-webkit-filter": "blur("+pixs+"px)",
	    	        "filter": "blur("+pixs+"px)",
	   	});

	    $(".trio").css({
	        "-moz-transform": sscale,
	     "-webkit-transform": sscale
	    });

	    $(".trio").css({
	                "opacity": opC
	    });

	    $(".rOpc").css({
	                "opacity": rOpc
	    });

	    $(".is-sticky #sticker .rOpc").css({
	                "opacity": rOpc_out
	    });



	    // Opacityy
		var opacityRange1 = 600 ;/* higher = fade slower */
		var opacityStart1 = 1  ;

	    var logoOpacity = $(document).scrollTop();
	    logoOpacity = logoOpacity / opacityRange1; /* higher = fade slower */
	    logoOpacity = opacityStart1 - logoOpacity;


	    $(".opacityS").css({
	                "opacity": logoOpacity
	    });

	});
