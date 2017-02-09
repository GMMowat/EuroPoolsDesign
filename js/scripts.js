//The beginning of our scripts.js file which will contain any code affecting functionality of the site
$(document).ready(function(){

  $(".open-menu").click(function(){
    $(".side-nav").css("width", "100%");
    $(".open-menu").hide();
  });

  $(".close-menu").click(function(){
    $(".side-nav").css("width", "0%");
    $(".open-menu").show();
  });

});
