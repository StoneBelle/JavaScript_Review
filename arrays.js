
var allNames = ["John", "Jane"];

var check_name = prompt("What is your name?: ");

// includes() returns T/F if the entered value is contained within the array
if (allNames.includes(check_name)) {
  console.log("Welcome " + check_name + "!");
} else {
  console.log('Unfortunately "'+ check_name + ' isn't on the list');
