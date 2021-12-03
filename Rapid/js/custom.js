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
$('#nav-icon').click(function(){
    $(this).toggleClass('open');
});
$("[data-trigger]").on("click", function(){
    var trigger_id =  $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
});

// close button 
$(".btn-close").click(function(e){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
}); 
let scroll_link = $('.scroll');

 
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
  $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll < 100){
            $('.navbar-light').css({"background-color": "transparent", "transition": "0.5s"});
            $('.navbar-light').css('position', 'relative');
            $('.navbar-light').css({"box-shadow": "none", "transition": "0.5s"});
            $('.navbar-light').css({"height": "90px", "transition": "0.5s"});
         } else{
            $('.navbar-light').css({"background-color": "#fff", "transition": "0.5s"});
            $('.navbar-light').css('position', 'fixed');
            $('.navbar-light').css({"box-shadow": "0px 0px 30px rgb(127 137 161 / 30%)", "transition": "0.5s"});
             $('.navbar-light').css({"height": "70px", "transition": "0.5s"});
         }
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
  $('.portfolio-menu ul li').click(function(){
            $('.portfolio-menu ul li').removeClass('active');
            $(this).addClass('active');
            
            var selector = $(this).attr('data-filter');
            $('.portfolio-item').isotope({
                filter:selector
            });
            return  false;
         });
  $('#testimonial-carousel').owlCarousel( {
                    loop: true,
                    center: false,
                    items: 1,
                    margin: 80,
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
                      992: {
                        items: 1
                      }
                    }
                });
  $('#clients-carousel').owlCarousel( {
                    loop: true,
                    center: false,
                    items: 6,
                    margin: 80,
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
  $('.card-link').click(function() {
            $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
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
