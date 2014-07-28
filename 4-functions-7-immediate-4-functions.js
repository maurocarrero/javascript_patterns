// FUNCTIONS - IMMEDIATE FUNCTIONS

(function () {
	console.log('Already executing');
})();

// PREFERRED BY JSLINT
(function () {
	console.log('I am executing too..');
}());

// GET DATE
(function () {
	var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // Encapsulate all this vars in a SCOPE SANDBOX
		today = new Date(),
		msg = 'Today is ' + days[today.getDay()] + ', ' + today.getDate();
	console.log(msg);
}());

// PARAMETERS

(function (who, when) {
	console.log('I met ' + who + ' on ' + when);
}('Richard D. James', new Date()));

// GLOBAL SCOPE BY PARAMETER
// CODE MORE INTEROPERABLE IN ENVIRONMENTS OUTSIDE THE BROWSER

global.name = 'Global scope';
(function (w) {
	console.log(w.name);
}(global));

// RETURN VALUES

var result = (function (a, b) {
		return a + b;
	}(1, 2)),

	result2 = function (b, c) {
		return b * c;
	}(14, 27),

	// PRIVATE VALUE
	resultFn = (function (d, e) {
			var inaccesibleValue = 0;
			return function () {
				inaccesibleValue += 1;
				return (d + e) * inaccesibleValue;
			};
		}(1, 2)),

	// Calculate an object attribute on its construction
	result4 = {
		message: (function () {
				var who = 'me',
					what = 'call';
				return what + ' ' + who;
			}()),
		sayMsg: function () {
			console.log(this.message);
		}
	};

console.log(result);
console.log(result2);

console.log(resultFn());
console.log(resultFn());
console.log(resultFn());
console.log(resultFn());

result4.sayMsg();
console.log(result4.message);




