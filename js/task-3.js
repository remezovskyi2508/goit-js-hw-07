const input = document.querySelector("#name-input");
const h1Element = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const trimValue = event.currentTarget.value.trim();
  if (trimValue === "") {
    h1Element.textContent = "Anonymous";
  } else {
    h1Element.textContent = trimValue;
  }
});
