function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
	
		
function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);

		Variables 	=	Datos
		Result= Hello   =	Hello 'Result is' ,15
/*

function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);



 */       
		Variables	=	Datos
                var result      =     "Result is",num,(15)
/*




function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);



*/		
		Variables		=	Datos
                Result=numPlus(3)	=	('Result is', 18);
/*



var num = 15;
console.log(num);
function logAndReturn(num2){
console.log(num2);   
return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);


*/
		Variables		=	Datos
		num          		=       15
                result = logAndReturn(10)=      10
/*

var num = 15;
console.log(num);
function timesTwo(num2){
console.log(num2);   
return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);


*/ 

		Variables	=	Datos
		num		=	15
	result = timesTwo(10)   =	20
/*


*/
function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);
/*

				Variables	=	Datos
    Y 		=	Num*2
result = timesTwoAgain(3) + timesTwoAgain(5)    =	3, 5
*/

/*
function sumNums(num1, num2) {  
    return num1+num2;
}
console.log(sumNums(2,3))
console.log(sumNums(3,5))
*/

		// No tiene Variables Var //
/*

*/
function sumNums(num1, num2) {  
return num1+num2;
}
console.log(sumNums(2,3))
console.log(sumNums(3,5))
/*

		Variables	=	Datos
		Sum		=	num1 + num2
Result	= SumNums(2,3)+(3,5)    =         5,8
*/

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);
/*

		Variables	=	Datos
		Var sum		=	5,8
		Var result	=	Result is 13
*/

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);
/*

		Variables	=	Datos
		Var sum		=  	5,3,6,3,5,8
		Var Result	=	Result is 19
        */