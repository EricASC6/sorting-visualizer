// SortingVisualizer Class

class SortingVisualizer {
  constructor(
    color,
    finishingColor,
    speed,
    size,
    location,
    minHeight,
    maxHeight,
    barWidth
  ) {
    this.color = color;
    this.finishColor = finishingColor;
    this.speed = speed;
    this.size = size;
    this.location = location;
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
    this.barWidth = barWidth;
    this.array = [];
    this.isSorting = false;
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

  _generateRandomArray(low, high) {
    let array = [];
    for (let i = 0; i < this.size; i++) {
      let randomNum = SortingVisualizer._randomIntFromInterval(low, high);
      array.push(randomNum);
    }

    this.array = array;
    return array;
  }

  _clear() {
    this.array = [];
  }

  _visualize() {
    const { location, array, color, width } = this;
    if (location.innerHTML === "") {
      array.forEach(height => {
        let bar = document.createElement("div");
        bar.className = "bar";
        bar.style.backgroundColor = color;
        bar.style.height = `${height}px`;
        bar.style.width = `${width}px`;
        location.appendChild(bar);
      });
    } else {
      let bars = document.querySelectorAll(".bar");
      bars.forEach((bar, i) => {
        bar.style.height = `${array[i]}px`;
      });
    }
  }
}
