// CODE REUSE PATTERNS

// PROTOTYPAL INHERITANCE
// A modern classless pattern
// Objects inherits from other objects

function object(P) {
	var F = function () {};
	F.prototype = P;
	return new F();
}

// The object to inherit from
var parent = {
	name: 'Luchito'
};

// The new object
var child = object(parent);

console.log('child.name: ', child.name);


