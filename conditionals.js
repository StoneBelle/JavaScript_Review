// CONDITIONALS
// Checks if something is true before executing something

// COMPARATORS
// === is equal to 
// !== in not equal to
// > is greater than 
// < is less than
// >= is greater or equal to 
// <= is lsser or equal to 
// && AND - both conditionals must be true
// || OR - either conditional must be true


// === checks if value & data type are equal
var a = 1;
var b = "1";

if (a === b) {
    console.log("Yes");
} else {
    console.log("No");
}


// == only checks if values are equal
var c = 1;
var d = "1";

if (c == d) {
    console.log("Yes");
} else {
    console.log("No");
}



// Test Score Alerts
var testScore = Math.random();
testScore = Math.floor(testScore * 100) + 1;

if (testScore >= 85) {
   alert("Your test score is " + testScore + "%." + " You are above average!"); 
} else if (testScore >= 70 && testScore <= 84) {
    alert("Your test score is " + testScore + "%." + " You are average.");
} else if (testScore >= 50 && testScore <= 69) {
    alert("Your test score is " + testScore + "%." + " You are below average.");
} else {
    alert("Your test score is " + testScore + "%." + " You failed.");
}
