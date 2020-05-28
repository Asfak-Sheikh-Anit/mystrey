$(function() {
  //navbar bg color
  $(window).scroll(function() {
    var anit = $(this).scrollTop();
    if (anit > 50) {
      $('.navbar').addClass('navcolor');
    } else {
      $('.navbar').removeClass('navcolor');
    }
  });
  //bar fixed
  $(window).scroll(function() {
    var anit = $(this).scrollTop();
    if (anit > 40) {
      $('.menu_bars').addClass('barfixed');
    } else {
      $('.menu_bars').removeClass('barfixed');
    }
  });
  //
  //animation scrool
  var html_body = $('html, body');
  $('.navbar a , .js-scroll').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 35
        }, 1500);
        return false;
      }
    }
  });
  //Testimonial
  $('.test_text_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.test_pic_slide',
    prevArrow: '.up',
    nextArrow: '.down',
  });
  $('.test_pic_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.test_text_slide',
    dots: false,
    arrows: true,
    fade: true,
    prevArrow: '.up',
    nextArrow: '.down',
  });
  $('.nrevslide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    speed: 1500,
    fade: true,
    dots: true,
    autoplaySpeed: 2000,
  });
  //blog part slide
  $('.Blog_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 2000,
    dots: false,
    autoplaySpeed: 3000,
  });
  //mixitup
  var containerEl = document.querySelector('.port_mix');
  var mixer = mixitup(containerEl);
  //venubox
  $('.venobox').venobox();
  // Search Part
  $('.search').on("click", function(event) {
    $('.open-search').css('height', '100vh');
    return false;
  });
  $('.close-search').on("click", function(event) {
    $('.open-search').css('height', '0');
    return false;
  });
  //backtotop
  $('.back-to-top').click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, 1500);
  });
  $(window).scroll(function() {
    var scrolling = $(this).scrollTop();
    if (scrolling < 820) {
      $('.back-to-top ').fadeOut();
    } else {
      $('.back-to-top ').fadeIn();
    }
  });
  // menu bars
  $('.menu_bars').click(function() {
    $('.navhide').toggleClass('navshow');
  });
  $('.menu_bars').click(function() {
    $('.menu_bars').toggleClass('fa-bars');
  });
});
