// MODULE PATTERN

// a. PROVIDES STRUCTURE AND HELPS TO ORGANIZE THE CODE: 
// b. COMBINATION OF SEVERAL PATTERNS:
//		1. Namespaces
//		2. Immediate functions
//		3. Private and privileged members
//		4. Declaring dependencies 

var MCM = MCM || {},
	str;

MCM.namespace = function (ns_string) {
	var parts = ns_string.split('.'),
		parent = MCM;

	if (parts[0] === 'MCM') {
		parts = parts.slice(1);
	}

	parts.map(function (part) {
		if (!parent[part]) {
			parent[part] = {};
		}
		parent = parent[part];
	});

	return parent;
};

// STRING UTILS

// RETURNING A MODULE CONSTRUCTOR

MCM.namespace('MCM.utils.string');

MCM.utils.string = (function () {
	var toStr = function (str) {
			return 'This is my string: ' + str;
		},
		Constr;

	Constr = function () {
		if (!(this instanceof arguments.callee)) {
			return new arguments.callee();
		}
		this.toStr = toStr;
	}

	Constr.prototype = (function () {
		var ver = '0.0.1',

			// Private getVersion on the prototype
			getVersion = function () {
				return ver;
			};

		// Revealing
		return {
			getVersion: getVersion
		};
	})();

	return Constr;

})();

// NEW INSTANCE
str = new MCM.utils.string();

console.log('MCM.utils.string.toStr(Mauro)', str.toStr('Mauro'));
console.log('MCM.utils.string.getVersion(): ', str.getVersion());


