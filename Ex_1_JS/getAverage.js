var studentsWithMarks = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
function getAverageGrade(studentsWithMarks){
	var numberOfStudents = studentsWithMarks.length;
	var sumOfMarks = 0;
	for(let x=0;x<numberOfStudents;x++){
		sumOfMarks += studentsWithMarks[x][1];
	}
	var averageMarks = sumOfMarks/numberOfStudents;
	console.log(averageMarks);

	if(averageMarks <=100 && averageMarks > 90)
		return 'A';
	else if(averageMarks <=90 && averageMarks > 80)
		return 'B';
	else if(averageMarks <=80 && averageMarks > 70)
		return 'C';
	else if(averageMarks <=70 && averageMarks > 60)
		return 'D';
	else
		return 'F';
}
//console.log(getAverageGrade(studentsWithMarks));

console.log(getAverageGrade(studentsWithMarks));