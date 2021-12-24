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
 $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll < 100){
            $('.navbar-light').css('background', 'transparent');
            $('.navbar-light').css('position', 'relative');
            $('.navbar-light').css('box-shadow', 'none');
            $('.topbar').css('display', 'block');
         } else{
            $('.navbar-light').css('background', '#fff');
            $('.navbar-light').css('position', 'fixed');
            $('.navbar-light').css('box-shadow', '0px 0px 20px 0px rgb(0 0 0 / 10%)');
            $('.topbar').css('display', 'none');
         }
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
