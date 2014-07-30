// CODE REUSE PATTERNS

// CLASSICAL PATTERN #2 - RENT A CONSTRUCTOR
// THE PROTOTYPE CHAIN

function Parent(name) {
	this.name = name || 'Tricky';
}

Parent.prototype.say = function () {
	console.log('I am ' + this.name);
}

// Child keeps its own prototype object pointing to a blank object
function Child(name) {
	Parent.apply(this, arguments);
}

function OtherChild(name) {
	var join = Array.prototype.join;
	Parent.call(this, join.call(arguments, ', '));
}

var kid = new Child('Patrick'),
	kid2 = new OtherChild('Pepe');

console.log('kid.name: ', kid.name);
console.log('kid.say: ', kid.say);

console.log('\nkid2.name: ', kid2.name);
console.log('kid2.say: ', kid2.say);

Child.prototype.say = function () {
	console.log('I am a child: ' + this.name);
};

kid.say();