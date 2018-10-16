var array_1 = [1,2,3,4,5];
var array_2 = [1,2,3,9,10];
function diffOfTwoArrays(array_1, array_2){
	var diffOfTwoArrays = [];
	for(let x=0;x<array_1.length;x++)
		diffOfTwoArrays.push(array_1[x] - array_2[x]);
	return diffOfTwoArrays;
}
function arr_diff(array_1, array_2){
	var a =[], diff = [];

	for(var i =0;i<array_1.length;i++){
		a[array_1[i]]=true;
	}
	for(var i =0;i<array_2.length;i++){
		if(a[array_2[i]]){
			delete a[array_2[i]];
		}else{
			a[array_2[i]] = true;
		}
	}

	for(var k in a){
		diff.push(k);
	}
	return diff;
}
console.log(diffOfTwoArrays(array_1, array_2));
console.log(arr_diff(array_1, array_2));
