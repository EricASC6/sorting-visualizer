const mergeSortBtn = document.querySelector("#merge-sort");

const merge = (arr, start, middle, end) => {
  console.log("Executing Merge");
  let mergedArr = [];
  let a = arr.slice(start, middle + 1);
  let b = arr.slice(middle + 1, end + 1);
  console.log(a, b);

  let delay = 5;

  let mergeId = requestAnimationFrame(mergeHelper);
  function mergeHelper() {
    if (a.length > 0 && b.length > 0) {
      console.log(a[0], b[0]);
      let small = a[0] < b[0] ? a.shift() : b.shift();
      mergedArr.push(small);
      arr.splice(start, mergedArr.length, ...mergedArr);
      visualizeBars(arr, BAR_WIDTH);
      requestAnimationFrame(mergeHelper);
    } else {
      cancelAnimationFrame(mergeId);
    }
  }

  mergeHelper();

  console.log(a, b);
  arr.splice(start, end - start + 1, ...[...mergedArr, ...a, ...b]);
  visualizeBars(arr, BAR_WIDTH);
};

mergeSortBtn.addEventListener("click", () => {
  let bars = document.querySelectorAll(".bar");
  let arr = Array.from(bars).map(elem => elem.clientHeight);
  let delay = 0;

  merge(arr, 0, Math.floor((arr.length - 1) / 2), arr.length - 1);
});
