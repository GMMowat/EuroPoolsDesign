//The beginning of our scripts.js file which will contain any code affecting functionality of the site
$(window).scroll(function(){
  var sticky = $(".header"),
      scroll = $(window).scrollTop();

  if (scroll > 0) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});

$(document).ready(function(){
   menuOpen = false;
    $(".open-menu").click(function(){
      if(menuOpen == false) {
        menuOpen = true;
        $(".side-nav").css("max-height", "100%");
      }
      else {
        menuOpen = false;
        $(".side-nav").css("max-height", "0");
      }
    });
});
