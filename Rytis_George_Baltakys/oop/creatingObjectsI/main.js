class Vehicle {
	constructor(name, wheels, passengers) {
		this.name = name
		this.wheels = wheels
		this.passengers = passengers
	}

	makeNoise() {
		console.log('Honk Honk')
	}

	show() {
		console.log(`The ${this.name} has ${this.wheels} wheels and carrries ${this.passengers} passengers`)
	}
}

function vehicleConstructor(name, wheels, passengers) {
	return new Vehicle(name, wheels, passengers)
}

// use new
var car = new Vehicle('blue car', 10, 5)
car.show()
car.makeNoise()

// or use vehicleConstructor
var bike = vehicleConstructor('blue bike', 2, 2)
bike.show()
bike.makeNoise = function() {
	console.log('ring ring!')
}
bike.makeNoise()

var sedan = vehicleConstructor('blue sedan', 4, 5)
sedan.makeNoise = function() {
	console.log('Honk Honk!!')
}
sedan.show()
sedan.makeNoise()

var bus = vehicleConstructor('yellow bus', 10, 100)
bus.pickUp = function(passengers) {
	bus.passengers += passengers
}
bus.pickUp(10)
bus.show()