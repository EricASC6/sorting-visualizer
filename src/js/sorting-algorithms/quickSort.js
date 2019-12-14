// const quickSortBtn = document.querySelector("#quick-sort");

// const partition = async (arr, start, end) => {
//   let pivot = arr[start];
//   let i = start;
//   let j = end;

//   let partitionPromise = new Promise((resolve, reject) => {
//     let partitionId = setInterval(partitionHelper, 10);
//     // let partitionId = requestAnimationFrame(partitionHelper);
//     function partitionHelper() {
//       if (i <= j) {
//         if (arr[i] > pivot && arr[j] < pivot) {
//           swap(arr, i++, j--);
//           visualizeBars(arr, BAR_WIDTH);
//         }

//         if (arr[i] <= pivot) i++;

//         if (arr[j] >= pivot) j--;
//         // requestAnimationFrame(partitionHelper);
//       } else {
//         clearInterval(partitionId);
//         // cancelAnimationFrame(partitionId);
//         swap(arr, start, j);
//         visualizeBars(arr, BAR_WIDTH);
//         resolve(j);
//       }
//     }
//   });

//   return partitionPromise;
// };

// const quickSort = async (arr, start = 0, end = arr.length - 1) => {
//   if (start >= end) return;

//   let part = await partition(arr, start, end);
//   await quickSort(arr, start, part);
//   await quickSort(arr, part + 1, end);
// };

// quickSortBtn.addEventListener("click", () => {
//   let bars = document.querySelectorAll(".bar");
//   let arr = Array.from(bars).map(elem => elem.clientHeight);

//   quickSort(arr);
// });

class QuickSort extends SortingAlgorithm {
  async _partition(arr, location, start, end) {
    let pivot = start;
    start++;

    let partitionPromise = new Promise(async resolve => {
      while (start <= end) {
        await this._sleep();
        if (arr[start] > arr[pivot] && arr[end] < arr[pivot]) {
          SortingAlgorithm.swap(arr, start, end);
          this.sortingVisualizerObject.array = arr;
          this._visualize(arr, location);
          continue;
        }

        if (arr[start] <= arr[pivot]) start++;
        if (arr[end] >= arr[pivot]) end--;
      }

      SortingAlgorithm.swap(arr, pivot, end);
      this._visualize(arr, location);
      this.sortingVisualizerObject.array = arr;
      resolve(end);
    });

    return partitionPromise;
  }

  async sort(arr, location, start = 0, end = arr.length - 1) {
    if (start >= end) return;

    let mid = await this._partition(arr, location, start, end);
    await this.sort(arr, location, start, mid);
    await this.sort(arr, location, mid + 1, end);
  }
}
