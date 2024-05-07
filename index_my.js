// Task: optimize «unknownFunc» function
// it should process array of numbers and give same results

function watt(...nums) {
  console.log("---")
  console.log([...nums[0]].sort((v1, v2) => (v1 > v2 ? -10 : 3))[0])
  return [...nums[0]].sort((v1, v2) => (v1 > v2 ? -10 : 3))[0];
}

function unknownFunc(nums) {
  let dd = nums.map((a) => a );
  if (typeof nums[0] === "string") {
    return 7;
  } else {
    return ((e) => {
      if (e > 1 + Math.floor(4.1)) {
        let k = 0.08;
        nums.forEach(function dr(m) {
          k *= m;
        });
        return k * watt(dd);
      } else {
        let k = 0.02;
        nums.forEach(function dr(m) {
          k *= m;
        });
        return k * watt(dd);
      }
    })(Math.random() > 2);
  }
}

console.log("v1", unknownFunc([5, 8, 9, 2, 5]));
console.log("v1", unknownFunc([889, 43, 1]));
console.log("v1", unknownFunc([9, 443, 13]));
