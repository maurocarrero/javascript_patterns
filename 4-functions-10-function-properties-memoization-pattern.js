// FUNCTIONS PROPERTIES - A MEMOIZATION PATTERN

// out-of-the-box PROPERTIES
var f = function (a, b, c, d, e, f, g) {}, 
	memo, 
	serializedMemo,
	calleeMemo,
	aux;

console.log('var f = function (a, b, c, d, e, f, g) {}; --> Arguments:', f.length);

// MEMOIZATION
memo = function (param) {
	memo.cache = memo.cache || {};
	if (!memo.cache[param]) {
		var count = 0,
			result = {
				data: 'A really expensive operation',
				executions: count += 1
			};
		// ... really expensive operation ...
		memo.cache[param] = result;
	}
	return memo.cache[param];
};

// ALWAYS RETURNING THE SAME RESULT
console.info(memo());
console.info(memo());
console.info(memo());

serializedMemo = function () {
	var cacheKey = JSON.stringify(Array.prototype.slice.call(arguments)),
		result;

	console.info(Array.prototype.slice.apply(arguments));	
	console.info(typeof cacheKey);

	serializedMemo.cache = serializedMemo.cache || {};	
	
	if (!serializedMemo.cache[cacheKey]) {
		result = {
			data: arguments.length // A Really expensive operation ;)
		};
		serializedMemo.cache[cacheKey] = result;
	}
	return serializedMemo.cache[cacheKey];
};

console.info(serializedMemo('A', 'long', 'tail', 'of', 'arguments'));
console.info(serializedMemo('A', 'long', 'tail', 'of', 'arguments'));
console.info(serializedMemo('Not', 'so', 'long'));


calleeMemo = function (param) {
	var fn = arguments.callee, result;
	fn.cache = fn.cache || {};
	if (!fn.cache[param]) {
		fn.cache[param] = (function () {
			return param.length;
		}());
	}
	return fn.cache[param];
};

console.log(calleeMemo('Mauro'));

Function.prototype.memoize = function () {
	var self = this, 
		cache = {};
	return function (arg) {
		if (arg in cache) {
			console.log('Cache hit for ' + arg);
			return cache[arg];
		} else {
			console.log('Cache miss for ' + arg);
			return cache[arg] = self(arg);
		}
	};
};

aux = function () {
	console.log('aux');
}

memoize = aux.memoize();

console.log(aux());
console.log(memoize('opa'));
console.log(memoize('opa'));
console.log(memoize('opa'));




