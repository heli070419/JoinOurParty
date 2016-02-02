angular.module('joinOurParty.resume').controller('ResumeController', ResumeController);

ResumeController.$inject = [];

function ResumeController(){
	init();

	function init(){
		$('#resumeTab a').click(function (e) {
  			e.preventDefault()
  			$(this).tab('show')
		});
	}
}
