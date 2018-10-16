var today = new Date();
var day = today.getDay();
var daylist =["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is " + daylist[day]);
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
console.log("time" + hour + "hrs "+ minute + "mins" + second);
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 

today = mm + '/' + dd + '/' + yyyy;
console.log(today);