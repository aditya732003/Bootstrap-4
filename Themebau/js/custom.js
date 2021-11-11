$(document).ready(function() {
$('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $(".navbar-dark .navbar-nav .nav-item .btn-light").toggleClass('open');
});
$('.footer .interactive-links').mouseenter(function(){
   $(".footer .interactive-links .interactive-links-image").addClass('hover');
});
$('.footer .interactive-links').mouseleave(function(){
   $(".footer .interactive-links .interactive-links-image").removeClass('hover');
});
 $('#projects-carousel').owlCarousel( {
                    loop: true,
                    center: false,
                    items: 3,
                    margin: 70,
                    autoplay: false,
                    dots:true,
                    autoplayTimeout: 8500,
                    smartSpeed: 450,
                    responsive: {
                      0: {
                        items: 1
                      },
                      768: {
                        items: 2
                      },
                      1170: {
                        items: 3
                      }
                    }
                });

 $('#menu-carousel').owlCarousel( {
                    loop: true,
                    center: true,
                    items: 3,
                    margin: 30,
                    autoplay: false,
                    dots:true,
                    autoplayTimeout: 8500,
                    smartSpeed: 450,
                    responsive: {
                      0: {
                        items: 1
                      },
                      768: {
                        items: 3
                      },
                      1170: {
                        items: 3
                      }
                    }
                });
});
