// DESIGN PATTERNS

// OBSERVER - PUBLISHER/SUSCRIBER - Custom events (others than the browser ones)
// * Promote loose coupling
// * An object subscribe to another object's specific activity and gets notified

// PUBLISHER - OBSERVABLE
// SUBSCRIBER - OBSERVER

// publish - fire
// subscribe - on
// unsubscribe - remove

var publisher = {
	subscribers: {
		any: []
	},
	on: function (type, fn, context) {
		type = type || 'any';
		fn = typeof fn === 'function' ? fn : context[fn];

		if (typeof this.subscribers[type] === 'undefined') {
			this.subscribers[type] = [];
		}

		this.subscribers[type].push({
			fn: fn,
			context: context || this
		});
	},
	remove: function (type, fn, context) {
		this.visitSubscribers('unsubscribe', type, fn, context);
	},
	fire: function (type, publication) {
		this.visitSubscribers('publish', type, publication);
	},
	visitSubscribers: function (action, type, arg, context) {
		var pubtype = type || 'any',
			subscribers = this.subscribers[pubtype],
			i,
			max = subscribers ? subscribers.length : 0;

		for (i = 0; i < max; i += 1) {
			if (action === 'publish') {
				subscribers[i].fn.call(subscribers[i].context, arg);
			} else {
				if (subscribers[i].fn === arg && subscribers[i].context === context) {
					subscribers.splice(i, 1);
				}	
			}
		}
	}
};


function Player(name, key) {
	this.points = 0;
	this.name = name;
	this.key = key;
	this.fire('newplayer', this);
}

Player.prototype.play = function () {
	this.points = 0;
	this.fire('play', this);
}

