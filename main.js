// aggiungo la classe .active quando clicco sul hamburger
$('.header-right > a').click(
  function() {
    $('.hamburger-menu').addClass('active');
  }
);

// tolgo la classe .active quando clicco sulla X
$('.hamburger-menu > a').click(
  function() {
    $('.hamburger-menu').removeClass('active');
  }
);
