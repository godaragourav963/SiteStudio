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
  // Remove selection from previous
  if (selectedElement) {
    selectedElement.classList.remove("selected");
  }

  selectedElement = el;
  selectedElement.classList.add("selected");

  console.log("Selected:", el.tagName);
}

canvas.addEventListener("click", () => {
  if (selectedElement) {
    selectedElement.classList.remove("selected");
    selectedElement = null;
  }
});
