function remove_duplicates(num){
	var len = num.length;
	var x;
	var out=[];
	var obj ={};
	for(x=0;x<len;x++){
		obj[num[x]] = 0;
	}
	for(x in obj){
		out.push(x);
	}
	return out;
}
var init_array = [1,2,3,4,1,2,3,4,6,3,23,45,2,4];
var result = remove_duplicates(init_array);
console.log(init_array);
console.log(result);