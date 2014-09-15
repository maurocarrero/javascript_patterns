// DESIGN PATTERNS

// OBSERVER - PUBLISHER/SUSCRIBER - Custom events (others than the browser ones)
// * Promote loose coupling
// * An object subscribe to another object's specific activity and gets notified

// PUBLISHER - OBSERVABLE
// SUBSCRIBER - OBSERVER

var publisher = {
	
	subscribers: {
		any: [] // event types: subscribers
	},

	subscribe: function (fn, type) {
		type = type || 'any';
		if (typeof this.subscribers[type] === 'undefined') {
			this.subscribers[type] = [];
		}
		this.subscribers[type].push(fn);
	},

	unsubscribe: function (fn, type) {
		this.visitSubscribers('unsubscribe', fn, type);
	},

	publish: function (publication, type) {
		this.visitSubscribers('publish', publication, type);
	},

	visitSubscribers: function (action, arg, type) {
		var pubtype = type || 'any',
			subscribers = this.subscribers[pubtype],
			i,
			max = subscribers.length;

		for (i = 0; i < max; i += 1) {
			if (action === 'publish') {
				subscribers[i](arg);
			} else {
				if (subscribers[i] === arg) {
					subscribers.splice(i, 1);
				}
			}
		}
	}
};


// mixin to create publishers
function makePublisher(o) {
	var i;
	for (i in publisher) {
		if (publisher.hasOwnProperty(i) && typeof publisher[i] === 'function') {
			o[i] = publisher[i];
		}
	}
	o.subscribers = { any: [] };
}

var paper = {
	daily: function () {
		this.publish('Big news today!');
	},
	monthly: function () {
		this.publish('interesting analysis', 'monthly');
	}
};

// Making the paper a publisher
makePublisher(paper);

// Joe, the subscriber
var joe = {
	drinkCoffee: function (paper) {
		console.log('Just read ' + paper);
	},
	sundayPreNap: function (monthly) {
		console.log('About to fall asleep reading this ' + monthly);
	}
};


paper.subscribe(joe.drinkCoffee);
paper.subscribe(joe.sundayPreNap, 'monthly');

paper.daily();
paper.daily();
paper.daily();
paper.monthly();

makePublisher(joe);

joe.tweet = function (msg) {
	this.publish(msg);
}

paper.readTweets = function (tweet) {
	console.log('Call big meeting! Someone ' + tweet);
}

joe.subscribe(paper.readTweets);

joe.tweet('hated the paper today');

