const bubbleSortBtn = document.querySelector("#bubble-sort");

// Bubble Sort Algorithm
// const bubbleSort = () => {
//   let bars = document.querySelectorAll(".bar");
//   let arr = Array.from(bars).map(elem => elem.clientHeight);
//   let delay = 50;

//   for (let i = 0; i < arr.length - 1; i++) {
//     setTimeout(() => {
//       for (let j = 0; j < arr.length - 1 - i; j++) {
//         setTimeout(() => {
//           let a = arr[j];
//           let b = arr[j + 1];

//           if (a > b) {
//             swap(arr, j, j + 1);
//             visualizeBars(arr, BAR_WIDTH);
//           }

//           // console.log(i * delay);
//         }, i * delay);
//       }
//     }, i * delay);
//   }
// };

// const bubbleSort = async () => {
//   let bars = document.querySelectorAll(".bar");
//   let arr = Array.from(bars).map(elem => elem.clientHeight);
//   let delay = 50;

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       let a = arr[j];
//       let b = arr[j + 1];
//       await _sleep();

//       if (a > b) {
//         swap(arr, j, j + 1);
//         visualizeBars(arr, BAR_WIDTH);
//       }

//       // console.log(i * delay);
//     }
//   }
// };

// bubbleSortBtn.addEventListener("click", () => {
//   bubbleSort();
// });

class BubbleSort extends SortingAlgorithm {
  async sort(arr, location) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        await this._sleep();

        let a = arr[j];
        let b = arr[j + 1];

        if (a > b) SortingAlgorithm.swap(arr, j, j + 1);
        this.sortingVisualizerObject.array = arr;
        this._visualize(arr, location);
      }
    }
  }
}
