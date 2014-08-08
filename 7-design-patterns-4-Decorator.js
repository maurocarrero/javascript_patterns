// DESIGN PATTERNS

// DECORATOR

function Sale(price) {
	this.price = price || 100;
}
Sale.prototype.getPrice = function () {
	return this.price;
}
Sale.prototype.decorate = function (decorator) {
	var F = function () {};
	

}

// Decorators
Sale.decorators = {};
Sale.decorators.fedtax = {
	getPrice: function () {
		var price = this.uber.getPrice();
		price += price * 5 / 100;
		return price;
	}
};


var sale = new Sale(100);
sale = sale.decorate('fedtax');
// sale = sale.decorate('quebec');
// sale = sale.decorate('money');
console.log('sale.getPrice', sale.getPrice());