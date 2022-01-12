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
            $('.navbar-light').css({"background": "transparent", "transition": "0.5s"});
            $('.navbar-light').css({"padding": "20px 0", "transition": "0.5s"});
            $('.navbar-light').css({"box-shadow": "none", "transition": "0.5s"});
            } 
            else{
           $('.navbar-light').css({"background": "#fff", "transition": "0.5s"});
           $('.navbar-light').css({"padding": "5px 0", "transition": "0.5s"});
           $('.navbar-light').css({"box-shadow": "0px 2px 20px rgb(1 41 112 / 10%)", "transition": "0.5s"});
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
  $('#testimonial-carousel').owlCarousel( {
                    loop: true,
                    center: false,
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
                      992: {
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

$(".navbar-light .nav-item .nav-link").click(function(e){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
});
$(".navbar-light .nav-item.dropdown .nav-link").click(function(e){
    $(".navbar-collapse").addClass("show");
    $("body").addClass("offcanvas-active");
}); 
let modalId = $('#image-gallery');

loadGallery(true, 'a.preview-link');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image')
        .show();
      if (counter_max === counter_current) {
        $('#show-next-image')
          .hide();
      } else if (counter_current === 1) {
        $('#show-previous-image')
          .hide();
      }
    }
function loadGallery(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $('#show-next-image, #show-previous-image')
        .click(function () {
          if ($(this)
            .attr('id') === 'show-previous-image') {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#image-gallery-title')
          .text($sel.data('title'));
        $('#image-gallery-image')
          .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
      }

      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGallery($(this));
        });
    }


// build key actions
$(document)
  .keydown(function (e) {
    switch (e.which) {
      case 37: // left
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
          $('#show-previous-image')
            .click();
        }
        break;

      case 39: // right
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
          $('#show-next-image')
            .click();
        }
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });
 });



