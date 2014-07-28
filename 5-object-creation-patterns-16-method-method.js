// METHOD METHOD: A 'sugar' method

if (typeof Function.prototype.method !== 'function') {
	Function.prototype.method = function (name, fn) {
		if (typeof this.prototype[name] !== 'function') {
			this.prototype[name] = fn;
			return this;
		}
	};
}

var Person = function (name) {
		this.name = name;
	}
		.method('getName', function () {
			return this.name;
		})
		.method('setName', function (name) {
			this.name = name;
			return this;
		}),
	pp;


pp = new Person('Pepe');

console.log(pp.getName());
console.log(pp.setName('Roberto').getName());


