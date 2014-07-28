// STATIC MEMBERS

// PRIVATE STATIC MEMBERS

// Constructor
var g1, g2, g3, g4, g5,
	Gadget = (function (price) {

		// PRIVATE STATIC VARIABLE / PROPERTY
		var counter = 0,
			NewGadget;

		NewGadget = function () {
			counter += 1;
		};

		// A privileged method
		NewGadget.prototype.getLastId = function () {
			return counter;
		};

		return NewGadget;

	})();

g1 = new Gadget();
console.log('Last id: ', g1.getLastId());
g2 = new Gadget();
console.log('Last id: ', g2.getLastId());
g3 = new Gadget();
console.log('Last id: ', g3.getLastId());
g4 = new Gadget();
console.log('Last id: ', g4.getLastId());
g5 = new Gadget();
console.log('Last id: ', g5.getLastId());