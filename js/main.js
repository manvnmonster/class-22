(function($){
	'use strict';

//code start
$('h1').hide();

$('#akash').show();
$('#akash').html('<u>Akash</u> is a good boy ');
$('.abc p').prepend('<b>Good day!</b>')
$('.abc p').append('<b>Thank You!</b>')

$('#akash').css({
	color : '#33d9b2',
	fontSize: 50
});

$('.abc').find('a').css({
	textDecoration : 'none',
	color : '#ffb142',
	fontWeight : 700
});

//$('a').parent('p').hide();

//$('.habiba').addClass('afroja');
//$('.habiba').removeClass('afroja');
$('.abc > a').on('click',function () {
	$('.habiba').addClass('afroja');
});

$('.habiba').on('click', function(){
	$('.habiba').removeClass('afroja');

});

$('.abc p a').on('click', function(){
	$('.bhag').fadeIn();
});
$('.bhag span').on('click',function(){
	$('.bhag').fadeOut();
})








}) (jQuery);