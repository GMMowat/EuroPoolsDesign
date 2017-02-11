//The beginning of our scripts.js file which will contain any code affecting functionality of the site

//If the user scrolls down lock the navigation bar to the top of the window.
$(window).scroll(function(){
  var sticky = $(".header"),
      scroll = $(window).scrollTop();

  if (scroll > 0) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});

//Check if the website is ready
$(document).ready(function(){
  //menuOpen variable used when opening and closing mobile menu
   menuOpen = false;
   //user clicks the open-menu button
    $(".open-menu").click(function(){
      //if the menu isn't open run the code below
      if(menuOpen == false) {
        //set the menuOpen variable to true because the menu is now open
        menuOpen = true;
        //Change the height of the drop-nav so that it shows on screen
        $(".side-nav").css("width", "100%");
        //set a transition value so that the menu drops down in an animation
        $(".side-nav").css("transition", "1s");
        //After a certain amount of time remove the transition value so that the drop-nav doesn't animate anymore
        setTimeout(function () {
          $('.side-nav').css("transition", "initial");
        }, 500);
      }
      //if button is clicked again
        {
        //set menuOpen to false because the menu is closed
        menuOpen = false;
        //hide the menu by clearing the height
        $(".side-nav").css("width", "0");
        //add a new transition value to animate the closing of the menu
        $(".side-nav").css("transition", "1s");
        //After a certain amount of time remove the transition value so that the drop-nav doesn't animate anymore
        setTimeout(function () {
          $('.side-nav').css("transition", "initial");
        }, 500);
      }
    });
});
