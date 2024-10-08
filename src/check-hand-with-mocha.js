const wish = require('wish');
const deepEqual =require('deep-equal')
function isPair(hand){
	return multiplesIn(hand) === 2;
};

function checkHand(hand) {
	if(isTwoPair(hand)){
    return 'two pair';
  }
	else if(isPair(hand)){
		return 'pair';
	}else if(isFullHouse(hand)){
    return 'full house';
  }
	else if(isTriple(hand)){
		return 'three of a kind';
	}else if(isQuadruple(hand)){
		return 'four of a kind'
	}
	else if(isStraightFlush(hand)){
    return 'straight flush';
  }
	else if(isFlush(hand)){
		return 'flush'
	}
	else if(isStraight(hand)){
		return 'straight'
	}
	else{
		return 'high card'
	}
};

function isQuadruple(hand){
	 return multiplesIn(hand) === 4;
}

function isTriple(hand){
	return multiplesIn(hand) === 3;
}

function multiplesIn(hand){
	return highestCount(valuesFromHand(hand))
};

function isFlush(hand){
	return allTheSameSuit(suitsFor(hand));
}

function isStraight(hand){
	return cardsInSequence(valuesFromHand(hand))
}
function cardsInSequence(values){
  var sortedValues = values.sort();
  return fourAway(sortedValues) && noMultiples(values);
};

function fourAway(values){
  return ((+values[values.length-1] - 4 - +values[0])===0);
};

function noMultiples(values){
  return highestCount(values)==1;
};
function isStraightFlush(hand){
  return isStraight(hand) && isFlush(hand);
}


function allTheSameSuit(suits){
	let toReturn = true;
  suits.forEach((suit)=>{
    if(suit !== suits[0]){
      toReturn = false;
    }
  })
  return toReturn;
}

function suitsFor(hand){
  return hand.map(function(card){
    return card.split('-')[1];
  })
};

function highestCount(values){
	var counts = {};
  values.forEach((value, index)=>{
    counts[value]= 0;
    if(value == values[0]){
      counts[value] = counts[value] + 1;
    };
    if(value == values[1]){
      counts[value] = counts[value] + 1;
    };
    if(value == values[2]){
      counts[value] = counts[value] + 1;
    };
    if(value == values[3]){
      counts[value] = counts[value] + 1;
    };
    if(value == values[4]){
      counts[value] = counts[value] + 1;
    };
  });
  var totalCounts = Object.keys(counts).map((key)=> {
    return counts[key];
  });
  return totalCounts.sort((a,b)=>{return b-a})[0];
}
function valuesFromHand(hand){
	return hand.map((card) => {
		return card.split('-')[0];
	})
}
function allCounts(values){
  var counts = {};
  values.forEach(function(value, index){
    counts[value]= 0;
    if(value == values[0]){
      counts[value] = counts[value] + 1;
    };
    if(value == values[1]){
      counts[value] = counts[value] + 1;
    };
    if(value == values[2]){
      counts[value] = counts[value] + 1;
    };
    if(value == values[3]){
      counts[value] = counts[value] + 1;
    };
    if(value == values[4]){
      counts[value] = counts[value] + 1;
    };
  });
  var totalCounts = Object.keys(counts).map(function(key){
    return counts[key];
  });
  return totalCounts.sort(function(a,b){return b-a});
};
function isFullHouse(hand){
  var theCounts = allCounts(valuesFromHand(hand));
  return(theCounts[0]===3 && theCounts[1]===2);
};
function isTwoPair(hand){
  var theCounts = allCounts(valuesFromHand(hand));
  return(theCounts[0]===2 && theCounts[1]===2);
};


describe('noMultiples()', () => {
	it('reports true when all elements are different', ()=> {
    var result = noMultiples(['2', '6']);
    wish(result);
  });
  it('reports false when two elements are the same', ()=> {
    var result = noMultiples(['2', '2']);
    wish(!result);
  });
});

describe('fourAway()', () => {
	it('reports true if first and last are 4 away', ()=> {
    var result = fourAway(['2', '6']);
    wish(result);
  });
});

describe('allTheSameSuit()', () => {
	it('reports true if elements are the same', () => {
		var result = allTheSameSuit(['D', 'D', 'D', 'D', 'D']);
    wish(result);
	});

	it('reports false if elements are not the same', ()=> {
    var result = allTheSameSuit(['D', 'H', 'D', 'D', 'D']);
    wish(!result);
  });
});

describe('valuesFromHand()', () => {
	it('returns just the values from a hand ', () => {
		var result = valuesFromHand(['2-H', '3-C', '4-D', '5-H', '2-C']);
  	wish(deepEqual(result,['2', '3', '4', '5', '2']));
	});
});

describe('highestCount()', () => {
	it('should ', () => {
		var result = highestCount(['2', '4', '4', '4', '2']);
		wish(result === 3);
	});
});

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

	it('handles four of a kind', ()=> {
    var result = checkHand(['3-H', '3-C', '3-D', '3-S', '2-H']);
    wish(result === 'four of a kind');
  });

	it('handles high card', () => {
		var result = checkHand(['2-H', '5-C', '9-D', '7-S', '3-H']);
    wish(result === 'high card');
	});

	it('handles flush', () => {
		var result = checkHand(['2-H', '5-H', '9-H', '7-H', '3-H']);
  	wish(result === 'flush');
	});

	it('handles straight', () => {
		var result = checkHand(['1-H', '2-H', '3-H', '4-H', '5-D']);
    wish(result === 'straight');
	});
	it('handles straight flush', ()=> {
    var result = checkHand(['1-H', '2-H', '3-H', '4-H', '5-H']);
    wish(result === 'straight flush');
  });
	it('handles full house', ()=> {
    var result = checkHand(['2-D', '2-H', '3-H', '3-D', '3-C']);
    wish(result === 'full house');
  });
	it('handles two pair', function() {
    var result = checkHand(['2-D', '2-H', '3-H', '3-D', '8-D']);
    wish(result === 'two pair');
  });
 });