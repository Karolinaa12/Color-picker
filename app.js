let colorInput = document.querySelector("#color");
let hexInput = document.querySelector("#hex");
let header = document.querySelector("h1");

colorInput.addEventListener("input", () => {
  let color = colorInput.value;
  hexInput.value = color;
  header.style.color = color;
});
