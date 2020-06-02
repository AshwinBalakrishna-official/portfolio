$(document).ready(function(){
  var $header= $('header');
  var $sticky = $header.before($header.clone().addClass("sticky"));



  $(window).on("scroll",function(){

    var scrollFromTop= $(window).scrollTop();
    $("body").toggleClass("scroll",(scrollFromTop>350));
  });


  // Masonry

  $('.grid').masonry({

    //options
    itemSelector:'.grid-item',
    columnWidth:190,
    fitWidth:true,
    gutter:10
  });

  //slick slider
  $('.slider').slick({

    autoplay:true,
    autoplaySpeed:1000,
    arrows:true,
    dots:false,
    centerMode:true,
    slidesToShow:1 ,
    fade:true,
    prevArrow:'<button type="button" class="slick-prev">Previous</button>',
    nextArrow:'<button type="button" class="slick-next">Next</button>'

  });
});
