function getNumber(randomValue) {
    return new Promise((resolve, reject) => {
        if (randomValue % 5 == 0) {
            resolve(randomValue)
        } else {
            reject(randomValue)
        }
    })
}
var p = getNumber(5)
p.then(x => console.log("resolved"))
    .catch(y => console.log("rejected"))
//======================================USING CALL BACKS=========================================================
// function getNumber(value) {
//     if (value == 0) {
//         return null;
//     } else if (value % 5 == 0) {
//         return true
//     } else {
//         return false;
//     }

// }

// function displayResult(displayVal) {
//     if (displayVal == null) {
//         return "fullfilled";
//     } else if (displayVal) {
//         return "resolved";
//     } else {
//         return "rejected";
//     }
// }

// let result = getNumber(5);
// displayResult(result);

function divisibleByFive(num){
    console.log("Number " + num + " is divisible!");
}
function notDivisibleByFive(num){
    console.log("Number " + num + " is notdivisible!");   
}
function getNumber(num, notDivisibleCallbackFunction, divisibleCallbackFunction){
    console.log("Processing number!");
    if(num % 5 == 0){
        divisibleCallbackFunction(num);
    } else {
        notDivisibleCallbackFunction(num);
    }
}

getNumber(51, notDivisibleByFive, divisibleByFive)


