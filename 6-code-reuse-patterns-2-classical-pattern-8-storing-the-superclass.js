// CODE REUSE PATTERNS

// STORING THE SUPERCLASS

var Parent = function (name) {
		this.name = name || 'Lucho';
	},
	Child = function () {},
	child;

Parent.prototype.say = function () {
	console.log('I am saying ' + this.name);
}

// Pattern #5 - Temporary constructor
function inherit(C, P) {
	var F = function () {};
	F.prototype = P.prototype;
	C.prototype = new F();
	C.uber = P.prototype; // KEEP A REFERENCE LINK TO THE PARENT'S PROTOTYPE DIRECTLY
}

inherit(Child, Parent); // Execute the pattern

// TESTING

child = new Child();

console.log('child.name: ', child.name);

child.name = 'Ahijuna';

child.say();


