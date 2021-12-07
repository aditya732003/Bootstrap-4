$(document).ready(function() {
$('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $('.magnifying').toggleClass('open');
});
$('.navbar-nav .nav-item .nav-link.glass').click(function(){
    $('.box-collapse').toggleClass('open');
    $('.click-closed').toggleClass('open');
    $('.box-collapse-wrap').toggleClass('open');
});
$('.close-box').click(function(){
    $('.box-collapse').toggleClass('open');
    $('.click-closed').toggleClass('open');
    $('.box-collapse-wrap').toggleClass('open');
});
$('#slider-carousel').owlCarousel( {
                    loop: true,
                    center: true,
                    items: 1,
                    margin: 30,
                    autoplay: true,
                    dots:true,
                    nav:false,
                    autoplayTimeout: 8500,
                    smartSpeed: 450,
                    responsive: {
                      0: {
                        items: 1
                      },
                      768: {
                        items: 1
                      },
                      1170: {
                        items: 1
                      }
                    }
                });
$('#property-carousel').owlCarousel( {
                    loop: true,
                    center: true,
                    items: 1,
                    margin: 30,
                    autoplay: true,
                    dots:true,
                    nav:false,
                    autoplayTimeout: 8500,
                    smartSpeed: 450,
                    responsive: {
                      0: {
                        items: 1
                      },
                      768: {
                        items: 1
                      },
                      1170: {
                        items: 1
                      }
                    }
                });
$('#news-carousel').owlCarousel( {
                    loop: true,
                    center: true,
                    items: 1,
                    margin: 30,
                    autoplay: true,
                    dots:true,
                    nav:false,
                    autoplayTimeout: 8500,
                    smartSpeed: 450,
                    responsive: {
                      0: {
                        items: 1
                      },
                      768: {
                        items: 1
                      },
                      1170: {
                        items: 1
                      }
                    }
                });
$('#testimonials-carousel').owlCarousel( {
                    loop: true,
                    center: true,
                    items: 1,
                    margin: 30,
                    autoplay: true,
                    dots:true,
                    nav:false,
                    autoplayTimeout: 8500,
                    smartSpeed: 450,
                    responsive: {
                      0: {
                        items: 1
                      },
                      768: {
                        items: 1
                      },
                      1170: {
                        items: 1
                      }
                    }
                });
var btn = $('.scrolltop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '100');
});
});