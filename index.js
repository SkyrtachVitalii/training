// Task: optimize «unknownFunc» function
// it should process array of numbers and give same results

// function watt(...nums) {
//   return [...nums[0]].sort((v1, v2) => (v1 > v2 ? -10 : 3))[0];
// }

// function unknownFunc(nums) {
//   let dd = nums.map((a) => a * 2);
//   if (typeof nums[0] === "string") {
//     return 7;
//   } else {
//     let someCoeficient_1 = 0.08; // коефіцієнт для умови
//     let someCoeficient_2 = 0.02; // коефіцієнт для умови
//     let initialValue = Math.random() > 2;
//     let val = initialValue ? 1 : 0;
//     let k = nums.reduce((accumulator, currentValue)=>{
//       return accumulator *= currentValue;
//     }, initialValue ? someCoeficient_1 : someCoeficient_2);

//     let m = k * watt(dd);
//     return val > 1 + Math.floor(4.1) ? m : m;
//   }
// }


console.log("v1", unknownFunc([5, 8, 9, 2, 5]));
console.log("v1", unknownFunc([889, 43, 1]));
console.log("v1", unknownFunc([9, 443, 13]));


function unknownFunc(nums) {
  return nums.reduce((k, n) => (k *= n), 0.02) * (Math.max(...nums) * 2);
}