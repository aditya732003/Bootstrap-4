$(document).ready(function() {
  $('.dropdown-menu > .dropdown > a').addClass('dropdown-toggle');

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');
  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-menu > .dropdown .show').removeClass("show");
  });
  return false;
});
$(".btn-close").click(function(e){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
}); 
 $('#slider-carousel').owlCarousel( {
                    loop: true,
                    center: true,
                    items: 1,
                    margin: 0,
                    autoplay: true,
                    dots:true,
                    nav:true,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
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
 
let scroll_link = $('.scroll');

  //smooth scrolling -----------------------
  scroll_link.click(function(e){
      e.preventDefault();
      let url = $('body').find($(this).attr('href')).offset().top;
      $('html, body').animate({
        scrollTop : url
      },700);
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
      return false; 
   });
  $('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
 $('.card-link').click(function() {
            $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
        });
  $('.portfolio-menu ul li').click(function(){
            $('.portfolio-menu ul li').removeClass('active');
            $(this).addClass('active');
            
            var selector = $(this).attr('data-filter');
            $('.portfolio-item').isotope({
                filter:selector
            });
            return  false;
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
         