//Executing a function once the DOM gets ready
$(function(){
	//Initial state of modal is closed
	let modalOpen = false;
	let targetId = '';
	$('#btn').on('click',function(e){
		e.preventDefault();
		targetId = $(this).attr('target-id');
		!modalOpen ? $(`#${targetId}`).fadeIn() : $(`#${targetId}`).fadeOut();
		modalOpen = !modalOpen;
	});

	$('.close').add('button.danger').on('click',function(e){
		modalOpen = !modalOpen;
		$(`#${targetId}`).fadeOut();
	})

});