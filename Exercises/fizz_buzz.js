var output = [];

function fizzBuzz(num){
    if (num % 3 === 0 && num % 5 === 0){
        output.push("FizzBuzz");
    } else if (num % 3 === 0){
        output.push("Fizz");
    } else if (num % 5 === 0) {
        output.push("Buzz")
    } else {
        output.push(num)
    }
    return console.log(output)
}

fizzBuzz(1)
fizzBuzz(2)
fizzBuzz(3)
fizzBuzz(4)
fizzBuzz(5)
fizzBuzz(6)
fizzBuzz(7)
fizzBuzz(8)
fizzBuzz(9)
fizzBuzz(10)
fizzBuzz(11)
fizzBuzz(12)
fizzBuzz(13)
fizzBuzz(14)
fizzBuzz(15)
fizzBuzz(16)
fizzBuzz(17)
fizzBuzz(18)
