const selectionSortBtn = document.querySelector("#selection-sort");

// const selectionSort = () => {
//   let bars = document.querySelectorAll(".bar");
//   let arr = Array.from(bars).map(elem => elem.clientHeight);
//   let delay = 50;
//   let currentMin = 0;
//   let index = 0;

//   const selectionSortHelper = () => {
//     for (let i = 0; i < arr.length; i++) {
//       setTimeout(() => {
//         for (let j = index; j < arr.length; j++) {
//           if (arr[j] < arr[currentMin]) currentMin = j;
//         }

//         swap(arr, index, currentMin);
//         visualizeBars(arr, BAR_WIDTH);
//         index++;
//         currentMin = index;
//       }, i * delay);
//     }
//   };

//   return selectionSortHelper;
// };

const selectionSort = () => {
  let bars = document.querySelectorAll(".bar");
  let arr = Array.from(bars).map(elem => elem.clientHeight);
  let currentMin = 0;
  let index = 0;

  const selectionSortHelper = async () => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = index; j < arr.length; j++) {
        await _sleep();
        if (arr[j] < arr[currentMin]) currentMin = j;
      }

      await _sleep();
      swap(arr, index, currentMin);
      visualizeBars(arr, BAR_WIDTH);
      index++;
      currentMin = index;
    }
  };

  return selectionSortHelper;
};

selectionSortBtn.addEventListener("click", () => {
  let sort = selectionSort();
  sort();
});
