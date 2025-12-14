const workspace = document.getElementById("workspace");

document.getElementById("rectangle").addEventListener("click", () => {
    const rect = document.createElement("div");
    rect.style.width = "100px";
    rect.style.height = "50px";
    rect.style.background = "blue";
    rect.style.position = "absolute";
    rect.style.top = "10px";
    rect.style.left = "10px";
    rect.style.cursor = "move";

    workspace.appendChild(rect);

    // Drag functionality
    let offsetX, offsetY, isDragging = false;

    rect.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - rect.offsetLeft;
        offsetY = e.clientY - rect.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        rect.style.left = e.clientX - offsetX + "px";
        rect.style.top = e.clientY - offsetY + "px";
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
});
