// FUNCTIONS - CURRY - FUNCTION APPLICATION

var sayHi = function (who) {
		who = who || 'somebody unidentified';
		return 'Hi ' + who + '!';
	},

	out = function (txt) {
		console.log(txt);
	},

	alien = {
		sayHi: function (who) {
			who = who || 'somebody unidentified';
			return 'Hi ' + who + '!';
		}
	};

// Invoke a function
out(sayHi());
out(sayHi('Lucas'));

// Applying a function
out(sayHi.apply(null, [ 'Mauro' ]));

// Calling a function
out(sayHi.call(null, 'Mauro'));

// Applying a method from an object

out(alien.sayHi('Virginia'));
out(alien.sayHi.apply(alien, [ 'Ignacio' ]));

// Just a sintactical way of avoid creating an array for the arguments
out(alien.sayHi.call(alien, 'Lucas Calu'));



