/**
 * Create function that wil return only the even numbers
 * return the sum of numbers
 */

// //Step-01:
// function evenNumbersOnly(numbers) {
//     console.log(numbers);
// }

// const number = [12, 5, 6, 52];
// evenNumbersOnly(number)


//Step-02:
// function evenNumbersOnly(numbers) {
//   for (const number of numbers) {
//     console.log(number);
//   }
// }

// const number = [12, 5, 6, 52];
// evenNumbersOnly(number)


//Step-03:
// function evenNumbersOnly(numbers) {

//   for (const number of numbers) {
//     if (number % 2 === 0){
//         console.log(number);
//     }
//   }
// }

// const number = [12, 5, 6, 52,7];
// evenNumbersOnly(number)



//Step-03:
function evenNumbersOnly(numbers) {
    const evens = [];
  for (const number of numbers) {
    if (number % 2 === 0){
        console.log(number);
        evens.push(number);
    }
  }
  return evens;
}

const number = [12, 5, 6, 52,7];
// const evens = evenNumbersOnly(number)
// console.log('even numbers are', evens);



//** */

function sumOffNumbers(numbers){
    let sum = 0;
    for ( const number of numbers) {
        if(number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}

const sum = sumOffNumbers(number);
console.log('sum of the even number is',sum);