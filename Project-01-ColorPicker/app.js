const colors = ["red", "green", "blue", "rgba(133,122,200)", "#f115025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const rendomNUmber = getRendomNumber();
  //   console.log(rendomNUmber);
  document.body.style.backgroundColor = colors[rendomNUmber];
  color.textContent = colors[rendomNUmber];
});

function getRendomNumber() {
  return Math.floor(Math.random() * colors.length);
}
