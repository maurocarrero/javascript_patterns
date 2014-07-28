// OBJECT CONSTRUCTOR CATCH

// IT DEPENDS ON THE PARAMETER GIVEN TO OBJECT WHAT CONSTRUCTOR IS USED
var o = new Object();
console.log('\nConstructor de new Object: Object()? ', o.constructor === Object, '\n');

o = new Object(1);
console.log('Constructor de new Object(1): Number? ', o.constructor === Number);
console.log(o.toFixed(2), '\n');

o = new Object('Ignacio');
console.log('Constructor de new Object("Ignacio"): String? ', o.constructor === String);
console.log(o.substring(0, 3), '\n');

o = new Object(false);
console.log('Constructor de new Object(false): Boolean? ', o.constructor === Boolean, '\n');





