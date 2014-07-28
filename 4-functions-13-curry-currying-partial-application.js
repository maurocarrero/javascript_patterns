// FUNCTIONS - CURRY - PARTIAL APPLICATION

var out = function (txt) { console.log(txt); },

	// Accepts a partial list of arguments
	curriedAdd = function (a, b) {
		var oldA = a, 
			oldB = b;
		if (typeof oldB === 'undefined') {
			return function (newB) {
				return oldA + newB;
			};
		}
		return a + b;
	},

	simplerCurriedAdd = function (a, b) {
		if (typeof b === 'undefined') {
			return function (b) {
				return a + b;
			};
		}
		return a + b;
	},
	add77 = curriedAdd(77),
	add187 = simplerCurriedAdd(187),
	add5;

out.call(null, curriedAdd(2, 5));

// Partial application
out.call(null, curriedAdd(3)(2));

// Applying the curry function add77
out.call(null, add77(3));

// Applying the simpler curry function simplerCurriedAdd
out.call(null, add187(7));


// The complexity o the new function comes from the fact that arguments is not a real array
// so we borrow slice method from Array to be applied to arguments
function schonfinkelize(fn) {
	var slice = Array.prototype.slice,
		storedArgs = slice.call(arguments, 1);

	return function () {
		var newArgs = slice.call(arguments),
			args = storedArgs.concat(newArgs);

		return fn.apply(null, args);
	};
}

function addManyNumbers() {
	var slice = Array.prototype.slice,
		args = slice.call(arguments);

	return args.reduce(function (a, b) {
		return a + b;
	});
}

addManyNumbersTo5 = schonfinkelize(addManyNumbers, 2, 1, 1, 1);

out.call(null, addManyNumbers(1, 2));
out.call(null, addManyNumbers(1, 2, 3));

out.call(null, addManyNumbersTo5(7, 3, 2, 8));
out.call(null, addManyNumbersTo5());

// CALL DIRECTLY THE CURRIED FUNCTION
out.call(null, schonfinkelize(addManyNumbers, 7, 3)(7, 3));











