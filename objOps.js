var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

function getAllProgrammers(myObj){
	result = [];
	myObj.forEach(function (item){
		if(item.occupation == 'Programmer')
			result.push(item);
	});
	return result;
}

console.log(getAllProgrammers(myObj));
// sorting descending order
myObj.sort(function(a,b){
	return b.age - a.age
});

console.log(myObj);

const arrayToObject = (array, keyField) =>
	array.reduce((obj, item) => {
		if(obj[item[keyField]] == undefined){
			obj[item[keyField]] = [];
			obj[item[keyField]].push(item);
		}
		else
		  obj[item[keyField]].push(item);
		return obj;
	},{});

const peopleObject = arrayToObject(myObj, "occupation");
console.log(peopleObject);

//using map to get all names
var names = [];
names = myObj.map(function(a){return a.name});
console.log(names);