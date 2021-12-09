$(document).ready(function() {
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 100){
       $('.navbar-dark').css('background', 'transparent');
      } 
      else{
       $('.navbar-dark').css('background', '#261f44');
      }
});
});
