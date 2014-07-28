// CODE REUSE PATTERNS

// CLASSICAL PATTERN #2 - 
// BORROW CONSTRUCTOR PATTERN - MULTIPLE INHERITANCE

function Cat() {
	this.legs = 4;
	this.say = function () {
		return 'meaowww';
	};
}

function Bird() {
	this.wings = 2;
	this.fly = true;
}

// BORROWING FROM MORE THAN ONE CONSTRUCTOR
function CatWings() {
	Cat.apply(this);
	Bird.apply(this);
}

var jane = new CatWings();
console.dir(jane);