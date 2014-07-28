// CODE REUSE PATTERNS

// Classical inheritance

// the parent constructor
var Parent = function (name) {
		this.name = name || 'Adam';
	},
	Child = function () {},
	child;

Parent.prototype.say = function () {
	return this.name;
};

// DEFAULT inherit METHOD: CLASSICAL PATTERN #1
function inherit(C, P) {
	C.prototype = new P();
}

// Use of the inherit method
inherit(Child, Parent);

child = new Child();

console.log(child.say());

child.name = 'Pepe';

console.log(child.say());

delete child.name;

console.log('Shining prototype chain value after deleting child.name: ', child.say());
console.log('\n');
console.info('child __proto__: ', child.__proto__);
console.info('child __proto__.__proto__: ', (child.__proto__).__proto__);
console.info('child __proto__.__proto__.__proto__: ', ((child.__proto__).__proto__).__proto__);
console.log('\n');
