const mergeSortBtn = document.querySelector("#merge-sort");

const merge = async (arr, start, middle, end) => {
  console.log(`Executing Merge from ${start} to ${end}`);
  let mergedArr = [];
  let a = arr.slice(start, middle + 1);
  let b = arr.slice(middle + 1, end + 1);
  console.log(`a: ${a}, b: ${b}`);

  let mergePromise = new Promise((resolve, reject) => {
    let id = setInterval(merging, 10);
    function merging() {
      if (a.length > 0 && b.length > 0) {
        console.log(`1: ${a[0]}, ${b[0]}`);
        let small = a[0] < b[0] ? a.shift() : b.shift();
        mergedArr.push(small);
        arr.splice(start, mergedArr.length, ...mergedArr);
        visualizeBars(arr, BAR_WIDTH);
        // requestAnimationFrame(merging);
      } else {
        console.log(`merged array: ${[...mergedArr, ...a, ...b]}`);
        arr.splice(start, end - start + 1, ...[...mergedArr, ...a, ...b]);
        visualizeBars(arr, BAR_WIDTH);
        resolve(mergedArr);
        clearInterval(id);
      }
    }
  });

  return mergePromise;
};

const mergeSort = () => {
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
    await merge(arr, start, mid, end);
    return;
  }

  mergeSortHelper(0, arr.length - 1);
};

mergeSortBtn.addEventListener("click", () => {
  mergeSort();
});
