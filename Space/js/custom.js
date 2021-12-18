$(document).ready(function() {
$('.dropdown').on('show.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});

$('.dropdown').on('hide.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
});
$('#nav-icon').click(function(){
    $(this).toggleClass('open');
  });
 $('#forward-carousel').owlCarousel( {
                    loop: false,
                    center: false,
                    items: 2,
                    margin: 30,
                    autoplay: false,
                    dots: false,
                    nav: true,
                    navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
                    autoplayTimeout: 8500,
                    smartSpeed: 450,
                    responsive: {
                      0: {
                        items: 1
                      },
                      768: {
                        items: 2
                      },
                      1024: {
                        items: 3
                      }
                    }
                });
   $('.card-header').click(function() {
            $(this).find('i').toggleClass('fa-solid fa-plus fa-solid fa-minus');
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


