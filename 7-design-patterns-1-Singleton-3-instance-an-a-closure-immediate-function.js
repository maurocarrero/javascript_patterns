// DESIGN PATTERNS

// Singleton

// Saves the instance in a closure and
// wraps it in a immediate function

var Universe;
(function () {
	var instance;

	Universe = function (name) {
		if (instance) {
			return instance;
		}

		this.name = name || 'The only universe';

		instance = this;
	};

})();

var u1 = new Universe(),
	u2 = new Universe();

Universe.prototype.say = function () {
	console.log(this.name);
}

console.log('Son el mismo? ', u1 === u2);

u1.say();
u2.say();

u1.name = 'Cambié mi nombre',

u2.say();


var Planet = (function () {
	
	var instance;

	return function (name) {		
		if (instance) {
			return instance;
		}

		instance = this;

		this.name = name || 'The only planet in the only universe';
	};
})();

var p1 = new Planet(),
	p2 = new Planet();

console.log('Son iguales? ', p1 === p2);

Planet.prototype.say = Universe.prototype.say;

p1.say();
