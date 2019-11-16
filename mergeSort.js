const mergeSortBtn = document.querySelector("#merge-sort");

const merge = async (arr, start, middle, end) => {
  setTimeout(() => {
    console.log(`Executing Merge from ${start} to ${end}`);
    let mergedArr = [];
    let a = arr.slice(start, middle + 1);
    let b = arr.slice(middle + 1, end + 1);
    console.log(`a: ${a}, b: ${b}`);

    function mergeHelper() {
      while (a.length > 0 && b.length > 0) {
        setTimeout(() => {
          console.log(`1: ${a[0]}, ${b[0]}`);
          let small = a[0] < b[0] ? a.shift() : b.shift();
          mergedArr.push(small);
          arr.splice(start, mergedArr.length, ...mergedArr);
          visualizeBars(arr, BAR_WIDTH);
        }, 10);
      }
    }

    mergeHelper();

    console.log(`merged array: ${[...mergedArr, ...a, ...b]}`);
    arr.splice(start, end - start + 1, ...[...mergedArr, ...a, ...b]);
    visualizeBars(arr, BAR_WIDTH);

    // console.log(a, b);
  }, 500);
};

function pause(milliseconds) {
  var dt = new Date();
  while (new Date() - dt <= milliseconds) {
    /* Do nothing */
  }
}

let delay = 500;
const mergeSort = async () => {
  let bars = document.querySelectorAll(".bar");
  let arr = Array.from(bars).map(elem => elem.clientHeight);
  console.log(arr);

  async function mergeSortHelper(start, end) {
    let mid = Math.floor((start + end) / 2);
    console.log(`start: ${start}, end: ${end}`);
    console.log("mid: " + mid);

    if (start >= end) return;

    await mergeSortHelper(start, mid);
    await mergeSortHelper(mid + 1, end);
    merge(arr, start, mid, end);
  }

  mergeSortHelper(0, arr.length - 1);
};

mergeSortBtn.addEventListener("click", () => {
  mergeSort();

  let bars = document.querySelectorAll(".bar");
  let arr = Array.from(bars).map(elem => elem.clientHeight);

  // merge(arr, 0, Math.floor((arr.length - 1) / 2), arr.length - 1);
});
