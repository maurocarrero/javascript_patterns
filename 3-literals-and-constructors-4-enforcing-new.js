// ENFORCING NEW

var Person = function (name) {
		this.name = name;
		this.say = function () {
			console.info(name);
		};
	},
	PersonMaker = function (name) {
		var that = {
			name: name,
			say: function () {
				console.info(this, this.name);
			}
		};
		return that;
	},
	PersonMaker2 = function (name) {
		return {
			name: name,
			say: function () {
				console.info(this, this.name);
			}
		}
	},
	nacho,
	lucas,
	vichy,
	mauro;

console.log('\nENFORCING NEW\n');

nacho = new PersonMaker('Ignacio');
lucas = new PersonMaker('Lucas');

nacho.say();
lucas.say();

// WITHOUT THE new COMMAND CAN BE ISSUES BUT NOT WITH that IMPLEMENTATION (that, self, me)
// because this from within a function is the global object

vichy = Person('Virginia');
global.say();

// WITH THAT NO PROBLEM
mauro = PersonMaker('Mauro');
mauro.say();


