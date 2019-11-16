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
    arr.splice(start, mergedArr.length, ...mergedArr);
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

let arr = [
  58,
  77,
  78,
  21,
  27,
  35,
  57,
  5,
  103,
  90,
  69,
  55,
  80,
  61,
  75,
  6,
  49,
  86,
  47,
  31,
  79,
  60,
  87,
  48,
  92,
  67,
  64,
  43,
  99,
  76,
  68,
  53,
  39,
  71,
  16,
  93,
  45,
  26,
  50,
  34,
  73,
  10,
  18,
  100,
  63,
  13,
  98,
  36,
  59,
  22,
  88,
  65,
  56,
  95,
  85,
  9,
  42,
  81,
  89,
  40,
  7,
  74,
  66,
  15,
  12,
  19,
  29,
  84,
  11,
  24,
  62,
  51,
  37,
  102,
  72,
  46,
  17,
  33,
  25,
  38,
  41,
  20,
  94,
  44,
  97,
  54,
  32,
  28,
  82,
  96,
  23,
  91,
  70,
  83,
  104,
  30,
  8,
  14,
  52,
  101
];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);

// let sortedArr = selectionSort(arr);
// console.log(sortedArr);
