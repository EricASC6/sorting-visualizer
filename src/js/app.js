let array = document.getElementById("visualizer-array");

let sortVis = new SortingVisualizer("green", 5, "red", 2, array);
console.log(sortVis);

sortVis.visualize();
sortVis.selectionSort();

window.addEventListener("resize", () => {
  sortVis.resize();
  sortVis.visualize();
});
