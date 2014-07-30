// CODE REUSE PATTERNS

// CLASSICAL PATTERN #4 - SHARE THE PROTOTYPE

function Parent(name) {
	this.name = name || 'The Hulk';
}

Parent.prototype.say = function () {
	console.log(this.name);
}

function Child() {
	Parent.apply(this, arguments);
}

function inherit(C, P) {
	C.prototype = P.prototype;	// All objects share the same prototype
								// The problem is that a grandchild can change its prototype
								// changing the same proto as their -super- objects
}

inherit(Child, Parent);

var kid = new Child('Peteco');

kid.say();

delete kid.name;

kid.say(); // undefined: it doesn't inherits the properties added to a parent instance