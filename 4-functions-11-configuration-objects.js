// FUNCTIONS - CONFIGURATION OBJECTS

var person1,
	person2,
	person3,
	PersonMaker = function (conf) {
		if (!(this instanceof arguments.callee)) {
			return new arguments.callee(conf);
		}
		this.name = conf.name || 'No name';
		this.lastname = conf.lastname || 'No lastname';
		this.birthdate = conf.birthdate || 'No birthdate';
		this.username = conf.username || 'No username';
		this.password = conf.password || 'No password';
	};

person1 = new PersonMaker({ name: 'Mauro' });
person2 = PersonMaker({ name: 'Virginia', birthdate: '11-08-1977' });
person3 = new PersonMaker({ username: 'lucascalu' });

console.info(person1);
console.info(person2);
console.info(person3);