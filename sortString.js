var exampleString = 'webmaster';
function sortString(exampleString){
	return exampleString.split('').sort().join('');
}
console.log(sortString(exampleString));