// CODE REUSE PATTERNS

// BORROWING METHODS

function borrowMe() {
	console.log(arguments);
	// borrowing methods from Array.prototype
	console.log([].slice.call(arguments));	
	// other way
	console.log(Array.prototype.slice.call(arguments));
}


borrowMe(123, '1231fefds', [], {}, false);

// Value of this locked or bound to a specific object,
// predetermined in advance.

var one = {
	name: 'world',
	say: function (greet) {
		return greet + ', ' + this.name;
	}
};

console.log(one.say('Hello'));

var two = {
	name: 'second world'
};

console.log(one.say.call(two, 'Hi'));
console.log(one.say.apply(two, ['Hi all']));

var say = one.say;

console.log(say('Hehehehe'));

// Passing as a callback

var yetAnother = {
	name: 'Now I have a name',
	method: function(callback) {
		return callback('Hola');
	}
};

console.log(yetAnother);
console.log(yetAnother.method(say));

