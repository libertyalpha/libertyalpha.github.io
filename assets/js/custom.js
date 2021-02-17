
// one page scroling nav//

function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href')); 
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 500);
  }
  $('[data-scroll]').on('click', scrollToSection);
  
  
  // bg-color-change js//
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 170) {
	    $(".navbar").css({"background-color": "yellow", "transition": ".7s"});
	  }

	  else{
		  $(".navbar").css("background" , "transparent");  	
	  }
	  
	  if (scroll > 480) {
	    $(".navi-sigaret").css({"background-color": "yellow", "transition": ".7s"});
	  }

	  else{
		  $(".navi-sigaret").css("background" , "transparent");  	
	  }
  })














