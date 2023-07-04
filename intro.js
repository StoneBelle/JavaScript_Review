// Practice JS in Chrome browser
// Browser > Inspect > Sources > Snippets 

// Snippets is better for multi-line code practice as opposed to console

// Check JS data type
typeof(true)
typeof("Cruiser")
typeof(2)


// Swap variable values without a temp variable
var a = 3
var b = 8

a = a + b
b = a - b
a = a - b
alert(a)
alert(b)


// Slicing a str
// str.slice(start, end)

alert(prompt("Enter your message:").slice(0, 140));


/* Prompt user for their name and store in var
Ensure only 1st letter is capitalized
Greet user with capitalized version of their name in an alert */

var user_name = "jaime";
// name = name.toUpperCase();
// name = name.toLowerCase();

user_name.slice(0,1).toUpperCase();
alert("Hello " + user_name.slice(0,1).toUpperCase() + user_name.slice(1, 6))


// Simple Snippet Exercises
var x = prompt("Enter a Date: ")
alert(x)

let myName ="Shi"
let yourName = "Tou"

alert("Hello " + yourName + ", my name is " + myName + ".")


// Determines lenght of str or array
myName.length

let tweet = prompt("Enter your message:")
let tCount = tweet.length
let tRemainder = 150 - tCount
alert(myName + "your message is " + tCount + " characters long. You have " + tRemainder + " characters left.")


// Increment and Decrement in JS
// x ++ adds 1 to previous value
// x -- subtracts 1 from previous value
// += increase/decrease by a specfic value


