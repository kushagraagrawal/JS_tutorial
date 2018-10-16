var array_1 = [1,2,3,4,5];
var array_2 = [6,7,8,9,10];
function diffOfTwoArrays(array_1, array_2){
	var diffOfTwoArrays = [];
	for(let x=0;x<array_1.length;x++)
		diffOfTwoArrays.push(array_1[x] - array_2[x]);
	return diffOfTwoArrays;
}

console.log(diffOfTwoArrays(array_1, array_2));