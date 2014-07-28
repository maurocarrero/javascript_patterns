// OBJECT CONSTANTS

// 1. const statement (modern environments)
// 2. naming convention

// GENERAL PURPOSE OBJECT CONSTANTS

var log = console.log,
	constant = (function () {
	var constants = {},
		ownProp = Object.prototype.hasOwnProperty,
		allowed = {
			string: 1,
			number: 1,
			boolean: 1
		},
		prefix = (Math.random() + '_').slice(2);

	return {
		// SET THE VALUE TO A CONSTANT AND RETURN TRUE WETHER SUCCEDS
		set: function (name, value) {
			if (this.isDefined(name)) {
				return false;
			}
			if (!ownProp.call(allowed, typeof value)) {
				return false;
			}
			constants[prefix + name] = value;
			return true;
		},
		// RETURN TRUE IF THE CONSTANT name EXISTS AS AN OWNED PROPERTY
		isDefined: function (name) {
			return ownProp.call(constants, prefix + name);
		}, 
		get: function (name) {
			if (this.isDefined(name)) {
				return constants[prefix + name];
			}
			return null;
		}
	};

})();

// TESTING

// Check if exists
log(constant.isDefined('MAX_WIDTH'));

// Sets a new constant value
log(constant.set('MAX_WIDTH', 640));

// Checks again
log(constant.isDefined('MAX_WIDTH'));

// Try to re-set
log(constant.set('MAX_WIDTH', 480));

// Check the value
log(constant.get('MAX_WIDTH'));

