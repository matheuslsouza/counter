const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const counter = document.getElementById("counter");
var count = 0;

const handleDecrement = () => {
  count--;
  counter.innerHTML = count;
};

const clean = () => {
  count = "";
  counter.innerHTML = 0;
};

const handleIncrement = () => {
  count++;
  counter.innerHTML = count;
};

increase.addEventListener("click", handleIncrement);
decrease.addEventListener("click", handleDecrement);
reset.addEventListener("click", clean);
