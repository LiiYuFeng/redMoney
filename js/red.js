$(function(){
	$(".red").click(function(){
			event.stopPropagation();//阻止冒泡事件
			$('.bodymeng').show();
			$('.showCon').show();
	
		});
		$(document).click(function(){
		    $('.bodymeng').hide();
			$('.showCon').hide();
		});
})