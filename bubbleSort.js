const bubbleSortBtn = document.querySelector("#bubble-sort");

// Bubble Sort Algorithm
const bubbleSort = () => {
  let bars = document.querySelectorAll(".bar");
  let arr = Array.from(bars).map(elem => elem.clientHeight);
  let delay = 50;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      setTimeout(() => {
        let a = arr[j];
        let b = arr[j + 1];

        if (a > b) {
          swap(arr, j, j + 1);
          visualizeBars(arr, BAR_WIDTH);
        }

        // console.log(i * delay);
      }, i * delay);
    }
  }
};

bubbleSortBtn.addEventListener("click", () => {
  bubbleSort();
});
