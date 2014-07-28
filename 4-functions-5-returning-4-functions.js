// FUNCTIONS - RETURNING FUNCTIONS

var setup = function () {
	console.log(1);
	return function () {
		console.log(2);
	};
}

var my = setup();
my();


setup = function () {
	var count = 1; // count IS A PRIVATE VAR
	return function () {
		count += 1 * count;
		console.log(count);
	};
}

my = setup();
// WE CANNOT ACCESS COUNT FROM MY
my();
my();
my();


