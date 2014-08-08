// DESIGN PATTERNS

// Singleton

// Saves the instance in a closure

var Planet = function (name) {
	var instance = this;

	// proceed as normal
	this.name = name || 'A planet';

	// rewrite the contructor
	Planet = function () {
		return instance;
	};

};

var planet1 = new Planet();
var planet2 = new Planet();

Planet.prototype.exists = true;

console.log('planet1: ', planet1);
console.log('planet2: ', planet2);
console.log(planet1 === planet2);

// Drawback as the SELF-DEFINING FUNCTION PATTERN
// The link to the prototype is lost so...

console.log('planet2.exists: ', planet2.exists);

var Universe = function (name) {
	var instance = this;

	Universe = function () {
		return instance;
	};

	// CARRY OVER THE PROTOTYPE PROPERTIES
	Universe.prototype = this;

	// THE INSTANCE
	instance = new Universe();

	// RESET THE CONSTRUCTOR POINTER
	instance.constructor = Universe;

	// functionality
	instance.name = name || 'The one and only universe';

	return instance;
};

var uni1 = new Universe(),
	uni2 = new Universe();

Universe.prototype.exists = true;

console.log('Es la misma instancia? ', uni1 === uni2);
console.log(uni1.exists);



