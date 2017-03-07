function runningLogger() {
	console.log('I am running!')
}

runningLogger()

function multiplyByTen(num) {
	return num * 10
}

console.log( multiplyByTen(5) )

function stringReturnOne() {
	return 'Hey you!'
}

function stringReturnTwo() {
	return 'Hold on how!'
}

console.log(stringReturnOne(), stringReturnTwo())

function caller(func) {
	if (typeof(func) == 'function')
		func()
}

caller(runningLogger)

function myDoubleConsoleLog(funcy, func) {
	if (typeof(funcy) == 'function' && typeof(func) == 'function')
		console.log(funcy(), func())
}

myDoubleConsoleLog(stringReturnOne, stringReturnTwo)

function caller2(func) {
	console.log('starting')
	if (typeof(func) == 'function') {
		setTimeout(func, 2000)
	}
}

caller2(runningLogger)