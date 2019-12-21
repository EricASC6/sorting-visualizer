class HeapSort extends SortingAlgorithm {
  async _siftDown(data, node, indx, end, location, sorted) {
    let l = indx * 2 + 1 <= end ? indx * 2 + 1 : -1;
    let r = indx * 2 + 2 <= end ? indx * 2 + 2 : -1;

    let largest = data[l] > data[r] || r === -1 ? l : r;

    if (data[largest] > node) {
      await this._sleep();

      Comparison.compare(
        indx,
        largest,
        this.comparisonColor1,
        this.comparisonColor2,
        location
      );

      await this._sleep();
      SortingAlgorithm.swap(data, indx, largest);
      indx = largest;
      this._visualize(data, location);
      this.sortingVisualizerObject.array = [...data, ...sorted];
      await this._siftDown(data, node, indx, end, location, sorted);
    }
  }

  async _heapify(data, location, sorted, end = data.length - 1) {
    let size = end;
    let parent = Math.floor((size - 1) / 2);
    for (let i = parent; i >= 0; i--) {
      await this._siftDown(data, data[i], i, size, location, sorted);
    }
  }

  async sort(arr, location) {
    let size = arr.length;
    let sorted = [];
    for (let i = 0; i < size; i++) {
      await this._heapify(arr, location, sorted);
      sorted.unshift(arr.shift());
      this._visualize([...arr, ...sorted], location);
      this.sortingVisualizerObject.array = [...arr, ...sorted];
    }
  }
}
