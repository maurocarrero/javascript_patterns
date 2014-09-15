// DESIGN PATTERNS

// STRATEGY
// Select algorithms at runtime depending on the context

// The validator must know which is the best strategy to validate this data

var validator = {
	// all available checks
	types: {},

	// error messages
	messages: [],

	// current validation config
	// name: validation type
	config: {},

	// the interface method
	// 'data' is key => value pairs
	validate: function (data) {
		var i, msg, type, checker, result_ok;

		// reset all messasges
		this.messages = [];

		for (i in data) {

			if (data.hasOwnProperty(i)) {

				type = this.config[i];

				checker = this.types[type];

				if (!type) {
					continue; // no need to validate
				}

				if (!checker) {
					throw {
						name: 'Validation errors',
						message: 'No handler to validate type ' + type
					}
				}
			}

			result_ok = checker.validate(data[i]);
			if (!result_ok) {
				msg = 'Invalid value for *' + i + '*, ' + checker.instructions;
				this.messages.push(msg);			
			}

		}
		return this.hasErrors();
	},

	// helper
	hasErrors: function () {
		return this.messages.length !== 0;
	}

};

// add validations as different types in the validator object
validator.types.isNonEmpty = {
	validate: function (value) {
		return value !== '';
	},
	instructions: 'the value cannot be empty'
};
validator.types.isNumber = {
	validate: function (value) {
		return !isNaN(value);
	},
	instructions: 'the value must be numeric.'
};
validator.types.isAlphaNum = {
	validate: function (value) {
		return !/[^a-zA-Z0-9]/i.test(value);
	},
	instructions: 'the value can only be an alphanumeric character, no special symbols.'
}

// Configure validator to handle my data
validator.config = {
	firstName: 'isNonEmpty',
	age: 'isNumber',
	username: 'isAlphaNum'
};

// Data validation example
var data = {
	firstName: '',
	lastName: 'Man',
	age: 'unknown',
	username: 'o_O'
};

validator.validate(data);
if (validator.hasErrors()) {
	console.log(validator.messages.join('\n'));	
}
