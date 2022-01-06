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
$('#clients-carousel').owlCarousel( {
                    loop: true,
                    center: false,
                    items: 6,
                    margin: 40,
                    autoplay: true,
                    dots:true,
                    nav:false,
                    autoplayTimeout: 8500,
                    smartSpeed: 450,
                    responsive: {
                      0: {
                        items: 2
                      },
                      768: {
                        items: 4
                      },
                      992: {
                        items: 6
                      }
                    }
                });
$(".btn-close").click(function(e){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
}); 
$(".navbar-light .nav-item .nav-link").click(function(e){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
});
$(".navbar-light .nav-item.dropdown .nav-link").click(function(e){
    $(".navbar-collapse").addClass("show");
    $("body").addClass("offcanvas-active");
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
