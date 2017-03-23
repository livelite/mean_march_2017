app.factory('OrderFactory', function($http){
	var factory = {}

	factory.index = function(callback){
		$http.get('/orders').then(callback)
	}

	factory.create = function(newOrder, callback){
		$http.post('/orders', newOrder).then(callback)
	}

	factory.delete = function(id, callback){
		$http.delete('/orders/' + id).then(callback)
	}

	return factory
})