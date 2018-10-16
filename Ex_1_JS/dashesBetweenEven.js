var number = 42568;
//var number = prompt("What is your name?");

const str = number.toString();
const result = [str[0]];

for(let x=1;x<str.length;x++){
	if((str[x-1]%2==0) &&(str[x]%2==0)){
		result.push('-', str[x]);
	}else{
		result.push(str[x]);
	}
}
console.log(result.join(''));