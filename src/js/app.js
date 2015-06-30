// setTimeout(function(){
// 	window.location.reload();
// },5000);

$('#menu-btn').on('click', function(){
	$('#login-menu').toggleClass('none');
	$('#main-menu').toggleClass('none');
	$('.site-navigation').toggleClass('none');
});

$('.arrow-down').on('click', function(){
	var currentList = $(this).closest('.footer-inline-block').find('ul');
	currentList.toggleClass('show');
});