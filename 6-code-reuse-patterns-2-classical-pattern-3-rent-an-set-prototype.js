// CODE REUSE PATTERNS

// CLASSICAL PATTERN #3 - RENT AND SET PROTOTYPE

function Parent(name) {
	this.name = name || 'Adam';
}

Parent.prototype.say = function () {
	console.log(this.name + '!');
};

function Child(name) {
	Parent.apply(this, arguments);
}
Child.prototype = new Parent();

var kid = new Child('Peteco');

console.log(kid.name);
kid.say();

delete kid.name;

kid.say();