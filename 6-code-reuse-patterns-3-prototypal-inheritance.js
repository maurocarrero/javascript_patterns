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
console.log('child.hasOwnProperty(\'name\')?: ', child.hasOwnProperty('name'));


// A constructor function can create the parent
// Inherits both, 'own' properties and properties of the constructor's prototype

var Parent = function (name) {
	this.name = name || 'Thor';
};
Parent.prototype.getName = function () {
	return this.name;
};

var papa = new Parent();

child = object(papa);

console.log('\nchild.name: ', child.name);
console.log('child.getName?: ', typeof child.getName);
console.log('child.hasOwnProperty(\'name\')?: ', child.hasOwnProperty('name'));

// INHERIT JUST THE prototype

child = object(Parent.prototype);

console.log('\nchild.name: ', child.name);
console.log('child.getName?: ', typeof child.getName);
console.log('child.hasOwnProperty(\'name\')?: ', child.hasOwnProperty('name'));

// Object.create 
// Test this in ECMAScript5 (Node? maybe...)

child = Object.create(papa);

child = Object.create(papa, {
	lastname: {
		value: 'Garmendia' // ECMA5 descriptor
	}
});


