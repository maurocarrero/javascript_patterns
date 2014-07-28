// FUNCTIONS - CALLBACK AND SCOPE

var findNodes = function (callback, scope) {
		var node = 100000;
		while (node > 0) {
			node -= 1;
			if (node % 5000 === 0) {
				if (typeof callback === 'function') {
					callback.apply(scope, [ node ]);	
				}
				if (typeof callback === 'string') {
					scope[callback](node);
				}
			}
		}
	},
	myApp = {};

global.name = 'Global scope';

myApp.color = 'green';
myApp.paint = function (node) {
	console.log(this.name, '/ ' + node + ': ' + this.color);
};
myApp.add = function (node) {
	console.log(node + ': ' + this.color);
}

findNodes(myApp.paint);

// WE NEED TO PASS THE CALLBACK SCOPE WITH THE CALLBACK FUNCTION TO AVOID UNWANTED BEHAVIOR 

findNodes(myApp.add, myApp);

// PASS THE CALLBACK AS A STRING
findNodes('add', myApp);

var events = require('events'),
	eventCenter = new events.EventEmitter(),
	something = function () {
		console.log('Doing...');
	};

// USING CALLBACKS WITH AN EVENT LISTENER
eventCenter.on('init', something);

eventCenter.emit('init');


// USING CALLBACKS WITH TIMEOUTS
setTimeout(something, 1500);

