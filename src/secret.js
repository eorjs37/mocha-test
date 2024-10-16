var secretTemplate = (function(){
	const secret = "sekrit"
	const secretFunction = function(){
		return secret
	}
	totallyNotSecret = "XX"

	return{
		normalInfo:'this is normal',
		notSecret(){
			return secret;
		}
	}
})();

const s = Object.create(secretTemplate)
console.log(s.normalInfo);
console.log(s.notSecret());
