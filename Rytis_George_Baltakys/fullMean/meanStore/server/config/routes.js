var Users = require('../controllers/users')
var Products = require('../controllers/products')
var Orders = require('../controllers/orders')

module.exports = function(app){
	app.get('/users', Users.index)
	app.post('/users', Users.create)
	app.delete('/users/:id', Users.delete)
	app.get('/products', Products.index)
	app.post('/products', Products.create)
	app.delete('/products/:id', Products.delete)
	app.get('/orders', Orders.index)
	app.post('/orders', Orders.create)
	app.delete('/orders/:id', Orders.delete)
}
