// CODE REUSE PATTERNS

// CLASSICAL PATTERN #4 - SHARE THE PROTOTYPE

function Parent(name) {
	this.name = name;
}

Parent.prototype.say = function () {
	console.log(this.name);
}

function Child() {
	Parent.apply(this, arguments);
}

function inherit(C, P) {
	C.prototype = P.prototype;
}

inherit(Child, Parent);

var kid = new Child('Peteco');

kid.say();