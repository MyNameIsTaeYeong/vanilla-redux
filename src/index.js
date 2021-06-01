const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const updateTest = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count = count + 1;
  updateTest();
};
const handleMinus = () => {
  count = count - 1;
  updateTest();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
