// ARRAY LITERAL

var arr = ['Nacho', 'Mauro', 'Vichy', 'Lucas'],
	arr2 = new Array('Nacho', 'Mauro', 'Vichy', 'Lucas'),
	arr3,
	arr4;

console.info(arr);
console.info(arr2);

console.log('typeof arr is object because an array is an object?', typeof arr);
console.log('Constructor of arr is Array?', arr.constructor === Array);

// SETTING THE LENGTH OF THE ARRAY
arr3 = new Array(7);
console.info('An array initialized with a length of 7', arr3);
console.log(arr3[5]);

// INVALID ARRAY LENGTH: arr4 = new Array(2.3);

// A USEFUL USE
arr4 = new Array(40).join('* ');
console.log(arr4);

// typeof returns object
// so we have isArray

console.log('Array.isArray(arr3) ???', Array.isArray(arr3));

// If Array.isArray doesn't exist in the current context

if (typeof Array.isArray !== 'function') {
	Array.isArray = function (arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	}
}

console.info(Object.prototype.toString.call(arr3));

