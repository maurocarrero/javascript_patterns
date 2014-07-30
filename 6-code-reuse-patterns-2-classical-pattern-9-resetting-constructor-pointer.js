// CODE REUSE PATTERNS

// RESETTING THE CONSTRUCTOR POINTER

var Parent = function (name) {
		this.name = name || 'Lucho';
	},
	Child = function () {},
	child;

Parent.prototype.say = function () {
	console.log('I am saying ' + this.name);
}

function prevInherit(C, P) {
	var F = function () {};
	F.prototype = P.prototype;
	C.prototype = new F();
	C.uber = P.prototype;
}

prevInherit(Child, Parent); // Execute the pattern

// TESTING
child = new Child();

console.info('child was constructed by: ', child.constructor);

Child.prototype.constructor = Child;

console.info('child was constructed by: ', child.constructor);

// HOLY GRAIL of the classical pattern

function inherit(C, P) {
	var F = function () {};
	F.prototype = P.prototype;
	C.prototype = new F();
	C.uber = P.prototype;
	C.prototype.constructor = C;
}

// Optimization

var inherit = (function (C, P) {
	var F = function () {};
	return function () {
		F.prototype = P.prototype;
		C.prototype = new F();
		C.uber = P.prototype;
		C.prototype.constructor = C;
	}
})();

