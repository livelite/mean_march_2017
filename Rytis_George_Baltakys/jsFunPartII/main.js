
// simple functions
function addFromXToY(x, y) {
	var sum = 0
	for (var i = x; i <= y; i++)
		sum += i
	return sum
}

console.log( addFromXToY(10, 50) )

function min(arr) {
	var min = arr[0]
	for (i in arr)
		if (arr[i] < min)
			min = arr[i]
	return min
}

console.log(min([5,1,4,3,-5,10,-3,7]))

function average(arr) {
	var sum = 0
	for (i in arr)
		sum += arr[i]
	return Math.round(sum / arr.length)
}

console.log(average([5,1,4,3,-5,10,-3,7]))


// anonymous functions assigned to variables
var addFromXToY = function(x, y) {
	var sum = 0
	for (var i = x; i <= y; i++)
		sum += i
	return sum
}

console.log( addFromXToY(10, 50) )

var min = function(arr) {
	var min = arr[0]
	for (i in arr)
		if (arr[i] < min)
			min = arr[i]
	return min
}

console.log(min([5,1,4,3,-5,10,-3,7]))

var average = function(arr) {
	var sum = 0
	for (i in arr)
		sum += arr[i]
	return Math.round(sum / arr.length)
}

console.log(average([5,1,4,3,-5,10,-3,7]))


// static methods of a class
class MyClass {
	static addFromXToY(x, y) {
		var sum = 0
		for (var i = x; i <= y; i++)
			sum += i
		return sum
	}

	static min(arr) {
		var min = arr[0]
		for (i in arr)
			if (arr[i] < min)
				min = arr[i]
		return min
	}

	static average(arr) {
		var sum = 0
		for (i in arr)
			sum += arr[i]
		return Math.round(sum / arr.length)
	}
}

console.log( MyClass.addFromXToY(10, 50) )
console.log( MyClass.min([5,1,4,3,-5,10,-3,7]) )
console.log( MyClass.average([5,1,4,3,-5,10,-3,7]) )


// methods of an object
class MyClass2 {
	constructor() {
		// nothing to do yet
	}

	addFromXToY(x, y) {
		var sum = 0
		for (var i = x; i <= y; i++)
			sum += i
		return sum
	}

	min(arr) {
		var min = arr[0]
		for (i in arr)
			if (arr[i] < min)
				min = arr[i]
		return min
	}

	average(arr) {
		var sum = 0
		for (i in arr)
			sum += arr[i]
		return Math.round(sum / arr.length)
	}
}

myclass = new MyClass2()
console.log( myclass.addFromXToY(10, 50) )
console.log( myclass.min([5,1,4,3,-5,10,-3,7]) )
console.log( myclass.average([5,1,4,3,-5,10,-3,7]) )


// Create a JavaScript object called person
class Person {
	constructor(name) {
		this.name = name
		this.distanceTraveled = 0
	}

	sayName() {
		console.log(`My name is ${this.name}`)
	}

	saySomething(something) {
		console.log(`${this.name} says ${something}`)
	}

	walk() {
		this.distanceTraveled += 3
		console.log(`${this.name} is walking`)
	}

	run() {
		this.distanceTraveled += 10
		console.log(`${this.name} is running`)
	}

	crawl() {
		this.distanceTraveled += 1
		console.log(`${this.name} is crawling`)
	}

	showDistanceTraveled() {
		console.log(`${this.name} traveled ${this.distanceTraveled} miles`)
	}
}

rytis = new Person('Rytis George')
rytis.sayName()
rytis.saySomething("I'm cool")
rytis.walk()
rytis.run()
rytis.crawl()
rytis.showDistanceTraveled()
