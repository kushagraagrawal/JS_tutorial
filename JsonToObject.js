var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
var x = JSON.parse(jsonStr);
console.log(x.jason);

var reviver = function(key, value){
	console.log('reviver called with key="' + key + '", value=' + value);
	if(key == 'mike'){
		return value + " harry";
	}
	return value;
};

var y = JSON.parse(jsonStr, reviver);
console.log(y.mike);