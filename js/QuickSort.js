
function QuickSort(s, e) {

  if (s < e) {
    let pi = quickSortPartition(s, e);
    QuickSort(s, pi - 1);
    QuickSort(pi + 1, e);
  }
}

function quickSortPartition(lo, hi) {

   let pivot = heights[hi];
   let i = lo - 1;

   for (let j = lo; j <= hi; j++) {
     if (heights[j] <= pivot) {
       i++;
       let temp = heights[j];
       heights[j] = heights[i];
       heights[i] = temp;
       pushHeightsToStack();
     }
   }

   return (i);
}
