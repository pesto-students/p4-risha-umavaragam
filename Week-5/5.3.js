// Write a function called hasDuplicate 
// which accepts an array and returns true or false 
// if that array contains a duplicate

function hasDuplicate(arr){
    return console.log(new Set(arr).size!==arr.length)
}

hasDuplicate([1,5,4,1])// true