const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input[type='number']");
const box = document.querySelector("#boxes");
const buttons = document.querySelector("#controls");

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
// ul styles
box.style.display = "flex";
box.style.flexWrap = "wrap";
box.style.gap = "44px";
box.style.marginTop = "16px";
// INPUT styles
input.style.width = "150px";
input.style.height = "40px";
input.style.fontFamily = "Montserrat";
input.style.fontWeight = "400";
input.style.fontSize = "16px";
input.style.lineHeight = "24px";
input.style.letterSpacing = "0.04em";
input.style.border = "1px solid #808080";
input.style.borderRadius = "8px";
input.style.padding = "8px 8px";
// DIV buttons styles
create.style.fontFamily = "Montserrat";
destroy.style.fontFamily = "Montserrat";
buttons.style.display = "flex";
buttons.style.gap = "16px";
// button styles CREATE
create.style.heigth = "40px";
create.style.width = "120px";
create.style.border = "none";
create.style.fontSize = "16px";
create.style.cursor = "pointer";
create.style.fontWeight = "500";
create.style.lineHeight = "24px";
create.style.letterSpacing = "4%";
create.style.backgroundColor = "#4E75FF";
create.style.color = "white";
create.style.padding = "8px 31px";
create.style.borderRadius = "8px";
// button styles DESTROY
destroy.style.heigth = "40px";
destroy.style.width = "120px";
destroy.style.border = "none";
destroy.style.fontSize = "16px";
destroy.style.cursor = "pointer";
destroy.style.fontWeight = "500";
destroy.style.lineHeight = "24px";
destroy.style.letterSpacing = "4%";
destroy.style.backgroundColor = "#FF4E4E";
destroy.style.color = "white";
destroy.style.padding = "8px 31px";
destroy.style.borderRadius = "8px";