var output = [];
var num = 0; 

function fizzBuzz(){
    num ++
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

fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
