// CODE REUSE PATTERNS

// CLASSICAL PATTERN #5 - A TEMPORARY CONSTRUCTOR

function Parent(name) {
	this.name = name || 'Adam';
}

Parent.prototype.say = function () {
	console.log(this.name);
}

function Child() {}

// Solves the same-prototype problem:
// Breaks the link between Parent's and Child's prototypes
function inherit(C, P) {
	var F = function () {}; // A proxy between child and parent
	F.prototype = P.prototype;
	C.prototype = new F(); // Prototype of the child is an instance of the blank function
}

inherit(Child, Parent);

var kid = new Child('Peteco');

console.log('kid.name: ', kid.name);
kid.say();