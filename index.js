const generateBtnEl = document.querySelector(".btn-generate");
const boxesDivEl = document.querySelector(".boxes");
const formEl = document.querySelector(".form");

const APIUrl = "https://www.thecolorapi.com/scheme";

function fetchColorScheme(seedColor, mode = "monochrome", count = 6) {
  fetch(`${APIUrl}?hex=seedColor&mode`)
    .then((res) => res.json())
    .then((data) => generatePalette(data.colors));
}

function generatePalette(colors) {
  let colorsHtml = "";
  for (const color of colors) {
    colorsHtml += `
        <div class="box">
          <div class="color" style="background-color: ${color.hex.value}"></div>
          <p class="hex">${color.hex.value}</p>
        </div>
        `;
  }

  boxesDivEl.innerHTML = colorsHtml;
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
});
