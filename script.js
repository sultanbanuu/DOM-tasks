// /////////////////////// 1 ////////////////////////

// // function userInfo(res, form) {
// //     form.addEventListener("submit", (e) => {
// //         e.preventDefault();
// //         res.innerHTML += `<p>${input.value}</p>`;
// //         // console.log(input.value);
// //     });
// //     return res.innerText;
// // }

// // const input = document.querySelector("input");
// // const form = document.querySelector('form');
// // const res = document.querySelector('#result');

// // console.log(userInfo(res, form));

// /////////////////////// 2 ////////////////////////

// // const minusBtn = document.querySelector('#minus-btn');
// // const counter = document.querySelector('#counter');

// // const plusBtn = document.querySelector('#plus-btn');

// // let startingPoint = 0;

// // minusBtn.addEventListener('click', () => {
// //     if(startingPoint > 0) {
// //         counter.innerText = --startingPoint;
// //     }
// // })

// // plusBtn.addEventListener('click', () => {
// //     if (startingPoint < 20) {
// //         counter.innerText = ++startingPoint;
// //     }
// // })

// /////////////////////// 3 ////////////////////////

// function toggleText(first, second) {
// const btnForText = document.querySelector("#textBtn");
//     btnForText.addEventListener("click", () => {
//         const interval = setInterval(() => {
//           if (first.style.display === "block") {
//             first.style.display = "none";
//             second.style.display = "block";
//             // text1.style.display = 'none';
//           } else {
//             second.style.display = "none";
//             first.style.display = "block";
//           }
//         }, 1000);
//         setTimeout(() => {
//           console.log("time's up");
//           clearInterval(interval);
//         }, 6000);
//       });
// }

// const text1 = document.querySelector("#text1");
// const text2 = document.querySelector("#text2");

// toggleText(text1, text2);

// /////////////////////// 4 ////////////////////////

// // const digitalClock = document.querySelector("#digitalClock");

// // refresh();
// // setInterval(() => {
// //   refresh();
// // }, 1000);

// // function refresh() {
// //   const date = new Date();
// //   const hrs = String(date.getHours()).padStart(2, "0");
// //   const min = String(date.getMinutes()).padStart(2, "0");
// //   const sec = String(date.getSeconds()).padStart(2, "0");

// //   digitalClock.innerText = hrs + ":" + min + ":" + sec;
// // }

// /////////////////////// 5 ////////////////////////

// const operand1 = document.querySelector("#operand1");
// const operand2 = document.querySelector("#operand2");
// const operator = document.querySelector("#operator");
// const result = document.querySelector("#calcRes");
// const equalityBtn = document.querySelector("#equalityBtn");

// equalityBtn.addEventListener("click", () => {
//   switch (operator.value) {
//     case "+":
//       result.value = +operand1.value + +operand2.value;
//       console.log(result.value);
//       break;

//     case "-":
//       result.value = operand1.value - operand2.value;

//       break;

//     case "*":
//       result.value = operand1.value * operand2.value;

//       break;

//     case "/":
//       result.value = operand1.value / operand2.value;
//       break;
//   }
// });

