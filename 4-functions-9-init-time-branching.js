// FUNCTIONS - INIT-TIME BRANCHING

// BEFORE - ON EACH CALL TO UTILS, THE FEATURE DOES THE SAME ENVIRONMENT CHECKING
var aux,
	myModule,

	// BEFORE
	utilsBefore = {
		addListener: function (el, type, fn) {
			if (window.addEventListener) {
				el.addEventListener(type, fn);
			} else if (document.attachEvent) {
				el.attachEvent('on' + type, fn);
			} else {
				// OLDER BROWSERS
				el['on' + type] = fn;
			}
		},
		removeListener: function (el, type, fn) {
			// pretty much the same
		}
	},

	//AFTER
	// THE INTERFACE
	utilsAfter = {
		addListener: null,
		removeListener: null
	};

if (typeof window !== 'undefined') {
	if (window.addEventListener) {
		utilsAfter.addListener = function (el, type, fn) {
			el.addEventListener(type, fn, false);
		};
		utilsAfter.removeListener = function () {
			el.removeEventListener(type, fn, false);
		};
	} else if (document.attachEvent) {
		utilsAfter.addListener = function (el, type, fn) {
			el.attachEvent('on' + type, fn);
		};
		utilsAfter.removeListener = function (el, type, fn) {
			el.detachEvent('on' + type, fn);
		}
	} else {
		// OLDER BROWSERS
		utilsAfter.addListener = function() {
			el['on' + type] = fn;
		};
		utilsAfter.removeListener = function () {
			el['on' + type] = null;
		}
	}
} else {
	console.log('WE ARE IN A NOT_BROWSER ENVIRONMENT');
}


myModule = ({
	addListener: null,
	removeListener: null,
	init: function() {
		if (typeof window !== 'undefined') {
			if (typeof addEventListener === 'function') {
				this.addListener = function(el, evt, fn) {
					el.addEventListener(evt, fn);
				};
				this.removeListener = function (el, evt, fn) {
					el.removeEventListener(evt, fn);
				};
			} else if (typeof attachEvent === 'function') {
				this.addListener = function (el, evt, fn) {
					el.attachEvent('on' + evt, fn);
				};
				this.removeListener = function (el, evt, fn) {
					el.detachEvent('on' + evt, fn);
				};
			} else {
				this.addListener = function (el, evt, fn) {
					el[evt] = fn;
				}
				this.removeListener = function (el, evt, fn) {
					el[evt] = null;
				}
			}
		} else {
			// delete this.addListener;
			// delete this.removeListener;
		}
		return this;
	}
}).init();

console.info(myModule);







