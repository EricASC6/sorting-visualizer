// Parent Class for the Sorting Algorithms

class SortingAlgorithm {
  constructor(sortingVisualizerObject) {
    const { color, speed, barWidth, location } = sortingVisualizerObject;
    this.sortingVisualizerObject = sortingVisualizerObject;
    this.color = color;
    this.speed = speed;
    this.barWidth = barWidth;
    this.location = location;
  }

  static swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  async _sleep() {
    return new Promise(resolve => setTimeout(resolve, this.speed));
  }

  _visualize(array, location) {
    if (location.innerHTML === "") {
      array.forEach(height => {
        let bar = document.createElement("div");
        bar.className = "bar";
        bar.style.width = `${this.barWidth}px`;
        bar.style.height = `${height}px`;
        bar.style.backgroundColor = this.color;
        location.appendChild(bar);
      });
    } else {
      Array.from(location.children).forEach((bar, i) => {
        bar.style.height = `${array[i]}px`;
        bar.style.backgroundColor = this.color;
      });
    }
  }

  _comparison(col1, col2, indx1, indx2) {}
}
