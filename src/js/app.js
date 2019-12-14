let array = document.getElementById("visualizer-array");
const shuffleBtn = document.getElementById("shuffle");

let sortVis = new SortingVisualizer("green", 1, "red", 3, array);
console.log(sortVis);

sortVis.visualize();
// sortVis.selectionSort();

// window.addEventListener("resize", () => {
//   sortVis.resize();
//   sortVis.visualize();
// });

let algorithmsBtns = document.querySelectorAll("#sorting-algo-drop-down");
algorithmsBtns.forEach(btn => {
  btn.addEventListener("click", async e => {
    let algo = e.target.id;
    await sortVis.sort(algo);
  });
});

shuffleBtn.addEventListener("click", () => {
  sortVis.shuffle();
});
