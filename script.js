const propertiesBox = document.getElementById("properties");
const noSelection = document.getElementById("no-selection");

const textInput = document.getElementById("prop-text");
const fontSizeInput = document.getElementById("prop-font-size");
const colorInput = document.getElementById("prop-color");
const paddingInput = document.getElementById("prop-padding");

const canvas = document.getElementById("canvas");

let selectedElement = null;

document.getElementById("add-header").addEventListener("click", () => {
  const h = document.createElement("h1");
  h.textContent = "Header";
  addToCanvas(h);
});

document.getElementById("add-text").addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "Text";
  addToCanvas(p);
});

document.getElementById("add-section").addEventListener("click", () => {
  const section = document.createElement("div");
  section.className = "section";
  section.style.border = "1px dashed #aaa";
  section.style.padding = "20px";
  section.style.minHeight = "50px";

  addToCanvas(section);
});


function addToCanvas(el) {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    selectElement(el);
  });

  if (selectedElement && selectedElement.classList.contains("section")) {
    selectedElement.appendChild(el);
  } else {
    canvas.appendChild(el);
  }
}


function selectElement(el) {
  if (selectedElement) {
    selectedElement.classList.remove("selected");
  }

  selectedElement = el;
  selectedElement.classList.add("selected");

  noSelection.style.display = "none";
  propertiesBox.style.display = "block";

  // Fill inputs from element
  textInput.value = el.textContent || "";
  fontSizeInput.value = parseInt(getComputedStyle(el).fontSize) || "";
  colorInput.value = rgbToHex(getComputedStyle(el).color);
  paddingInput.value = parseInt(getComputedStyle(el).padding) || "";
}


canvas.addEventListener("click", () => {
  if (selectedElement) {
    selectedElement.classList.remove("selected");
    selectedElement = null;

    propertiesBox.style.display = "none";
    noSelection.style.display = "block";
  }
});


textInput.addEventListener("input", () => {
  if (selectedElement) {
    selectedElement.textContent = textInput.value;
  }
});

fontSizeInput.addEventListener("input", () => {
  if (selectedElement) {
    selectedElement.style.fontSize = fontSizeInput.value + "px";
  }
});

colorInput.addEventListener("input", () => {
  if (selectedElement) {
    selectedElement.style.color = colorInput.value;
  }
});

paddingInput.addEventListener("input", () => {
  if (selectedElement) {
    selectedElement.style.padding = paddingInput.value + "px";
  }
});



function rgbToHex(rgb) {
  const result = rgb.match(/\d+/g);
  if (!result) return "#000000";

  return (
    "#" +
    result
      .map(x => parseInt(x).toString(16).padStart(2, "0"))
      .join("")
  );
}
