// CODE REUSE PATTERNS

// INHERITANCE BY COPYING PROPERTIES

// SHALLOW COPY
function extend(parent, child) {
	var i;
	child = child || {};
	for (i in parent) {
		console.log(i);
		if (parent.hasOwnProperty(i)) {
			child[i] = parent[i];
		}
	}
	return child;
}


// DEEP COPY
function extendDeep(parent, child) {
	var i,
		toStr = Object.prototype.toString,
		astr = '[object Array]';

	child = child || {};

	for (i in parent) {
		if (parent.hasOwnProperty(i)) {
			if (typeof parent[i] === 'object') {
				child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
				extendDeep(parent[i], child[i]);
			} else {
				child[i] = parent[i];
			}
		}
	}
	return child;
}


var homer = {
		name: 'Anakin'
	},
	kid = extend(homer);

console.log('homer?', homer);
console.log('kid?', kid);


// extend
function extendAgain(parent, child) {
	var key, child = child || {};
	for (key in parent) {
		if (parent.hasOwnProperty(key)){
			child[key] = parent[key];
		}
	}
	return child;
}

var homer = {
		name: 'Homer',
		arr: [1, 2, 3, 4, 5, 'Pepe', false, true],
		obj: {
			arrInside: ['Hello again.'],
			objInside: {
				title: 'A string inside an object inside an object'
			}
		}
	},
	bart = extendAgain(homer),
	lisa = extendDeepAgain(homer);

console.log('\n\nEXTEND METHODS');
console.warn('\nhomer', homer);
console.warn('\nbart', bart);
console.warn('\nlisa', lisa);

bart.name = 'Bart';
bart.arr[5] = 'Tatú';
bart.obj.objInside.title = 'The title was changed.';

console.log('\nAfter changes to Bart');

console.warn('\nHomer: ', homer);
console.warn('\nBart: ', bart);
console.warn('\nBart: ', lisa);


lisa.name = 'Lisa';
lisa.arr[5] = 'Mulita only Lisa';
lisa.obj.objInside.title = 'The title was changed only for Lisa.';

console.log('\nAfter changes to Lisa');

console.warn('\nHomer: ', homer);
console.warn('\nBart: ', bart);
console.warn('\nLisa: ', lisa);

extendDeepAgain();


function extendDeepAgain(parent, child) {
	var key, child = child || {},
		toStr = Object.prototype.toString,
		arrStr = '[object Array]';

	if (parent === undefined) {
		console.error('What do you want to extend?');
		return {};
	} else {
		for (key in parent) {
			if (parent.hasOwnProperty(key)) {
				if (typeof parent[key] === 'object') {
					child[key] = extendDeepAgain(parent[key], toStr.call(parent[key]) === arrStr ? [] : {});
				} else {
					child[key] = parent[key];
				}
			}
		}
	}
	return child;
}