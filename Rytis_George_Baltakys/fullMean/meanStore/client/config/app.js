var app = angular.module('app', ['ngRoute','ngMoment'])

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/dashboard.html',
		controller: 'ProductsController as PC'
	})
	.when('/products', {
		templateUrl: 'partials/products.html',
		controller: 'ProductsController as PC'
	})
	.when('/customers', {
		templateUrl: 'partials/users.html',
		controller: 'UsersController as UC'
	})
	.when('/orders', {
		templateUrl: 'partials/orders.html',
		controller: 'OrdersController as OC'
	})
})
