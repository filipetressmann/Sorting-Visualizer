/*jshint esversion: 6*/
function RadixSort() {
   let max = GetMax();
   let size = heights.length;
   for (let exp = 1; Math.floor(max/exp) > 0; exp *= 10) {
     let output = [];
     let count = [];
     let i;
     for (i = 0; i < 10; i++) {
       count.push(0);
     }
     for (i = 0; i <size; i++) {
        count[Math.floor((heights[i]/exp))%10]++;
     }

     for (i = 1; i < 10; i++) {
       count[i] += count[i - 1];
     }

     for (i = size - 1; i >= 0; i--) {
       let j = Math.floor((heights[i]/exp))%10;
       output[count[j] - 1] = heights[i];
       count[j]--;
     }

     for (i = 0; i < size; i++) {
       heights[i] = output[i];
       pushHeightsToStack();
     }
   }
}

function GetMax() {
  let max = -1;
  for (let i = 0; i < heights.length; i++) {
    if (max < heights[i]) {
      max = heights[i];
    }
  }

  return max;
}
