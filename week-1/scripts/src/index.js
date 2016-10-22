// require('owl.carousel');
require('./carousel');

$(window).on('scroll touchmove', function() {
   let scrollToTop = $(document).scrollTop(); // how much scroll have we done?

   if (scrollToTop > 5) {
     $('.nav--top').addClass('nav--top--sticky');
   } else {
     $('.nav--top').removeClass('nav--top--sticky');
   }
});
