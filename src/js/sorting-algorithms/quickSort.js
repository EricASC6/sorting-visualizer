const quickSortBtn = document.querySelector("#quick-sort");

const partition = async (arr, start, end) => {
  let pivot = arr[start];
  let i = start;
  let j = end;

  let partitionPromise = new Promise((resolve, reject) => {
    let partitionId = setInterval(partitionHelper, 10);
    // let partitionId = requestAnimationFrame(partitionHelper);
    function partitionHelper() {
      if (i <= j) {
        if (arr[i] > pivot && arr[j] < pivot) {
          swap(arr, i++, j--);
          visualizeBars(arr, BAR_WIDTH);
        }

        if (arr[i] <= pivot) i++;

        if (arr[j] >= pivot) j--;
        // requestAnimationFrame(partitionHelper);
      } else {
        clearInterval(partitionId);
        // cancelAnimationFrame(partitionId);
        swap(arr, start, j);
        visualizeBars(arr, BAR_WIDTH);
        resolve(j);
      }
    }
  });

  return partitionPromise;
};

const quickSort = async (arr, start = 0, end = arr.length - 1) => {
  if (start >= end) return;

  let part = await partition(arr, start, end);
  await quickSort(arr, start, part);
  await quickSort(arr, part + 1, end);
};

quickSortBtn.addEventListener("click", () => {
  let bars = document.querySelectorAll(".bar");
  let arr = Array.from(bars).map(elem => elem.clientHeight);

  quickSort(arr);
});
