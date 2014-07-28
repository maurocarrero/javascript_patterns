// FUNCTIONS - BACKGROUND

// antipattern:
// AS BAD AS eval
var add = new Function('a, b', 'return a + b'),
	addNamed,
	addAnonymous;

console.log(add(1, 2));


// NAMED FUNCTION EXPRESSION
addNamed = function addNamed(a, b) {
	return a + b;
};

// ANONYMOUS - (UNNAMED) FUNCTION EXPRESSION
addAnonymous = function (a, b) {
	return a + b
};

// FUNCTION DECLARATIONS
function addDeclarated (a, b) {
	return a + b;
}

// DECLARATIONS VS EXPRESSIONS

function callMe(fn) {
	fn();
}

// WE CANNOT USE LIKE THIS A FUNCTION DECLARATION, EITHER ASSIGN IT TO A VARIABLE
callMe(function () {
	console.log('Acá tá!');
});

// NAME PROPERTY: ONLY ON NAMED FUNCTION EXPRESSION AND FUNCTION DECLARATION
// FOR ANONYMOUS FUNCTIONS DEPENDS ON THE IMPLEMENTATION

console.log('add', add.name);
console.log('addNamed', addNamed.name);
console.log('addAnonymous', addAnonymous.name);

var fn1 = function () {}; // ANONYMOUS FUNCTION
var fn2 = function fn2() {}; // NAMED FUNCTION EXPRESSION
function fn3() {}; // FUNCTION DECLARATION

console.log('fn1', fn1.name);
console.log('fn2', fn2.name);
console.log('fn3', fn3.name);



