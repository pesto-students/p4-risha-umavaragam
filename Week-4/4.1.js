function getNumber(randomValue) {
    return new Promise((resolve, reject) => {
        if (randomValue%5 == 0) {
            resolve(randomValue)
        } else {
            reject(randomValue)
        }
    })
}
var p = getNumber(5)
p.then(x => console.log( "resolved"))
    .catch(y => console.log( "rejected"))



