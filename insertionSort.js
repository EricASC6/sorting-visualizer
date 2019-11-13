const insertionSortBtn = document.querySelector("#insertion-sort");

const insertionSort = () => {
  let bars = document.querySelectorAll(".bar");
  let arr = Array.from(bars).map(elem => elem.clientHeight);
  let delay = 0;
  for (let i = 1; i < arr.length; i++) {
    setTimeout(() => {
      for (let j = i; j > 0; j--) {
        setTimeout(() => {
          if (arr[j] < arr[j - 1]) {
            swap(arr, j, j - 1);
            visualizeBars(arr, BAR_WIDTH);
          }
        }, (delay += 2));
      }
    }, (delay += 2));
  }
};

insertionSortBtn.addEventListener("click", () => {
  insertionSort();
});
