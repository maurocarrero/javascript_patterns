// DESIGN PATTERNS

// ITERATOR

var agg = (function () {
	var struct = [
			{
				name: 'Lucho',
				hobby: 'Play guitar'
			},
			{
				name: 'Peter',
				hobby: 'Make burritos'
			},
			{
				name: 'Cristina',
				hobby: 'Sing'
			}
		],
		index = 0;
		length = struct.length;

	return {
		next: function () {
			var element;
			if (!this.hasNext()) {
				return null;
			}
			element = struct[index];
			index += 1;	
			return element;
		},
		hasNext: function () {
			return (index < length);
		},
		rewind: function () {
			index = 0;
		},
		current: function () {
			if (index === length) {
				index = length - 1;
			}
			return struct[index];
		},
		toString: function () {
			while (agg.hasNext()) {
				console.log(agg.next());
			}
		},
		getIndex: function () {
			return index;
		}
	};

})();


agg.toString();
console.log('and current again...', agg.current());
agg.toString();
console.log('More? ', agg.hasNext());
agg.rewind();
console.log('rewind...');
console.log('And now? ', agg.hasNext());
console.log('then');
agg.toString();
console.log('and current again...', agg.current());

var i = agg.getIndex();
console.log(i);

