// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : '../pages/home.html',
				controller  : 'homeController'
			})
			.when('/home', {
				templateUrl : '../pages/home.html',
				controller  : 'homeController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : '../pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : '../pages/contact.html',
				controller  : 'contactController'
			});
			// .otherwise({
				// redirectTo: '/home'
			// });
	});