// FUNCTIONS - CALLBACK PATTERN

function writeCode(callback) {
	callback();
}

function introduceBugs() {
	console.log('making bugs...');
}

writeCode(introduceBugs);


// A CALLBACK EXAMPLE

// THE WRONG WAY:
var findNodes = function () {
		var i = 10000000,
		nodes = [],
		found;
		while (i > 0) {
			i -= 1;
			if (i % 23771 === 0) {
				nodes.push(i);
			}
		}
		return nodes;
	},
	hide = function (nodes) {
		var str = '',
		newNodes = nodes.map(function (el) {
			str += el + ' - ';
		});
		console.log(str);
	},
	n = findNodes(),
	str = '';

hide(n);

console.log('\n');

// THE GOOD ONE
findNodes = function (callback) {
	var i = 10000000,
	nodes = [],
	found;
	// VERIFY WETHER THE callback FUNCTION IS A FUNCTION
	if (typeof callback !== 'function') {
		console.log('callback IS NOT A FUNCTION');
		callback = false;
	}
	while (i > 0) {
		i -= 1;
		if (i % 77777 === 0) {
			nodes.push(i);
			if (callback) {
				callback(i);	
			}
		}
	}
	return nodes;
};
hide = function (node) {
	str += node + ' - ';
};

findNodes(hide);
console.log(str);

findNodes(7);

// str = '';

findNodes(function (n) {
	if (n % 77 === 0) {
		str += Math.sqrt(n) + ' - ';	
	}	
});

console.log(str);



