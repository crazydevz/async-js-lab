// console.log("task1");
// setTimeout(() => {
//   console.log("task2");
// }, 1000);
// console.log("task3");

// function print(val, cb) {
//   console.log(`!!${val}!!`);
//   cb(val);
// }

// function myFunct(cb) {
//   console.log("Some actions");
//   const x = 2 * 7;
//   cb(x);
// }

// myFunct(print);

//

// function myPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("task2");
//     }, 1000);
//   });
// }

// console.log("task1");
// myPromise().then((val) => console.log(val));
// console.log("task3");

//
async function myPromise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise 1"), 1000);
  });
}
async function myPromise2(val) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(`${val} is completed, waiting for promise 2`),
      1000
    );
  });
}

async function callMyFuncts() {
  const task1 = await myPromise1();
  const task2 = await myPromise2(task1);
  console.log(task1, "\n" + task2);
  return task2;
}

callMyFuncts().then((val) => console.log(val));
