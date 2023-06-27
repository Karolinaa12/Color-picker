let colorInput = document.querySelector("#color");
let hexInput = document.querySelector("#hex");
let rgbInput = document.querySelector("#rgb");
let header = document.querySelector("h1");
let nameInput = document.querySelector("#colorName");

colorInput.addEventListener("input", () => {
  let color = colorInput.value;
  hexInput.value = color.toUpperCase();
  header.style.color = color;

  const hexColor = hexInput.value;
  const rgbColor = hexToRgb(hexColor);

  const colorName = getColorName(hexColor);
  nameInput.value = colorName;
  console.log(colorName);

  //console.log(hexColor.toUpperCase());
  console.log(rgbColor);
  rgbInput.value = rgbColor;
});

function hexToRgb(hex) {
  hex = hex.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `${r}, ${g}, ${b}`;
}

const colorMap = {
  "#FFFF00": "Yellow",
  "#CD5C5C": "IndianRed",
  "#F08080": "LightCoral",
  "#FA8072": "Salmon",
};

function getColorName(hex) {
  return colorMap[hex] || `Unknown`;
}

//const hexColor = `#CD5C5C`;
