// ERROR OBJECTS

try {
	throw {
		name: 'Awesome Error',
		message: 'What a great and awesome error, indeed!!!',
		extra: 'Extra info for thie marvellous error'
	}
} catch(e) {
	console.log(e.name, e.message, e.extra);
}