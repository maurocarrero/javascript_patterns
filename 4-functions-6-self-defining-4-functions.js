// FUNCTIONS - SELF_DEFINING FUNCTIONS
// OR LAZY FUNCTION DEFINITION

var scareMe = function () {
	console.log('Boo!');
	scareMe = function () {
		console.log('Double Boo!!!');
	};
};

// scareMe();
// scareMe();
// scareMe();

console.log('\n');

// PROPERTIES WILL BE LOST ON OVERWRITE

// 1. Add new property
scareMe.prop = 'Viernes';

// 2. assigning to a different name
var prank = scareMe;

// 3. using as a method
var spooky = {
	boo: scareMe
};

// WHEN USED AS PRANK OR SPOOKY THE CHANGE IS NOT SEEN 

prank();
console.log(prank.prop);

console.log('\n');

spooky.boo();
console.log(spooky.boo.prop);

console.log('\n');

// I SEE NOW

scareMe();
console.log(scareMe.prop);

console.log('\n');