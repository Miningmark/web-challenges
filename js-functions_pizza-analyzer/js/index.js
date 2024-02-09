console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');


pizzaInput1.addEventListener("input", () => {
  // write your code here
  let pizzaSize1 = Number(pizzaInput1.value);
  let pizzaSize2 = Number(pizzaInput2.value);
  updatePizzaDisplay(pizza1, pizzaSize1);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  let pizzaSize1 = Number(pizzaInput1.value);
  let pizzaSize2 = Number(pizzaInput2.value);
  updatePizzaDisplay(pizza2, pizzaSize2);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2){
  let area1 = Math.PI * (diameter1 / 2) * (diameter1 / 2);
  let area2 = Math.PI * (diameter2 / 2) * (diameter2 / 2);
  let gain = Math.round((area2 - area1) / area1 * 100);
  output.value = gain;
}

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize){
  pizzaElement.style.width= newSize / 24 * 100 + "px";
}

// Task 3
// define the function updateOutputColor here
function updateOutputColor(size1, size2){
  console.log(size1);
  console.log(size2);
  if(size1 > size2){
    outputSection.style.backgroundColor = "var(--red)";
  }else{
    outputSection.style.backgroundColor = "var(--green)";
  }
}
