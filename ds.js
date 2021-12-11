
/* 
This is multiline comment
Author: Femil
*/
//document.write("This is an external js");
//document.getElementById('th').innerHTML = "This is a paral";
//var a1 = 45;
//var a11= 5;
//var a2 = "This is me";
//document.write(a1+a11,"<br>");
//document.write(a1, a11,"<br>");

//Console.log("This is Console");
//console.log is used for debugging purpose

/*
var age = prompt("Tell me your age");
document.write("your age is =", age);
alert("your age is", age);

document.write(" 45 + 5 = ", 45+5,"<br>");
document.write(" 45 - 5 = ", 45-5,"<br>");
document.write(" 45 * 5 = ", 45*5,"<br>");
document.write(" 45 / 5 = ", 45/5,"<br>");
document.write(" 45 % 5 = ", 45%5,"<br>");


var foodcost = prompt("What is the total amount");
var no = prompt("No of People");
document.write("This is total cost of food was ", foodcost,"<br>");
document.write("Each one of you has to pay ", (foodcost/no).toFixed(2),"<br>");
*/

/*
document.write("2^9 = ", Math.pow(2,2),"<br>"); 
document.write("abs(-34) = ", Math.abs(-34),"<br>"); 
document.write("sqrt(25) = ", Math.sqrt(25),"<br>"); 
*/

/*
var str1 = "CodeWithinFemil";
document.write(str1.length,"<br>"); 
document.write(str1.indexOf("With"),"<br>"); 
document.write(str1.substr(2,5),"<br>");
document.write(str1.replace("Femil","Kenil"),"<br>"); 
document.write(str1.toUpperCase(),"<br>"); 
document.write(str1.toLowerCase(),"<br>");  
*/

//Relational Operators: ==, !=, <, >, >=, <=
//Logical Operators: &&, ||
/*
var age = prompt("Tell me your age");
if(age<20 && age>=10)
{
	document.write("you go to school");
}
else if(age<10 && age>3)
{
	document.write("you also go to school");	
}
else
{
	document.write("Do whatever you want");
}


var age = prompt("Tell me your age ");
switch(age)
{
	case "21":
		document.write(" 21 years old ");
		break;
	case "12":
		document.write(" 12 years old ");
		break;
	case "31":
		document.write(" 31 years old ");
		break;
	default:
		document.write(" More then old ");
		break;
}
*/
/*
var i=1;
while(i<=100)
{
	document.write(i);
	i++;
}

for (var i = 10; i >=1; i--) {
	document.write(i,"<br>");
}
*/

var i,j;
for (i = 1; i <= 5;i++)
{
	for (j = 1; j<=i; j++) 
	{
		document.write(j+ "&nbsp;&nbsp;&nbsp;");
	}
	document.write("<br>");
} 






