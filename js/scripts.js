//The beginning of our scripts.js file which will contain any code affecting functionality of the site
$(window).scroll(function(){
  var sticky = $(".header"),
      scroll = $(window).scrollTop();

  if (scroll > 0) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});

$(document).ready(function(){
  $(".open-menu").click(function(){
    $(".side-nav").css("width", "100%");
    $(".blur").css("filter", "blur(5px)");
  });

  $(".close-menu").click(function(){
    $(".side-nav").css("width", "0");
    $(".blur").css("filter", "blur(0px)");
  });
});
