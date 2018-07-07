//Initializing functionalities when DOM is ready
$(function(){
	toggleNavMenu();
	detectScreenChange();
	toggleSubMenu();
});

//Function for toggle nav bar menu in mobile screens.
function toggleNavMenu(){
	$('.menu-btn').click(function(){
		$(this).toggleClass('open');
		if($(this).hasClass('open')){
			$('nav.nav-desktop').addClass('show').removeClass('hide');
		}else{
			$('nav.nav-desktop').addClass('hide').removeClass('show');
		}
	});
}

//Function for toggle submenu
function toggleSubMenu(){
	$('.has-submenu').on('click',function(e){
		let target = e.target;
		if($(target).parent().hasClass('has-submenu') || $(target).hasClass('has-submenu')){
			$(this).find('.submenu').slideToggle('slow');
		}
	});
}

/**************************************************************************/
//Creating a closure which returns IIFE. It will track the screensize changes
/*************************************************************************/
function detectScreenChange(){
	let initScreen = $(window).width() > 1024 ? 'large' : 'small';
	let oldScreen = "";

	return !function(){
		$(window).on('resize',function(){
			let screenChange = false;
			let newScreen = $(window).width() > 1024 ? 'large' : 'small';
			if(oldScreen === "") oldScreen = newScreen;
			if(oldScreen !== newScreen) screenChange = true;
			if(screenChange){
				newScreen === 'large' ? $('nav.nav-desktop').addClass('show').removeClass('hide') : $('nav.nav-desktop').addClass('hide').removeClass('show');
				oldScreen = newScreen;
			}
		}); 
	}();
}

