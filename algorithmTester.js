function swap(arr, i, j) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

// const bSort = arr => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       let a = arr[j];
//       let b = arr[j + 1];

//       if (a > b) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }

//   return arr;
// };

// let arr = [7, 8, 1, 3, 4];
// let sortedArr = bSort(arr);
// console.log(sortedArr);

let arr = [8, 9, 10, 4, 1, 77, 100, 5, 7, 1, 1, 5, 89, 34, 21, 65];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      } else {
        break;
      }
    }
  }

  return arr;
}

let sortedArr = insertionSort(arr);
console.log(sortedArr);
