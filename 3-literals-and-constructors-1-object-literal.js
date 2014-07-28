var dog = {}, cat, car, car2;

dog.name = 'Lassie';

dog.getName = function () {
	return this.name;
}

console.log(dog.getName());

// CHANGE THE VALUE OF PROPERTIES AND METHODS

dog.name = 'Boby';
dog.getName = function () {
	return 'My name is ' + this.name;
}

console.log(dog.getName());

// REMOVE PROPERTIES AND METHODS
delete dog.name;

console.log(dog.getName());

// ADD MORE PROPERTIES AND METHODS
dog.say = function () {
	console.log('Guau guau!!');
};
dog.fleas = true;

console.info(dog);


// CONSTRUCT ALL AT THE SAME TIME
cat = {
	name: 'Misifus',
	getName: function () {
		return this.name;
	},
	say: function () {
		console.log('Meaooooow!!!');
	},
	fleas: true
};

console.info(cat);

dog.say()
cat.say();




// TWO DIFFERENT WAYS, FROM A LITERAL AND FROM A CONSTRUCTOR
car = new Object();
car.brand = 'Chery';
car.model = 'QQ';

car2 = { brand: 'Chery', model: 'QQ' };

console.info(car);
console.info(car2);






