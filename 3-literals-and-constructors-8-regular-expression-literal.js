// REG EXP

var regExp1 = /\\/gm,
	regExp2 = new RegExp('\\\\', 'gm'),
	regExp3 = /mauro/gmi;

console.dir(regExp1);
console.dir(regExp2);

console.log(regExp3.test('Mauro'));
console.log(regExp3.test('MAUROmauro'));
console.log(regExp3.test('Mauroasdfasdfasdfasdf'));
console.log(regExp3.test('asdfasdfasdfasdfMauro'));

// String.prototype.replace

console.log('peteco1234'.replace(/[a-z]/g, ''));