


// /** types:01 */
// function evenSizedString(str) {
//     const size = str.length;
//     console.log(str, size);    

// }

// evenSizedString('mahmod')
// evenSizedString('sifat')

// /** types:02 */
// function evenSizedString(str) {
//     const size = str.length;
//     console.log(str, size);
//     if(size % 2===0){
//         console.log('even size');       
//     }
//     else{
//         console.log('odd size');       
//     }
// }
// evenSizedString('mahmod')
// evenSizedString('sifat')


/** types:03 */
function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);
    if(size % 2===0){
        console.log('even size');
        return true
    }
    else{
        console.log('odd size');
        return false
    }

}

// evenSizedString('mahmod');
// evenSizedString('sifat');

//*

function doubleOrTriple(number, doDouble) {
    if (doDouble === true) {
        const result = number * 2;
        return result;
    } 
    else{
        const result = number *3;
        return result;
    }
}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));


function numberOffElements(numbers){
    const len = numbers.length;
    return len;
}

const sum = numberOffElements([12, 25, 65, 582, 45, 69]);
console.log(sum);