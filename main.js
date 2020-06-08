// aggiungo la classe .active quando clicco sul hamburger
$('a i.fas.fa-bars').click(
  function() {
    $('.hamburger-menu').addClass('active');
  }
);

// tolgo la classe .active quando clicco sulla X
$('a i.fas.fa-times').click(
  function() {
    $('.hamburger-menu').removeClass('active');
  }
);
