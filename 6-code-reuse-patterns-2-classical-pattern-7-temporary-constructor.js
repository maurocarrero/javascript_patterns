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
	var F = function () {};		// A proxy between child and parent
	F.prototype = P.prototype;	// Instead of setting directly the protoype of the parent as 
	C.prototype = new F();		// the prototype of the Child
}								// it sets the prototype of the new function with the Parent prototype
								// and the prototype of the child is an instance of the blank -proxy- function

// The Child only inherits properties of the prototype

inherit(Child, Parent);

var kid = new Child();

console.log('kid.name: ', kid.name); // undefined
