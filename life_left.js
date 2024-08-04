// Create a function that returns the a person's remaining days, weeks, and months of their life.
// Assuming they live to the age 90

function lifeInWeeks(age) {
    
    let daysLeft = 90 - age

    let days = daysLeft * 365
    let weeks = daysLeft * 52
    let months = daysLeft * 12
    
    let remainderLife = ("You have " + days + " days, " + weeks + " weeks " + months + "months of your life left.")
    
    return remainderLife

}

lifeInWeeks(12);
