var log = function(someVariable){
	console.log(someVariable);
	return someVariable;
}

var doSomething = function(thing){
	thing();
}

var sayBigDeal = function(){
	var message = "this is dumb";
	log(message);
}

doSomething(sayBigDeal);