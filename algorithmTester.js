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

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0; j--) {
//       if (arr[j] < arr[j - 1]) {
//         swap(arr, j, j - 1);
//       } else {
//         break;
//       }
//     }
//   }

//   return arr;
// }

// function selectionSort(arr) {
//   let currentMin = 0;
//   let index = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = index; j < arr.length; j++) {
//       if (arr[j] < arr[currentMin]) currentMin = j;
//     }

//     swap(arr, index, currentMin);
//     index++;
//     currentMin = index;
//   }

//   return arr;
// }

const merge = (arr, start, middle, end) => {
  console.log("Executing Merge");
  let mergedArr = [];
  let a = arr.slice(start, middle + 1);
  let b = arr.slice(middle + 1, end + 1);
  console.log(a, b);

  while (a.length > 0 && b.length > 0) {
    console.log(a[0], b[0]);
    let small = a[0] < b[0] ? a.shift() : b.shift();
    mergedArr.push(small);
  }

  console.log(a, b);
  arr.splice(start, end - start + 1, ...[...mergedArr, ...a, ...b]);
  return arr;
};

const mergeSort = (arr, start, end) => {
  let mid = Math.floor((start + end) / 2);
  console.log(`start: ${start}, end: ${end}`);
  console.log("mid: " + mid);

  if (start >= end) return;

  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);

  console.log(arr);
};

let arr = [78, 1000, 8, 9, 10, 4, 1, 77, 100, 5, 7, 1, 1, 5, 89, 34, 21, 65];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);

// let sortedArr = selectionSort(arr);
// console.log(sortedArr);
