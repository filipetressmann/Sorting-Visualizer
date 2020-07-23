function InsertionSort() {

  for (let i = 1; i < heights.length; i++) {
    for (let j = i; j > 0 && heights[j] < heights[j-1]; j--) {
        let temp = heights[j - 1];
        heights[j - 1] = heights[j];
        heights[j] = temp;
        pushHeightsToStack();
    }
  }

}
