function MergeSort(s, e) {
  if (s < e) {
    let m = Math.floor((e + s)/2);
    MergeSort(s, m);
    MergeSort(m+1, e);
    MergeHelper(s, m, e);
  }
}

function MergeHelper(s, m, e) {

  let s1 = m - s + 1;
  let s2 = e - m;
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < s1; i++) {
    arr1.push(heights[s + i]);
  }
  for (let i = 0; i < s2; i++) {
    arr2.push(heights[m + 1 + i]);
  }
  let i = 0;
  let j = 0;
  let k = s;
  while (i < s1 && j < s2) {
    if (arr1[i] < arr2[j]) {
      heights[k] = arr1[i];
      i++;
    } else {
      heights[k] = arr2[j];
      j++;
    }
    pushHeightsToStack();
    k++;
  }
  while (i < s1) {
    heights[k] = arr1[i];
    pushHeightsToStack();
    i++;
    k++;
  }

  while (j < s2) {
    heights[k] = arr2[j];
    pushHeightsToStack();
    j++;
    k++;
  }

}
