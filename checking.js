const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

function check(arr) {
  const count = {};
  arr.forEach(element => !count[element] ? count[element] = 1 : count[element]++);
  return count;
}

// console.log(check(fruits));

function isHere(arr) {
  const count = [];
  arr.forEach(element => {
    count[element] = true
  })
  return Object.keys(count);
}

// console.log(isHere(fruits));


const students = [
  { name: 'alex', age: 20 },
  { name: 'mike', age: 24 },
  { name: 'masha', age: 20 },
  { name: 'stas', age: 18 },
];

function groupStudents(arr) {
  const studentsList = {};
  arr.forEach(student => !studentsList[student.age] ? studentsList[student.age] = [student] : studentsList[student.age].push(student));
  return studentsList;
}

// console.log(groupStudents(students));

const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
const sum = 10;

const findTwoNumbers = (numbersArr, totalSum) => {
  for (let i = 0; i < numbersArr.length; i++) {
    const numFirst = numbersArr[i];

    for (let j = i + 1; j < numbersArr.length; j++) {
      const numSecond = numbersArr[j];

      if (numFirst + numSecond === totalSum){
        return [numFirst, numSecond]
      } 
    }
  }
  return []
}
// console.log(findTwoNumbers(myNumbers, sum))


const friends = [
  { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
  { name: 'mike', pizzas: ['salami', 'margarita'] },
  { name: 'stas', pizzas: ['meat'] },
  { name: 'anna', pizzas: ['fish'] }
];

const getPizza = (arr) => {
  return arr.reduce((accumulator, current) => [...accumulator, ...current.pizzas], []);
}

// console.log(getPizza(friends))

const myStr = 'pizza';

const reverseString = (str) => {
  return str.split('').reverse().join('');
}

console.log(reverseString(myStr));