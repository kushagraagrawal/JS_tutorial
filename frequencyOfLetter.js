var queryString = 'gmail.com';
var queryChar = 'm';
function frequencyOfLetter(queryString, queryChar){
	var regex = new RegExp(queryChar,"gi"); //regex creates a regex object. g means global and i means case-insensitive
	return queryString.match(regex).length;
}
console.log(frequencyOfLetter(queryString, queryChar));