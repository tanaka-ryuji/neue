$(function() {
  var $win = $(window),
      $main = $('main'),
      $nav = $('nav'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });
});

$(function() {
  $('#neueLogo').mouseover(function() {
	$('#page-wraper').addClass("function");
	$('#nav-gloval').addClass("function"); 
	$('#txt-copy').addClass("function");
	$('#neueLogo').addClass("function");
	$('#txt-copyright').addClass("function");
  })
  $('#neueLogo').mouseout(function() {
    $('#page-wraper').removeClass("function");
	$('#nav-gloval').removeClass("function"); 
	$('#txt-copy').removeClass("function");
	$('#neueLogo').removeClass("function");
	$('#txt-copyright').removeClass("function");
    })

});