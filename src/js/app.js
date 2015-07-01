// setTimeout(function(){
// 	window.location.reload();
// },5000);

$('#menu-btn').on('click', function(){
	$('.site-navigation').toggleClass('collapse-menu');
});

$('.show-list-item').on('click', function() {
	var parent = $(this).closest('.block-lists-collapse'),
		item = parent.find('.collapse-block');
		item.toggleClass('collapse-list-item'),
		arrowDown = parent.find('.arrow-down'),
		arrowRight = parent.find('.arrow-right');
		if(arrowRight.length) {
			arrowRight.removeClass('arrow-right').addClass('arrow-down');
		}else {
			arrowDown.removeClass('arrow-down').addClass('arrow-right');
		}

			

});

$('.arrow-down').on('click', function(){
	var currentList = $(this).closest('.footer-inline-block').find('ul');
	currentList.toggleClass('list-show');
});

$('.brochur-block').hover( 
	function (e) {
		var currentBlock = $(this),
		link = currentBlock.find('.link-block a');
		link.css('color', '#4dbc57');
		console.log(link);
	},
	function (e) {
		var currentBlock = $(this),
		link = currentBlock.find('.link-block a');
		link.css('color', '#00356D');
	}
);