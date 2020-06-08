console.log('Hello World');
var number = 5; // in-line comment

/*this is a 
multi-line comment*/
number =9;

//Data Types
/*
undefined 
null
boolean
string
symbol
number
object
*/

//Variable
var myName = "Anil" //use throughout whole program
myName = 7

let ourName = "Hello World" // only in the scope

const pi = 3.14 //the value can never change

var a; // declaring a variable
console.log(a)
var b = 2; // declaring and assigning a variable
a = 7;
b = a;
console.log(a)

var studyCapVar;

STUDYCAPVAR = 10;
console.log("Variable case sensitivity" + studyCapVar)

//adding two number
var sum = 10 + 10;
console.log("Sum of two number: " + sum)

var myVar =92;
myVar ++;
console.log("INcremental Value : " +myVar)

var ourDecimal = 23.302
var product = ourDecimal * 2;
console.log(
    "Product" + product
)
var quotient = product/ 2.0
console.log("Quotient: " + quotient)

//finding a reminder

var reminder;
reminder = 11 % 3
console.log("Reminder: " + reminder);

reminder += 12 //reminder = reminder + 12
console.log("Shortend Addtiion += : " + reminder);

reminder -= 10 //reminder = reminder - 10
console.log("Shortend Subtraction += : " + reminder);

reminder *= 3 //reminder = reminder * 3
console.log("Shortend Multiplication += : " + reminder);

reminder /= 6 //reminder = reminder / 6
console.log("Shortend Division += : " + reminder);

//Strings
var firstname = "Anil"
var lastname ='Kumar'
console.log ("Firstname: " + firstname +" Lastname: " + lastname);

var myStr = "I am a \"double quoted\" string";
console.log("Quotation: " + myStr)

var myURL = '<a href ="http://www.google.com" target="_blank"> Link </a>';
console.log(myURL);

//Escape sequences
/* 
\' single quote
\" double quote
\\ backslash
\n new line
\r carriage return
\t tabl
\b backspace
\f form feed
****/
console.log("Anil\b" + '\tKumar' + "\r is \\ a \f character\nwith \"quality\'"); 

var adj = "Awesome!";
var str = "Anil is ";
str += adj;
console.log("Shortend adding strings: " + str);

//length of string

var firstnameLength = 0;
firstnameLength = firstname.length;
console.log("First Name Length: " + firstnameLength);

//find index of a string

console.log("First Index of Firstname: " + firstname[0]);
console.log("Second Index of lastname: " + lastname[1]);
console.log("Last Index of Firstname: " + firstname[firstname.length - 1]);

//Functions

function wordBlanks (myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store very " + myAdverb;
    return result;
}
console.log(wordBlanks("dog", "big","ran","quickly"));