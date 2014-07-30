// CODE REUSE PATTERNS

// CLASSICAL PATTERN #3 - RENT AND SET PROTOTYPE

function Parent(name) {
	this.name = name || 'Adam';
}

Parent.prototype.say = function () {
	console.log(this.name + '!');
};

// The drawback of the Classical Pattern #2 is that
// nothing from the prototype gets inherited

function Child(name) {
	Parent.apply(this, arguments);
}
Child.prototype = new Parent(); // This way we inherit the prototype of the parent

var kid = new Child('Peteco');

console.log(kid.name);
kid.say();

delete kid.name;

kid.say();