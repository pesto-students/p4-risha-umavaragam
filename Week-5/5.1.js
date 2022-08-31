// =========================using async/await=================
async function getNumber(randomValue) {
  await new Promise((resolve, reject) => {
    if (randomValue % 5 == 0) {
      resolve(randomValue)
    } else {
      reject(randomValue)
    }
  })
}
let firstResolved = getNumber(50)
firstResolved.then(x => console.log("async/await resolved"))
  .catch(y => console.log("async/await rejected"))

let secondResolved = getNumber(20)
secondResolved.then(x => console.log("async/await resolved"))
  .catch(y => console.log("async/await rejected"))

let thirdResolve = getNumber(31)
thirdResolve.then(x => console.log("async/await resolved"))
  .catch(y => console.log("async/await rejected"))

// // --------------------------------genearator--------------------

function getGeneratorNumber(randomValue) {
  return new Promise((resolve, reject) => {
    if (randomValue % 5 == 0) {
      resolve(randomValue)
    } else {
      reject(randomValue)
    }
  })
}

async function* generateNumber() {
  yield getGeneratorNumber(50);
  yield getGeneratorNumber(20);
  yield getGeneratorNumber(31);
}

async function main() {
  for await (const value of generateNumber()) {
    console.log("genearator resolved");
  }
}

main().catch((e) => console.error("genearator rejected"));


