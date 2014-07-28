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

MCM.namespace('MCM.utils.string');

MCM.utils.string = (function (glb, app) {
	return {
		getWeather: function () {
			console.info('app?', app);
			return 'OK';
		},
		timeout: function (callback, time) {
			return glb.setTimeout(callback, time);
		}
	};
})(global, MCM);

// NEW INSTANCE
str = MCM.utils.string;

// console.log(str.getWeather());
str.timeout(function () {
	console.log('Hi!');
}, 1500);

