let array = document.getElementById("visualizer-array");
SortingVisualizer.calculateMaxHeight(array);
SortingVisualizer.calculateSize(array);

let sortVis = new SortingVisualizer("green", 10, "red", array);
console.log(sortVis);

window.addEventListener("resize", () => {
  sortVis.resize();
});
