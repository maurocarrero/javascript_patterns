// CUSTOM CONSTRUCTORS FUNCTIONS

var Person = function (name) {
		this.name = name;
		this.say = function () {
			console.log(this.name);
		}
	},
	vichy = new Person('Virginia'),
	nacho,
	lucas,
	PersonMaker;

vichy.say();

// WHAT HAPPENS WHEN WE CALL A CONSTRUCTOR WITH NEW:

// 1. An empty object is created and referenced by this variable, inheriting the prototype of the function.
// 2. Properties and method are added to the object referenced by this.
// 3. The object is returned implicitly if no other object was returned explicitly.

// BEHAVIOR ON PROTOTYPE
// To avoid the recreation of the 'say' function on each of the Person objects
// we will add it to the prototype of Person.

Person = function (name) {
	this.name = name;
};

nacho = new Person('Ignacio');

Person.prototype.say = function () {
	console.log('I said ' + this.name);
};

nacho.say();

console.info(vichy);
console.info(nacho);


// A CONSTRUCTOR ALWAYS RETURNS A VALUE

PersonMaker = function (name) {
	var that = {};
	that.name = name;
	that.say = function () {
		console.log(this.name);
	}
	return that;
};

// THE LINK TO THE PROTOTYPE IS BROKEN WHEN RETURNING that

lucas = new PersonMaker('Lucas');
lucas.say();



