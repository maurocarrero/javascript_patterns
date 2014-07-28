// FUNCTIONS - IMMEDIATE OBJECTS INITIALIZATION

var o = ({
	// DEFINE SETTING VALUES
	// a.k.a. CONFIGURATION CONSTANTS
	maxWidth: 800,
	maxHeight: 600,

	// UTILITY METHODS
	gimmeMax: function () {
		return this.maxWidth + 'x' + this.maxHeight;
	},

	// INITIALIZE
	init: function () {
		console.log(this.gimmeMax());
		return this;
	}

}).init();

console.info(o);

o.gimmeMax();
console.log(o.maxHeight);
