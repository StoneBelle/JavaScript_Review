// Random Number Generations

// Math.random();
// Generates a 16-long decimal number
// Ranges from 0 - 0.9999999999999999

// Creating a dice (nums 1 - 6)
var dice = Math.random();

dice = dice * 6;   // Mulitply by 6 since there are 6 sides on a dice
dice = Math.floor(dice) // "floor" round down to nearest whole number. This creates random nums (0 - 5)
dice ++ // Adds 1 so number range is (1 - 6) (pseudo-random)
console.log(dice);
