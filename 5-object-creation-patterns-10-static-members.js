// STATIC MEMBERS

// PUBLIC STATIC MEMBERS

// Constructor
var Gadget = function (price) {
	this.price = price;
};

// A static method
Gadget.isShiny = function () {
	console.log('you bet');
};

// A normal meethod added to the prototype
Gadget.prototype.setPrice = function (price) {
	this.price = price;
};
Gadget.prototype.getPrice = function () {
	return this.price;
};


// Calling a static method
Gadget.isShiny();

// Creating an instance and calling a method
var iphone = new Gadget();
iphone.setPrice(500);

// Call an instance method statically
console.log('On the constructor:');
console.log('Gadget.setPrice: ', Gadget.setPrice);
console.log('Gadget.isShiny: ', Gadget.isShiny);
console.log('');
// Call a static method on an instance
console.log('On the instance:');
console.log('iphone.setPrice: ', iphone.setPrice);
console.log('iphone.isShiny: ', iphone.isShiny);

Gadget.prototype.isShiny = Gadget.isShiny;
Gadget.getPrice = Gadget.prototype.getPrice;

iphone.isShiny();

console.log('iphone price: ', iphone.getPrice());
console.log('Gadget price: ', Gadget.getPrice());

