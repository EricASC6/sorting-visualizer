// DOM elements that I need
const array = document.getElementById("visualizer-array");
const shuffleBtn = document.getElementById("shuffle");
const newArrayBtn = document.getElementById("new-array");
const visualizeBtn = document.getElementById("visualize");
const compareBtn = document.getElementById("compare");

// Current Sorting Algorithm
let sortAlgo = null;

let sortVis = new SortingVisualizer(
  "#617be3",
  15,
  "#9aceff",
  4,
  array,
  "#94fc13",
  "#ff4949"
);
console.log(sortVis);

sortVis.visualize();

window.addEventListener("resize", () => {
  sortVis.resize();
  sortVis.visualize();
});

// Algorithms Btn
let algorithmsBtns = document.querySelectorAll("#sorting-algo-drop-down");
algorithmsBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    let title = document.getElementById("current-algo");
    let algo = e.target.id;
    sortAlgo = algo;
    title.innerHTML = `<h1 id="current-algo">${sortAlgo.toUpperCase()}</h1>`;
  });
});

// Shuffling Btn
shuffleBtn.addEventListener("click", () => {
  sortVis.shuffle();
});

// New Array Btn
newArrayBtn.addEventListener("click", () => {
  sortVis.array = sortVis.generateRandomArray();
  sortVis.visualize();
});

// Visualize Btn
visualizeBtn.addEventListener("click", async () => {
  if (sortAlgo) {
    await sortVis.sort(sortAlgo);
    sortAlgo = null;
  }
});
