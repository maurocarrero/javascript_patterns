// OBJECT CREATION PATTERN

// 1. NAMESPACE PATTERN
// 2. GENERAL PURPOSE NAMESPACE FUNCTION
// 3. DECLARING DEPENDENCIES

var events = require('events'),
	http = require('http'),
	// other dependencies examples:
	// event = YAHOO.util.Event
	// dom = YAHOO.util.Dom

	MCM = MCM || {}; // Non destructive patterns

// Non destrcutive: A namespace function to create new modules of our namespace
MCM.namespace = function (ns) {
	var parts = ns.split('.'),
		parent = MCM;

	// strip redundant leading global
	if (parts[0] === 'MCM') {
		parts = parts.slice(1);
	}

	parts.map(function (a) {
		if (typeof parent[a] === 'undefined') {
			parent[a] = {};
		}
		parent = parent[a];
	});

	return parent;
};

var module1 = MCM.namespace('MCM.modules.module1');





