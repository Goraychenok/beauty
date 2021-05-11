jQuery(document).ready(function() {
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    
      loop: true,
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
  });
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
    $('.header').addClass('active');
});


$('#seoButton').click(function(event) {
    $('.seo-link').addClass('none');
    $('.seo-shadow').removeClass('none');
})

});

$(function() {
    
    var headerTwice = $('.header').height();
    var headerHeight = $('.header-twice').height();
    var blockTop = $('.header').offset().top;
    var blockBot =  $('.header-twice').height();
    var CountUpFlag = 0;
    var $window = $(window);
   
    console.log(blockBot);
    $window.on('load scroll', function() {
        var top = $window.scrollTop();
        var height = $window.height() - blockBot - headerTwice;
        
        if (top +   headerTwice >= height && CountUpFlag == 0) {
            console.log(top +   headerTwice);
            console.log(headerHeight);
            CountUp();
            CountUpFlag = 1;
        }
    });
    function CountUp() {
        $('.header-three').addClass('test');
    }
});

