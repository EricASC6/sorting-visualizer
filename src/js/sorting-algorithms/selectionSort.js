class SelectionSort extends SortingAlgorithm {
  async sort(arr, location) {
    for (let i = 0; i < arr.length - 1; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        await this._sleep();
        if (arr[min] > arr[j]) min = j;
      }
      SortingAlgorithm.swap(arr, i, min);
      this.sortingVisualizerObject.array = arr;
      this._visualize(arr, location);
    }
  }
}
