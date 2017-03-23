var mongoose = require('mongoose')

var OrderSchema = mongoose.Schema({
	products: [{
		product: {type: mongoose.Schema.Types.ObjectId, ref:'Product'},
		quantity: {
			type: Number,
			required: true
		}
	}],
	_user: { type: mongoose.Schema.Types.ObjectId, ref:'User' }
}, {timestamps: true})

var Order = mongoose.model('Order', OrderSchema)
