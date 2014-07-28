// OBJECT CREATION PATTERN

// PRIVATE PROPERTIES AND METHODS
// PRIVATE MEMBERS
// PRIVILEGED METHODS
// PRIVACY FAILURES

var myObj = {
		myProp: 2,
		getProp: function () {
			return this.myProp;
		}
	},

	ObjMaker = function () {
		var privateVar = 7;

		this.myProp = 3;

		// PRIVILEGED METHOD: HAS ACCESS TO THE PRIVATE VARS
		this.getProp = function () {
			return this.myProp + privateVar;
		};
		this.getPriv = function () {
			return privateVar;
		};
	},

	aux = null;

console.log(myObj.myProp);
console.log(myObj.getProp());

aux = new ObjMaker();

console.log(aux.getProp());
console.log(aux.myProp);
console.log(aux.getPriv());
console.log(aux.privateVar); // undefined, cannot access

ObjMaker = function () {
	// Private specs var
	var specs = {
		height: 600,
		width: 900,
		color: 'grey'
	};

	// Returning the reference to specs allows the client to override its content 
	this.getSpecs = function () {
		return specs;
	};
	// Make the request more specific
	this.getDimensions = function () {
		return {
			height: specs.height || 'NO HEIGHT',
			width: specs.width || 'NO WIDTH'
		};
	};

}

aux = new ObjMaker();

var dim,
	specs = aux.getSpecs();

delete specs.height;
delete specs.color;

dim = aux.getDimensions();

delete dim.width;

console.info(dim);
console.info(aux.getSpecs());



