const checkHand = function(){
	return 'pair'
}
const wish = require('wish')
// 어설션은 하나는 테스트를 취할 대상이고, 하나는 결과 메세지
wish(checkHand(['2-H', '3-C', '4-D', '5-H', '2-C'])==='pair');
wish(checkHand(['3-H','3-C','3-D','5-H','2-H'])==='three of a kind');