$(function(){
	$('.accordion-header').on('click',function(){
		let accordionBody = $(this).siblings('.accordion-body');
		$(accordionBody).slideToggle("slow");
	});
});
