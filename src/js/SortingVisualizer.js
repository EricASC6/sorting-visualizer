// Sorting Visualizer Class
// Bubble Sort, Insertion Sort, Selection Sort, Heap Sort,
// Merge Sort, and Quick Sort

class SortingVisualizer {
  constructor(
    color,
    speed,
    finishingColor,
    barWidth,
    location,
    comparisonColor1,
    comparisonColor2
  ) {
    this.color = color;
    this.speed = speed;
    this.finishingColor = finishingColor;
    this.barWidth = barWidth;
    this.location = location;
    this.comparisonColor1 = comparisonColor1;
    this.comparisonColor2 = comparisonColor2;
    this.minHeight = 5;
    this.maxHeight = SortingVisualizer.calculateMaxHeight(this.location);
    this.visualizer = new SortingAlgorithm(this);
    this.sortingAlgorithms = {
      "bubble-sort": new BubbleSort(this),
      "insertion-sort": new InsertionSort(this),
      "selection-sort": new SelectionSort(this),
      "heap-sort": new HeapSort(this),
      "merge-sort": new MergeSort(this),
      "quick-sort": new QuickSort(this)
    };

    this.sortAlgo = null;
    this.isSorting = false;
    this.size = SortingVisualizer.calculateSize(this.location, this.barWidth);
    this.array = this.generateRandomArray();
    this.resized = false;
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
    let maxHeight = parseFloat(height) - 70;
    return maxHeight;
  }

  // Calculates the number of bars with regards to the dimensions of the location
  static calculateSize(location, barWidth) {
    let filter = /^[\d]{2,}/;
    let locationStyles = window.getComputedStyle(location);
    let locationWidth = locationStyles.getPropertyValue("width");
    let width = locationWidth.match(filter)[0];
    let size = Math.floor(width / (5 * barWidth));
    console.log("Size: " + size);
    return size;
  }

  // Adjusts the max-height and size property if the location's dimensions change
  resize() {
    const { location } = this;
    let newMaxHeight = SortingVisualizer.calculateMaxHeight(location);
    let newSize = SortingVisualizer.calculateSize(location, this.barWidth);
    this.maxHeight = newMaxHeight;
    this.size = newSize;
    this.array = this.generateRandomArray();
    this.resized = true;
  }

  /*
   Setter Methods
 */
  setSortingAlgo(algo) {
    const { sortingAlgorithms: algos } = this;
    if (Object.keys(algos).includes(algo)) this.sortAlgo = algo;
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
    Generate Random Array Method
  */

  // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  _randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  generateRandomArray() {
    const { size, minHeight: min, maxHeight: max } = this;
    let arr = [];
    for (let i = 0; i < size; i++) {
      let ran = this._randomIntFromInterval(min, max);
      arr.push(ran);
    }

    return arr;
  }

  /*
    Visualize Method
  */
  visualize() {
    this.visualizer._visualize(this.array, this.location);
  }

  /*
    Shuffle Algorithm  
  */
  shuffle() {
    let { array } = this;
    var currentIndex = array.length,
      randomIndex;

    window.requestAnimationFrame(() => {
      this._shuffleHelper(array, currentIndex);
    });
  }

  _shuffleHelper(array, currentIndex) {
    if (0 !== currentIndex) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      SortingAlgorithm.swap(array, currentIndex, randomIndex);
      this.array = array;
      this.visualize();
      requestAnimationFrame(() => {
        this._shuffleHelper(array, currentIndex);
      });
    }
  }

  /*
    Finisher Method  
  */
  finish() {
    const { finishingColor } = this;
    window.requestAnimationFrame(() => {
      this._finisherHelper(finishingColor, 0);
    });
  }

  _finisherHelper(color, indx) {
    if (indx < this.array.length) {
      this.location.children[indx].style.backgroundColor = color;
      window.requestAnimationFrame(() => {
        this._finisherHelper(color, ++indx);
      });
    }
  }

  /*
    Sort method
  */
  async sort(algorithm) {
    this.startSort();
    this.setSortingAlgo(algorithm);

    if (this.sortAlgo === null) {
      this.clearSortingAlgo();
      return;
    }

    await this.sortingAlgorithms[algorithm].sort(this.array, this.location);

    this.finish();
    this.clearSortingAlgo();
    this.endSort();
  }
}
