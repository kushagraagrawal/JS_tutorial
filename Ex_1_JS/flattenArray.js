var myObj = [5, [22], [[14]], [[4]],[5,6]];
function flatten(arr){
	return arr.reduce(function (flat, toFlatten){
		return flat.concat(Array.isArray(toFlatten)? flatten(toFlatten) : toFlatten);
	}, []);
}
console.log(flatten(myObj));
