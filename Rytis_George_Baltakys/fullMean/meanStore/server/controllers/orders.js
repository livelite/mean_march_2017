var mongoose = require('mongoose')
var Order = mongoose.model('Order')
var Product = mongoose.model('Product')

module.exports = {
	index: function (req, res) {
		Order.find({}).populate('products.product').populate('_user').exec(function(err, orders){
			if(err){
				return res.json(err)
			}
			return res.json(orders)
		})
	},
	create: function(req, res){
		console.log(req.body)
		var order = new Order({products: [{product:req.body.product, quantity: req.body.quantity}], _user: req.body.user})
		order.save(function(err, doc){
			console.log("db: " + doc)
			if(err){
				return res.json(err)
			}
			Product.findById(req.body.product, function(err, product){
				if(err){
					console.log(err)
				}
				if(product) {
					product.quantity -= req.body.quantity
					product.save(function(err){
						console.log(err)
					})
				}
			})
			return res.json(order)
		})
	},
	delete: function(req, res){
		Order.findByIdAndRemove(req.params.id).exec(function(err, doc){
			if(err){
				return res.json(err)
			}
			return res.json(doc)
		})
	}
}