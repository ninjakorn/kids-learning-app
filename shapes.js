import { playAudio } from './script.js'; 
import { showMainMenu } from './script.js';

const buttonColors = ["#FF4081", "#4CAF50", "#2196F3", "#FF9800", "#03A9F4"]; // Unique colors for shapes

const shapes = [
    { name: "triangle", svg: `<polygon points="50,10 90,90 10,90" fill="white"/>` },
    { name: "square", svg: `<rect x="15" y="15" width="70" height="70" fill="white"/>` },
    { name: "rectangle", svg: `<rect x="10" y="30" width="80" height="50" fill="white"/>` },
    { name: "sphere", svg: `<circle cx="50" cy="50" r="40" fill="white"/>` },
    { name: "cylinder", svg: `<ellipse cx="50" cy="30" rx="40" ry="20" fill="white"/>
                               <rect x="10" y="30" width="80" height="50" fill="white"/>` }
];

export function showShapesSection() {
    let content = `<h2 class='section-title'>Shapes</h2><div class='grid'>`;

    shapes.forEach((shape, index) => {
        const color = buttonColors[index % buttonColors.length];
        content += `<div class='card animated-button shape-card' 
                        style='background-color: ${color}; color: white;'
                        onclick='playAudio("${shape.name}")'>
                        <svg width="100" height="100" viewBox="0 0 100 100">
                            ${shape.svg}
                        </svg>
                        <p>${shape.name.charAt(0).toUpperCase() + shape.name.slice(1)}</p>
                    </div>`;
    });

    // ✅ Back button container
    content += `<div class='back-button-container'>
                    <button class='back-button animated-button' 
                        style='background: #FF5722; color: white;' 
                        onclick='showMainMenu()'>Back</button>
                </div>`;

    document.getElementById("content").innerHTML = content;
}
