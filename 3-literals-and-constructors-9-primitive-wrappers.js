// PRIMITIVE WRAPPERS

var a = 100,
	b = new Number(100),
	c = Number(100),
	name = 'Hello there',
	nameObj = new String('Hello there');

console.info(a, typeof a);
console.info(b, typeof b);
console.info(c, typeof c);

console.info(name);
console.log(name.split(' ')[0]);

name.prop = 'Some prop';
console.log(name.prop);

nameObj.prop = 'Some prop indeed';
console.log(nameObj.prop);

