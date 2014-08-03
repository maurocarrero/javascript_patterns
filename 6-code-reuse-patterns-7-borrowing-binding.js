// CODE REUSE PATTERNS

// BORROWING METHODS


// Value of this locked or bound to a specific object,
// predetermined in advance.

var a = {
	name: 'world!'
};

var say = function (greet) {
	return greet + ', ' + this.name;
};

// this is the global object
// to prevent this behavior

function bind(o, m) {
	return function () {
		return m.apply(o, [].slice.call(arguments));
	};
}

a.say = bind(a, say);

console.log(a.say('Hello'));

var b = function () {
	return (function () { console.log(this.name); }).apply({ name: 'Mauro'});	
};

b();


// WHEN WE ARE IN A ENVIRONMENT PRE-ECMAScript5

// if (typeof Function.prototype.bind === 'undefined') {
	Function.prototype.bind = function (obj) {
		var that = this,
			slice = [].slice,
			args = slice.call(arguments, 1);
		
		return function () {
			return that.apply(obj, slice.call(arguments).concat(args));
		};

	};
// }

function sayEverything() {
	var args = [].slice.call(arguments);
	for (i in args) {
		if (args.hasOwnProperty(i)) {
			console.log(args[i]);
		}		
	}
}

a.sayAgain = sayEverything.bind(a);

a.sayAgain('Hi', 'pepe', 37);
