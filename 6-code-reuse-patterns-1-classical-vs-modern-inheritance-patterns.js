// CODE REUSE PATTERNS

// Classical inheritance

// the parent constructor
var Parent = function (name) {
		this.name = name || 'Adam';
	},
	Child,
	child;

Parent.prototype.say = function () {
	return this.name;
};

// DEFAULT inherit METHOD
function inherit(C, P) {
	C.prototype = new P();
}

// Empty Child constructor
function Child(name) {}

// Use of the inherit method
inherit(Child, Parent);

child = new Child('I am a child.');

console.log(child.say());

