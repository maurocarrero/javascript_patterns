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

// ARRAY UTILS
MCM.namespace('MCM.utils.array');

MCM.utils.array = (function () {
	var arr_str = '[object Array]',
		ops = Object.prototype.toString;

	return {
		isArray: function (arr) {			
			return ops.call(arr) === arr_str;
		},

		indexOf: function (arr, value) {
			var ret = null;
			arr.map(function (el, idx) {
				if (el === value) {
					ret = idx;
				}
			});
			return ret;
		},

		inArray: function (arr, value) {
			return this.indexOf(arr, value) > 0;
		}
	};
})();

console.log('MCM.utils.array.inArray([1, 2, 3], 3): ', MCM.utils.array.inArray([1, 2, 3], 3));