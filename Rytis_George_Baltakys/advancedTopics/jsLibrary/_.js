var _ = {
	map: function(list, iteratee) {
		var newArr = []
		for (l in list) {
			newArr.push(iteratee(list[l]))
		}
		return newArr
	},
	reduce: function(list, iteratee) { 
		
	},
	find: function() {   
	 
	},
	filter: function() { 
	 
	},
	reject: function() { 
	 
	}
}

console.log(_.map([1, 2, 3, 4, 5], function(num){ return num * 3 }))
