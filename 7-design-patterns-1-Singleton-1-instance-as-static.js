// DESIGN PATTERNS

// Singleton

// Saves the instance into the contructor
var Universe = function (name) {
		if (Universe.instance === undefined) {
			this.name = name || 'The instance of Universe';
			Universe.instance = this;
		}
		return Universe.instance;
	}, 
	uni1, 
	uni2;

Universe.prototype.say = function () {
	console.log(this.name);
};

uni1 = new Universe();
uni2 = new Universe();

console.log('uni1: ', uni1);
console.log('uni2: ', uni2);
console.log(uni1 === uni2);

uni1.name = 'A new name for the instance';

uni1.say();
uni2.say();

// A drawback is that the instance can be ovewritten