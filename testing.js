// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str) {
  // let arr = str.split('-');
  // let newArr = arr.map(
  //   (element) => 
  //     element[0].toUpperCase() + element.slice(1));
  //   newArr.join('');
  //   let newArr2 = newArr.join('');

  return str.split('-')
    .map(
      (element, index) =>
        index == 0 ?
          element
          :
          element[0].toUpperCase() + element.slice(1)
    )
    .join('');
}

// console.log(camelize("-webkit-transition"));


function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b)
}


let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered.join(', ')); // 3,1 (відфільтровані значення)

console.log(arr.join(', ')); // 5,3,8,1 (не змінюється)


