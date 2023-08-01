// There are many types of loops 
// Essentially they all do the same thing: to excute specific code a certain amount of times
// However, depending on what you're trying to achieve certain loops may be more effective than others


// while loop
// requires you specify a condition/check for a state (i.e. T / F)
// continues to run the code as long as condition/state is true
// while (condition) {}

var bottles = 100

function numBottles() {
    while (bottles > 0){
        bottles --;
        console.log(bottles + " bottles of beer on the wall.")
    }
}
numBottles()


// for loop 
// requires you to specify how long you want your code to run
// focuses on iteration as opposed to state
// for (start; end; change) {}

function numCans() {
    for ( var cans = 100; cans >= 0; cans --) {
        console.log(cans + " cans of pop on the wall.")
    }
}
numCans()
