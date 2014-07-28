// SELF INVOKING CONSTRUCTOR

var PersonMaker = function (name) {
		if (!(this instanceof PersonMaker)) {
			return new PersonMaker(name);
		}
		this.name = name;
	},
	PersonMaker2,
	lucas,
	mauro;

PersonMaker.prototype.say = function () {
	console.log(this.name);
}

console.log('\nSELF INVOKING CONSTRUCTOR');

lucas = PersonMaker('Lucas');

// THIS WAY WE AVOID THE PROBLEM OF A NON-EXISTENT new COMMAND AND KEEP THE LINK TO THE PROTOTYPE OF THE CONSTRUCTOR
lucas.say();


// ARGUMENTS CALLEE
console.log('\nComparing with arguments.callee');
PersonMaker2 = function (name) {
	if (!(this instanceof arguments.callee)) {
		return new arguments.callee(name);
	}
	this.name = name;
};
PersonMaker2.prototype.say = function () {
	console.log(this.name);
};

mauro = PersonMaker2('Mauro');
mauro.say();
