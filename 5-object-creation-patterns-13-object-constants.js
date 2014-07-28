// OBJECT CONSTANTS

// 1. const statement (modern environments)
// 2. naming convention

// Built-in CONSTANTS
console.info('Math.PI: ', Math.PI);
console.info('Math.SQRT2: ', Math.SQRT2);
console.info('Number.MAX_VALUE: ', Number.MAX_VALUE);

var Widget = function () {},
	Gadget,
	w1, w2, w3,
	g1, g2, g3;
// Constant
Widget.VERSION = '0.0.1';

Widget.getVersion = function () {
	return Widget.VERSION;
};
Widget.prototype.getVersion = Widget.getVersion;

w1 = new Widget();
w2 = new Widget();
w3 = new Widget();

console.log(Widget.getVersion());
console.log(w1.getVersion());
console.log(w2.getVersion());

Widget.VERSION = 'Another version';

console.log(w3.getVersion());


/*************************************/


Gadget = (function () {
	var ver = '0.0.1',
		Constr = function () {};

	Constr.prototype.getVersion = function () {
		return ver;
	};

	return Constr;
})();

g1 = new Gadget();
g2 = new Gadget();
g3 = new Gadget();

console.log(g1.getVersion());
console.log(g2.getVersion());
console.log(g3.getVersion());
