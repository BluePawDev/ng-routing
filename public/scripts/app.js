var app = angular.module('routeApp', ['ngRoute']); // array will hold modules we're using (dependency injection)


// services provided by AngularJS
// injecting $routeProvider
app.config(function($routeProvider) { // where we define client-side routes
	$routeProvider.when('/', { // "when I nav to this URL...provide"
		template: '<div id="red"><h2>First Route</h2></div>',
		controller: 'DefaultController as dc'
	}).when('/blue', {
		template: '<div id="blue"><h2>Second Route</h2></div>',
	}).when('/yellow', {
		templateUrl: 'views/partials/yellow.html',
		controller: 'YellowController as yc'
	})
});

app.controller('DefaultController', DefaultController);

app.controller('YellowController', YellowController);

function DefaultController() {
	console.log('DefaultController is loaded');
}

function YellowController() {
	console.log('YellowController is loaded');
}
