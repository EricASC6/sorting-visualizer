// SortingVisualizer Class

class SortingVisualizer {
  constructor(
    color, // color of the bars
    finishingColor, // color to indicate that sorting is complete
    speed, // speed of the sorting-visualizer
    size, // number of bars to be sorted
    location, // where to insert the sorting-visualizer obj
    minHeight, // min-height of the bar
    maxHeight, // max-height of the bar
    barWidth, // width of the bar
    visualizeBtn, // button to trigger the sorting algos
    sortingAlgosBtns, // list of sorting algos (html collection / node list)
    generateArrayBtn,
    shuffleBtn
  ) {
    this.color = color;
    this.finishingColor = finishingColor;
    this.speed = speed;
    this.size = size;
    this.location = location;
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
    this.barWidth = barWidth;
    this.visualizeBtn = visualizeBtn;
    this.sortingAlgosBtns = sortingAlgosBtns;
    this.generateArrayBtn = generateArrayBtn;
    this.shuffleBtn = shuffleBtn;
    this.array = [];
    this.isSorting = false;
    this.sortingAlgos = [
      "bubble-sort",
      "insertion-sort",
      "selection-sort",
      "heap-sort",
      "merge-sort",
      "quick-sort"
    ];
    this.sortAlgo = null;
  }

  // Private methods
  static async _sleep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, this.speed);
    });
  }

  // From StackOverFlow
  static _randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  _swap(arr, i, j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    return arr;
  }

  _generateRandomArray(low, high) {
    let array = [];
    for (let i = 0; i < this.size; i++) {
      let randomNum = SortingVisualizer._randomIntFromInterval(low, high);
      array.push(randomNum);
    }

    this.array = array;
    return array.sort((a, b) => a - b);
  }

  _clear() {
    this.array = [];
  }

  _changeSortAlgo(algo) {
    if (this.sortingAlgos.includes(algo)) this.sortAlgo = algo;
  }

  _clearSortAlgo() {
    this.sortAlgo = null;
  }

  _visualize() {
    let { array, color, barWidth } = this;
    this.location.innerHTML = "";
    array.forEach(height => {
      let bar = document.createElement("div");
      bar.className = "bar";
      bar.style.width = `${barWidth}px`;
      bar.style.height = `${height}px`;
      bar.style.backgroundColor = `${color}`;
      this.location.appendChild(bar);
    });
  }

  _newArray() {
    const { minHeight, maxHeight } = this;
    let array = this._generateRandomArray(minHeight, maxHeight);
    // console.log(array);
    this.array = array;
    this._visualize();
  }

  _generateNewArray() {
    const { generateArrayBtn } = this;
    window.addEventListener("load", () => {
      this._newArray();
    });
    generateArrayBtn.addEventListener("click", () => {
      this._newArray();
    });
  }

  // Shuffling method using the fisher-yates algorithm
  // src: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  async _shuffle() {
    const { array } = this;
    var currentIndex = this.array.length,
      // temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      await SortingVisualizer._sleep();
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      this.array = this._swap(array, currentIndex, randomIndex);
      // temporaryValue = array[currentIndex];
      // array[currentIndex] = array[randomIndex];
      // array[randomIndex] = temporaryValue;
      this._visualize();
    }
  }

  _initShuffle() {
    const { shuffleBtn } = this;
    shuffleBtn.addEventListener("click", async () => {
      await this._shuffle();
    });
  }

  // Main method that does the work
  init() {
    this._generateNewArray();
    this._initShuffle();
  }
}

let visLocation = document.getElementById("visualizer-array");
let visBtn = document.getElementById("visualize");
let sortingAlgoBtns = document.getElementById("sorting-algo-drop-down");
let generateArrayBtn = document.getElementById("new-array");
let shuffleBtn = document.getElementById("shuffle");
let sortingVis = new SortingVisualizer(
  "#46b5d1",
  "green",
  10,
  100,
  visLocation,
  5,
  450,
  2,
  visBtn,
  sortingAlgoBtns,
  generateArrayBtn,
  shuffleBtn
);

console.log(sortingVis);
sortingVis.init();
