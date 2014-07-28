
var myObj,
	myObj2 = (function (spec) {
		var name = spec.name || 'NO VALUE';
		return {
			getName: function () {
				return name;
			}
		};
	})({name: 'Cachirulo'});

(function (spec) {
	var priv = spec.name || 'NO VALUE';
	myObj = {
		getName: function () {
			return priv;
		}
	};
})({name: 'Peteco'});


console.log('getName():', myObj.getName());
console.log('private name:', myObj.name);

console.log('getName():', myObj2.getName());
console.log('private name:', myObj2.name);