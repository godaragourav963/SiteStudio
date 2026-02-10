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
  section.style.border = "1px dashed #aaa";
  section.style.padding = "10px";
  section.textContent = "Section";
  addToCanvas(section);
});

function addToCanvas(el) {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    selectElement(el);
  });
  canvas.appendChild(el);
}

function selectElement(el) {
  selectedElement = el;
  console.log("Selected:", el);
}
