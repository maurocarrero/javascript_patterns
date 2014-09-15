// DESIGN PATTERNS

// FACADE
// Provides only an alternative interface to an object

var obj = {
		start: function () {
			console.log('I\'ve started');
		},
		run: function () {
			console.log('I am running...');
		}
	},
	facade = {
		startAndRun: function () {
			obj.start();
			obj.run();
		}
	};

facade.startAndRun();