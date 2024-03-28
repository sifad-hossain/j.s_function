/**
 * Objective: write a function to give me the sum of all numbers in an array
 * step-1: Declare a function
 * step-2: Call check whether the function is called properly
 * step-3: Set a parameter(s)
 * step-4: Pass the parameter(s), check wheter parametr is passed in a proper formate
 * step-5: Do the function task (step by step)
 */


/**
 * step-1: Declare a function
 */

// function sumOffNumbers() {
    
// }

// /**
//  * step-2: Call check whether the function is called properly
//  */



// function sumOffNumbers() {
    
// }

// const sum = sumOfNumbers(numbs);
// console.log('Sum of numbers is',':', sum);

// /**
//  * step-3: Set a parameter(s)
//  */

// function sumOffNumbers(numbers) {
    
// }

// const sum = sumOfNumbers(numbs);
// console.log('Sum of numbers is',':', sum);


/**
 * step-4: Pass the parameter(s), check wheter parametr is passed in a proper formate
 * step-5: Do the function task (step by step)
 */

function sumOfNumbers(numbers) {
    let sum = 0;
    for (const number  of numbers) {
        console.log(number);
        sum = sum + number;
    }
    return sum;
}

const numbs = [4, 5, 2,34];
const sum = sumOfNumbers(numbs);
console.log('Sum of numbers is',':', sum);