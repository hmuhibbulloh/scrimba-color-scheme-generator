const generateBtnEl = document.querySelector(".btn-generate");
const boxesDivEl = document.querySelector(".boxes");
const formEl = document.querySelector(".form");

const APIUrl = "https://www.thecolorapi.com/scheme";

function fetchColorScheme(
  seedColor,
  schemeMode = "monochrome",
  colorsCount = 6,
) {
  fetch(`${APIUrl}?hex=${seedColor}&mode=${schemeMode}&count=${colorsCount}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      generatePalette(data.colors);
    });
}

function generatePalette(colors) {
  let colorsHtml = "";
  for (const color of colors) {
    colorsHtml += `
        <div class="box">
          <div class="color" data-hex-value="${color.hex.clean}" style="background-color: ${color.hex.value}"></div>
          <p class="hex">${color.hex.value}</p>
        </div>
        `;
  }

  boxesDivEl.innerHTML = colorsHtml;
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(formEl);
  const seedColor = formData.get("seed-color").slice(1);
  console.log(seedColor);
  const scheme = formData.get("color-scheme");
  fetchColorScheme("ed333b", scheme);
});
