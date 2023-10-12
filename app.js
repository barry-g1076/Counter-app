"use strict";
let count = 0;
const add = document.getElementById("increment");
const sub = document.getElementById("decrement");
const countHeader = document.getElementById("count");

add.addEventListener("click", () => {
  count += 1;
  countHeader.innerText = count;
});

sub.addEventListener("click", () => {
  count--;
  countHeader.innerText = count;
});
