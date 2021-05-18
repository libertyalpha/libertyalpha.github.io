
// one page scroling nav//

function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href')); 
    $('html, body').animate({
      scrollTop: $section.offset().top  - 130
    }, 500);
  }
  $('[data-scroll]').on('click', scrollToSection);
  
  
  // bg-color-change js//
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 170) {
	    $(".navbar").css({"background-color": "#d7d7df ", "transition": ".7s"});
	  }

	  else{
		  $(".navbar").css("background" , "#fff");  	
	  }
	  
	  if (scroll > 480) {
	    $(".navi-sigaret").css({"background-color": "#d7d7df", "transition": ".7s"});
	  }

	  else{
		  $(".navi-sigaret").css("background" , "#fff");  	
	  }
  })
// BACK TO TOP

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});













