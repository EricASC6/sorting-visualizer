class BubbleSort extends SortingAlgorithm {
  async sort(arr, location) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        await this._sleep();

        let a = arr[j];
        let b = arr[j + 1];
        Comparison.compare(
          j,
          j + 1,
          this.comparisonColor1,
          this.comparisonColor2,
          location
        );

        await this._sleep();

        if (a > b) SortingAlgorithm.swap(arr, j, j + 1);
        this.sortingVisualizerObject.array = arr;
        this._visualize(arr, location);
      }
    }
  }
}
