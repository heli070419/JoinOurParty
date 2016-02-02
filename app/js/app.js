angular.module('joinOurParty', ['ngRoute',
								'joinOurParty.home',
								'joinOurParty.about',
								'joinOurParty.resume']);

angular.module('joinOurParty').config(config);

angular.module('joinOurParty').controller('NavCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };
});

function config($routeProvider){
	console.log("configuring routeProvider ...");

	$routeProvider.
		when('/',{
			templateUrl: 'app/modules/home/home.html',
			controller: 'HomeController'
		}).
		when('/about',{
			templateUrl: 'app/modules/about/about.html',
			controller: 'AboutController'
		}).
		when('/resume',{
			templateUrl: 'app/modules/resume/resume.html',
			controller: 'ResumeController'
		})
};
