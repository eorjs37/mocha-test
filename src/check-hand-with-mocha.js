const wish = require('wish');

function isPair(hand){
	return multiplesIn(hand) === 2;
};

function checkHand(hand) {
	if(isPair(hand)){
	 return 'pair';
	}else{
 		return 'three of a kind';
	}
 };

function multiplesIn(hand){};

describe('multiplesIn()', () => {
	it('finds a duplicate', () => {
		var result = multiplesIn(['2-H', '3-C', '4-D', '5-H', '2-C']);
 		wish(result === 2);
	});
});

describe('isPair()', () => {
	it('finds a pair', () => {
		var result = isPair(['2-H', '3-C', '4-D', '5-H', '2-C']);
		wish(result);
	});
});

describe('checkHand()', () => {
	it('handles pairs', () => {
		var result = checkHand(['2-H', '3-C', '4-D', '5-H', '2-C']);
		wish(result === 'pair');
		var anotherResult = checkHand(['3-H', '3-C', '4-D', '5-H', '2-C']);
   	wish(anotherResult === 'pair');
	});

	it('handles three of a kind', ()=> {
		var result = checkHand(['3-H', '3-C', '3-D', '5-H', '2-H']);
		wish(result === 'three of a kind');
	});
 });