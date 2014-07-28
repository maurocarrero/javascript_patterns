// CHAINING PATTERN

//	 Benefits:
//		a. More concise code.
//		b. Improves the maintainability
//
//	 Drawbacks:
//		a. Hard to debug.
//		b. 


var obj = {
	value: 1,
	increment: function () {
		this.value += 1;
		return this;
	},
	add: function (num) {
		this.value += num;
		return this;
	},
	shout: function () {
		console.log('Value so far: ', this.value);
		return this;
	}
};

// CALLING CHAINED METHODS

obj.shout()
	.increment()
	.add(5)
	.shout()
	.add(203)
	.increment()
	.increment()
	.shout();
