export function showDrawingBoard() {
    let content = `
        <h2 class='section-title'>Drawing Board</h2>
        <div class="controls">
            <label>Brush Size:</label>
            <input type="range" id="brushSize" min="2" max="20" value="5">
            
            <label>Color:</label>
            <input type="color" id="colorPicker" value="#000000">

            <button class="animated-button clear-button" onclick="clearCanvas()">Clear</button>
        </div>
        <div class="drawing-container">
            <canvas id="drawingCanvas"></canvas>
        </div>
        <div class='back-button-container'>
            <button class='back-button animated-button' 
            style='background: #FF5722; color: white;' 
            onclick='showMainMenu()'>Back</button>
        </div>
    `;

    document.getElementById("content").innerHTML = content;
    setupCanvas();
}

function setupCanvas() {
    const canvas = document.getElementById("drawingCanvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth; // ✅ Expands to full width
        canvas.height = window.innerHeight * 0.7; // ✅ Controls vertical height
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let painting = false;
    let brushSize = document.getElementById("brushSize").value;
    let brushColor = document.getElementById("colorPicker").value;

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function endPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;

        const rect = canvas.getBoundingClientRect();
        ctx.lineWidth = brushSize;
        ctx.lineCap = "round";
        ctx.strokeStyle = brushColor;

        ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);

    canvas.addEventListener("touchstart", (e) => startPosition(e.touches[0]));
    canvas.addEventListener("touchend", endPosition);
    canvas.addEventListener("touchmove", (e) => draw(e.touches[0]));

    document.getElementById("brushSize").addEventListener("input", (e) => {
        brushSize = e.target.value;
    });

    document.getElementById("colorPicker").addEventListener("input", (e) => {
        brushColor = e.target.value;
    });

    window.clearCanvas = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
}
