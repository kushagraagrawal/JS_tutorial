var person1 = {firstName: 'Jon', lastName:'Kuperman'};
var person2 = {firstName: 'Kelly', lastName:'King'};

function say(greeting, greeting2){
	console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
	console.log(greeting2);
}

say.call(person1, 'Hello', 'bye');
//say.call(person1, 'Hello2');
//say.call(person2, 'Hello');
//say('Hello');

say.apply(person1, ['hello', 'motherfucker']);

function sayagain(){
	console.log('hello there General ' + this.firstName + ' ' + this.lastName);

}
var person3 = {firstName: 'Obi-Wan', lastName:'Kenobi'};
var GeneralGrievous = sayagain.bind(person3);

GeneralGrievous();