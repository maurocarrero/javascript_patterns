// CODE REUSE PATTERNS

// KLASS

function klass(Parent, props) {
	var Child, 
		F,
		i;

	// 1. New constructor
	Child = function () {
		if (Child.uber && Child.uber.hasOwnProperty('__construct')) {
			Child.uber.__construct.apply(this, arguments);
		}
		if (Child.prototype.hasOwnProperty('__construct')) {
			Child.prototype.__construct.apply(this, arguments);
		}
	};

	// 2. Inherit
	Parent = Parent || Object;
	F = function () {};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.uber = Parent.prototype;
	Child.prototype.constructor = Child;

	// 3. Add implementation methods
	for (i in props) {
		if (props.hasOwnProperty(i)) {
			Child.prototype[i] = props[i];
		}
	}

	// return the -class-
	return Child;

}

var Man = klass(null, {
		__construct: function (what) {
			console.log('Man\'s constructor');
			this.name = what || 'Hmm?';
		},
		getName: function () {
			return this.name;
		}
	}),

	Superman = klass(Man, {
		__construct: function () {
			console.log('Superman\'s constructor');
		},
		getName: function () {
			var name = Superman.uber.getName.call(this);
			return 'I am ' + name;
		}
	}),

	luchito;


luchito = new Superman('Lucho');

console.log('luchito instanceof Man?', (luchito instanceof Man));
console.log('luchito instanceof Superman?', (luchito instanceof Superman));

