// Sorting Visualizer Class
// Bubble Sort, Insertion Sort, Selection Sort, Heap Sort,
// Merge Sort, and Quick Sort

class SortingVisualizer {
  constructor(color, speed, finishingColor, location) {
    this.color = color;
    this.speed = speed;
    this.finishingColor = finishingColor;
    this.location = location;
    this.minHeight = 5;
    this.maxHeight = SortingVisualizer.calculateMaxHeight(this.location);
    this.sortingAlgorithms = [
      "bubble-sort",
      "insertion-sort",
      "selection-sort",
      "heap-sort",
      "merge-sort",
      "quick-sort"
    ];
    this.sortAlgo = null;
    this.isSorting = false;
    this.size = SortingVisualizer.calculateSize(this.location);
    this.array = [];
  }

  /*
    Dimensions Methods
  */
  // Calculates the max-height of the bars with regards to the dimensions of the location
  static calculateMaxHeight(location) {
    let filter = /^[\d]{2,}/;
    let locationStyles = window.getComputedStyle(location);
    let locationHeight = locationStyles.getPropertyValue("height");
    let height = locationHeight.match(filter)[0];
    let maxHeight = parseFloat(height) - 50;
    return maxHeight;
  }

  // Calculates the number of bars with regards to the dimensions of the location
  static calculateSize(location) {
    let filter = /^[\d]{2,}/;
    let locationStyles = window.getComputedStyle(location);
    let locationWidth = locationStyles.getPropertyValue("width");
    let width = locationWidth.match(filter)[0];
    let size = parseInt(width / 5);
    return size;
  }

  // Adjusts the max-height and size property if the location's dimensions change
  resize() {
    const { location } = this;
    let newMaxHeight = SortingVisualizer.calculateMaxHeight(location);
    let newSize = SortingVisualizer.calculateSize(location);
    this.maxHeight = newMaxHeight;
    this.size = newSize;
    return;
  }
  /*
    Dimensions Methods
  */

  /*
    Sleep Method
  */
  // Delays the execution of the algorithms so we can visualize it
  async _sleep() {
    return new Promise(resolve => setTimeout(resolve, this.speed));
  }
  /*
    Sleep Method
  */

  /*
   Setter Methods
 */
  setSortingAlgo(algo) {
    const { sortingAlgorithms: algos } = this;
    if (algos.includes(algo)) this.sortAlgo = algo;
    return;
  }

  clearSortingAlgo() {
    this.sortAlgo = null;
  }

  startSort() {
    this.isSorting = true;
  }

  endSort() {
    this.isSorting = false;
  }
  /*
   Setter Methods
 */
}
