// STATIC MEMBERS

// PUBLIC STATIC MEMBERS

// Constructor
var ret,
	aGadget,
	Gadget = function (price) {
		this.price = price;
	};

// A static method
Gadget.isShiny = function () {
	
	var msg = 'I was called statically!';

	if (this instanceof Gadget) {
		msg = 'I am an instance of Gadget';
	}

	return msg;
};

// As an instance method
Gadget.prototype.isShiny = Gadget.isShiny;

// Called from the constructor
ret = Gadget.isShiny();
console.log(ret);

// An instance
aGadget = new Gadget();

// Called from an instance
ret = aGadget.isShiny();
console.log(ret);

