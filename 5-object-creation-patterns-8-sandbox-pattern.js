// SANDBOX PATTERN

// PROVIDES AN ENVIRONMENT FOR THE MODULES TO "PLAY"
// WITHOUT AFFECTING OTHER MODULES AND THEIR PERSONAL SANDBOXES

// PATTERNS INCLUDED:
//	a. enforcing new pattern
//	b. additional configuration argument

// CONSTRUCTOR

function Sandbox() {
	// Turning arguments into an array
	var args = Array.prototype.slice.call(arguments),
		// The last element is the callback
		callback = args.pop(),
		// Modules can be passed as an array or as individual parameters
		modules = (args[0] && typeof args[0] === 'string') ? args : args[0],
		i;

	// enforcing new
	if (!(this instanceof Sandbox)) {
		return new Sandbox(modules, callback);
	}

	// Add properties to -this- as needed
	this.a = 1;
	this.b = 2;

	// now add modules to the core 'this' object
	if (!modules || modules === '*' || modules[0] === '*') {
		modules = [];
		for (i in Sandbox.modules) {
			if (Sandbox.hasOwnProperty(i)) {
				modules.push(i);
			}
		}
	}

	// Initialize the required modules
	for (i = 0; i < modules.length; i += 1) {
		Sandbox.modules[modules[i]](this);
	}

	// call the callback
	callback(this);
}

Sandbox.prototype = {
	name: 'My app',
	version: '0.0.1',
	getName: function () {
		return this.name + ' - v' + this.version;
	}
};

// Different ways to use the sandbox
// WITHOUT MODULES

Sandbox(function (box) {
	console.log('Sandbox without parameters', box);
	console.log(box.getName());
});


Sandbox('*', function (box) {
	console.log('Sandbox with * wildcard: ', box);
	console.log(box.getName());
});