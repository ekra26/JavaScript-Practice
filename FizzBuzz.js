// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. 
// For numbers which are multiples of both three and five print FizzBuzz.

function printNumbers(maxCount) {
    for (let i = 1; i <= maxCount;i++) {
        switch (true) {
            case (i % 3 === 0 && i % 5 === 0):
                console.log("FizzBuzz");
            break;
            case (i % 3 === 0):
                console.log("Fizz")
            break;
            case (i % 5 === 0):
                console.log("Buzz");
            break;
            default: 
                console.log(i);
        }  
    }
}

printNumbers(100);