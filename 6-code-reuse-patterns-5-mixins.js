// CODE REUSE PATTERNS

// MIX-INS OR MIXINS

// Copies all the properties of the objects passed as arguments,
// mixin them to one mixed object

function mix() {
	var obj = {},
		args = Array.prototype.slice.call(arguments);

	args.map(function (arg) {
		if (typeof arg === 'object') {
			deepCopy(arg, obj);
		}
	});

	return obj;
}

function deepCopy(parent, child) {
	var toStr = Object.prototype.toString,
		arrStr = '[object Array]',
		aux;

	child = child || {};

	try {
		for (key in parent) {
			if (parent.hasOwnProperty(key)) {
				if (typeof parent[key] === 'object') {
					aux = toStr.call(parent[key]);
					child[key] = deepCopy(parent[key], (aux === arrStr) ? [] : {});
				} else {
					child[key] = parent[key];	
				}				
			}
		}	
	} catch (e) {
		console.error(e.message);
	}

	return child;
}

var obj1 = {
		name: 'Object1',
		getName: function () {
			return this.name;
		}
	},
	obj2 = {
		nums: [1, 2, 3, 4]
	},
	n;

n = mix(obj1, obj2);

console.info('obj1: ', obj1);
console.info('obj2: ', obj2);
console.info('n: ', n);

n.nums[3] = 'This is not copied to the obj2';

console.info('obj2: ', obj2);
console.log('n: ', n);

