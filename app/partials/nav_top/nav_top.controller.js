angular.module('joinOurParty.nav_top').controller('NavTopController', NavTopController);

NavTopController.$inject = [];

function NavTopController(){
	console.log('nat top controller ...');
	
	init();

	function init(){

		/*$('nav ul > li').click(function (e) {
            e.preventDefault();
            $('nav ul > li').removeClass('active');
            $(this).addClass('active');                
    	});*/
    }           
}
