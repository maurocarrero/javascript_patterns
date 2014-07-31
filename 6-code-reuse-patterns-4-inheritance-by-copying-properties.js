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
				child[i] = (toStr.call(parent[i]) === astr) [] : {};
				extendDeep(parent[i], child[i]);
			} else {
				child[i] = parent[i];
			}
		}
	}
	return child;
}


var dad = {
		name: 'Anakin'
	},
	kid = extend(dad);

console.log('dad?', dad);
console.log('kid?', kid);


