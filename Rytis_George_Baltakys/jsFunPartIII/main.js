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

function personConstructor(name) {
	return new Person(name)
}

var rytis = personConstructor('Rytis George')
rytis.sayName()
rytis.saySomething("I'm cool")
rytis.walk()
rytis.run()
rytis.crawl()
rytis.showDistanceTraveled()

class Ninja {
	constructor(name, cohort) {
		this.name = name
		this.cohort = cohort
		this.beltLevel = 0
		this.belts = ['yellow','red','blue','black']
	}

	levelUp() {
		if (this.beltLevel < this.belts.length - 1) {
			this.beltLevel++
		}
	}

	show() {
		console.log(`Ninja ${this.name} from ${this.cohort} has a ${this.belts[this.beltLevel]} belt`)
	}
}

function ninjaConstructor(name, cohort) {
	return new Ninja(name, cohort)
}

var ninja1 = ninjaConstructor('Dave', "Choi's Boys++")
ninja1.show()
ninja1.levelUp()
ninja1.show()
ninja1.levelUp()
ninja1.show()
ninja1.levelUp()
ninja1.show()
ninja1.levelUp()
ninja1.show()


function LegoConstructor(name, size, color) {
	return {
		name: name,
		size: size,
		color: color,
		show: function() {
			console.log(`${this.name} brick is ${this.color} and is ${this.size} big`)
		}
	}
}

var brick = LegoConstructor('Awesome', 8, 'blue')
brick.show()