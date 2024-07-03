const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input[type='number']");
const box = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  box.innerHTML = "";
}

create.addEventListener("click", () => {
  const inputValue = parseInt(input.value);
  destroyBoxes();
  if (inputValue !== 0 && inputValue <= 100) {
    let size = 30;
    for (let i = 0; i < inputValue; i++) {
      box.insertAdjacentHTML(
        "beforeend",
        `<div class='item' style = "width: ${size}px; height: ${size}px; border: 1px solid #000; background-color: ${getRandomHexColor()}"></div>`
      );
      size += 10;
    }
  }
  input.value = "";
});

destroy.addEventListener("click", destroyBoxes);

box.style.display = "flex";
box.style.gap = "44px";
box.style.marginTop = "16px";
