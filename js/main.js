/*jshint esversion: 6*/

let canvas = document.querySelector("canvas");
let context =  canvas.getContext("2d");
let timetext = document.querySelector(".time");
let heights;
let stack;
let algorithm;
let color = '#000';
let first = true;
let start;
let i = 0;

function setFirstTime() {
  first = false;
}

function init() {
  stack = [];
  initializeArray();
  pushHeightsToStack();
  Draw();
}
init();

function Run() {
  stack = [];
  start = undefined;
  i = 0;
  if (!first) {
    initializeArray();
  } else {
    first = false;
  }
  algorithm = document.querySelector("select").value;
  Sort();
}

function Sort() {
  switch(algorithm) {
    case "Merge Sort":
      MergeSort(0, heights.length - 1);
    break;
    case "Quick Sort":
      QuickSort(0, heights.length - 1);
    break;
    case "Insertion Sort":
      InsertionSort();
    break;
    case "Radix Sort":
      RadixSort();
    break;
  }
  Draw();
}

function Draw() {
  context.fillStyle = "#343a40"
  requestAnimationFrame(drawStackEntry);

}

function drawStackEntry(timestamp) {
  if (i >= stack.length) return;
  if (!start) {
    start = timestamp;
  }
  let elapsed = ((timestamp - start)/1000).toFixed(2);
  context.clearRect(0, 0, canvas.width, canvas.height);
  let width = (canvas.width/heights.length)*0.5;
  if (!first) timetext.innerText = "Time taken: " + elapsed;
  for (let j = 0; j < stack[i].length; j++) {
     context.fillRect(width*j*2, canvas.height, width, -stack[i][j]);
  }

  if (i < stack.length) {
   i++;
   requestAnimationFrame(drawStackEntry);
  }

}
function initializeArray() {
  heights = [];
  let size = document.querySelector("input[name='quantity'").value;
  for (let i = 0; i < size; i++) {
    heights.push(Math.ceil(Math.random()*canvas.height));
  }
}

function pushHeightsToStack() {
  let copy = [...heights];
  stack.push(copy);
}
