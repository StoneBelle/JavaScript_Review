// Simple Function
function myFunction() {
    console.log("Jello")
    console.log("Ice Cream")
}

myFunction()



// Function with parameters
function generalStore(wallet){
    var pocky_price = 3
    var num_of_pocky = wallet / pocky_price
    console.log("You can buy " + Math.floor(num_of_pocky) + " with your $" + wallet )
    
}

generalStore(5)



//  Function that returns a value 
function getChange(cash, snack_price) {
    var change = cash % snack_price
    return console.log("Your change is: $" + change)
}

getChange(5, 1.5)



// BMI Calculator Exercise
function bmiCalculator(weight, height) {
    var bmi = weight / (height ** 2);  
    return Math.round(bmi);
}


bmiCalculator(65, 1.8)