// ES6 way of doing it
class Vehicle {
	constructor(name, wheels, passengers, speed) {
		this.name = name
		this.wheels = wheels
		this.passengers = passengers
		this.speed = speed
		this.distanceTraveled  = 0
	}

	makeNoise() {
		console.log('Honk Honk')
	}

	show() {
		console.log(`The ${this.name} has ${this.wheels} wheels and carrries ${this.passengers} passengers. It is going at ${this.speed}mph and has traveled ${this.distanceTraveled} miles.`)
	}

	move() {
		this.distanceTraveled += this.speed
	}
}

function vehicleConstructor(name, wheels, passengers, speed) {
	return new Vehicle(name, wheels, passengers, speed)
}

// use new
var car = new Vehicle('blue car', 10, 5, 50)
car.show()
car.makeNoise()

// or use vehicleConstructor
var bike = vehicleConstructor('blue bike', 2, 2, 200)
bike.show()
bike.makeNoise = function() {
	console.log('ring ring!')
}
bike.makeNoise()

var sedan = vehicleConstructor('blue sedan', 4, 5, 69)
sedan.makeNoise = function() {
	console.log('Honk Honk!!')
}
sedan.show()
sedan.makeNoise()

var bus = vehicleConstructor('yellow bus', 10, 100, 1000)
bus.pickUp = function(passengers) {
	bus.passengers += passengers
}
bus.pickUp(10)
bus.move()
bus.move()
bus.show()

// ES5 way of doing it
function Vehicle2(name, wheels, passengers, speed) {
		this.name = name
		this.wheels = wheels
		this.passengers = passengers
		this.speed = speed
		var distanceTraveled = 0
		this.move = function() {
			distanceTraveled += speed
			console.log('Traveled', distanceTraveled)
		}
}

car2 = new Vehicle2('pink car', 4, 5, 100)
car2.move()
car2.move()