// DESIGN PATTERNS

// FACTORY

// Empty Factory function
function CarMaker() {};

// A method of the parent
CarMaker.prototype.drive = function () {
	console.log('I am driving a ' + this.name);
};

// Complete its factory method
CarMaker.factory = function (type) {
	var constr = type,
		newCar = {};

	// Error if the constructor doesn't exists
	if (typeof CarMaker[constr] !== 'function') {
		throw {
			name: 'Error',
			message: constr + ' doesn\'t exists'
		};
	}

	if (typeof CarMaker[constr].prototype.drive !== 'function') {
		CarMaker[constr].prototype = new CarMaker();
	}

	// Create a new instance
	newCar = new CarMaker[constr]();
	return newCar;
};

CarMaker.Compact = function () {
	this.name = 'Compact';
};
CarMaker.Convertible = function () {
	this.name = 'Convertible';
}
CarMaker.SUV = function () {
	this.name = 'SUV';
};

var corolla = CarMaker.factory('Compact'),
	solstice = CarMaker.factory('Convertible'),
	cherokee = CarMaker.factory('SUV');

corolla.drive();
solstice.drive();
cherokee.drive();

/********************************************************/

// TESTING

var ChildMaker = function () {};
ChildMaker.prototype.say = function () {
	console.log('I am ' + this.name);
};

ChildMaker.Lucas = function () {
	this.name = 'Lucas';
};
ChildMaker.Ignacio = function () {
	this.name = 'Ignacio';
};
ChildMaker.Virginia = function () {
	this.name = 'Virginia';
};
ChildMaker.factory = function (name) {
	if (typeof ChildMaker[name] !== 'function') {
		throw {
			name: 'No constructor',
			message: 'No constructor for this name.'
		};
	}
	if (!(ChildMaker[name].prototype instanceof ChildMaker)) {
		console.log('prototype builded for ' + name);
		ChildMaker[name].prototype = new ChildMaker();		
	}
	return new ChildMaker[name];
};

try {
	var lucas = ChildMaker.factory('Lucas'),
		luqui = ChildMaker.factory('Lucas'),
		nacho = ChildMaker.factory('Ignacio'),
		nachi = ChildMaker.factory('Ignacio'),
		ignacio = ChildMaker.factory('Ignacio'),
		vichy = ChildMaker.factory('Virginia'),
		vicky = ChildMaker.factory('Virginia'),
		feli, feli2;

	lucas.say();
	luqui.say();
	nacho.say();
	nachi.say();
	ignacio.say();
	vichy.say();
	vicky.say();

	feli = ChildMaker.factory('Felipe');
	feli2 = ChildMaker.factory('Felipe');

} catch(e) {
	console.warn(e.name, '\n' + e.message);
}
