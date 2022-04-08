// TESTIMONIALS 
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    // dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            // dots:true
        },
        600:{
            items:2,
            nav:true,
            // dots:true
        },
        800:{
            items:3,
            nav:true,
            loop:true,
            // dots:true
        }
    }
})
  });

