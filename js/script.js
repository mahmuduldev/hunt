$(function(){
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        prevArrow: '<i class="fa-solid fa-arrow-left left"></i>',
        nextArrow: '<i class="fa-solid fa-arrow-right right"></i>',
        autoplay: true,
        autoplaySpeed: 1500,
    });

    $('.services-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 1500,
        vertical: true,
        verticalSwiping: true,
        prevArrow: '<i class="fa-solid fa-angle-up services-up"></i>',
        nextArrow: '<i class="fa-solid fa-angle-down services-down"></i>',
        centerMode: true,
        centerPadding: '0px',
        rows: 0,
    });
    $('.comment-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 1500,
        vertical: true,
        verticalSwiping: true,
        prevArrow: '<i class="fa-solid fa-angle-up comment-up"></i>',
        nextArrow: '<i class="fa-solid fa-angle-down comment-down"></i>',
        centerMode: true,
        centerPadding: '0px',
        rows: 0,
        asNavFor: '.comment-details',
    });
    $('.comment-details').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 1500,
        vertical: true,
        verticalSwiping: true,
        rows: 0,
        asNavFor: '.comment-wrapper',
        arrows: false,
    });
    $('.counter-text h4').counterUp({
        delay: 10,
        time: 1000,
    });
})
$(window).scroll(function(){
    if ($(window).scrollTop() > 150) {
        $('.navbar').addClass('menu')
    }else{
        $('.navbar').removeClass('menu')
    }
})
$('.top-btn').on('click', function() {
    $('html, body').animate({scrollTop: 0}, 1000)
})

$(window).on('scroll', function() {
    var scroll = $(this).scrollTop();

    if(scroll > 150){
        $('.top-btn').fadeIn(150);
    }else
        $('.top-btn').fadeOut(150);
})

new VenoBox({
    selector: '.venobox',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane',
});