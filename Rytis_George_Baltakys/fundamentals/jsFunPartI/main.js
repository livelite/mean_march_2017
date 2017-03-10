console.log("You're In!")

x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]

for (i in x) {
	console.log(x[i])
}

x.push(100)

x.push(["hello", "world", "JavaScript is Fun"])

for (i in x) {
	console.log(x[i])
}

var sum = 0
for (var i = 1; i < 501; i++) {
	sum += i
}
console.log('Sum 1-500:', sum)

x = [1, 5, 90, 25, -3, 0]
console.log(x)
min = x[0]
for (i in x) {
	if (x[i] < min)
		min = x[i]
}
console.log('Min:', min)

sum = 0
for (i in x) {
	sum += x[i]
}
console.log('Avg:', Math.round(sum /x.length))

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (key in newNinja) {
	console.log(key, newNinja[key])
}
