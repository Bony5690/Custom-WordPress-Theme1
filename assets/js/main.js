$(function(){
 // cache the window object
 var $window = $(window);

  $('section[data-type="background"]').each(function(){

    var $bgobj = $(this); // assigning the object
    &(window).scroll(function(){

     //scroll the background at var speed
     //the yPos is a negative value because we're scrolling it up

    var y Pos = -$(window.scrollTop() /
    $bgobj.data('speed'));

    var coords = '50%' + yPos + 'px';

   // move the background

   $bgobj.css({backgroundPosition: coords})

   }); // end window scroll

  });
});
