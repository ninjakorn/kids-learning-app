import { buttonColors } from './script.js';

export function showColorsSection() {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "black"];
    let content = `<h2 class='section-title'>Colors</h2><div class='grid'>`;

    colors.forEach(color => {
        content += `<div class='card animated-button color-card'
                        style='background-color: ${color}; color: white;'
                        onclick='playAudio("${color}")'>
                        ${color}
                    </div>`;
    });

    // ✅ Use the new back button container
    content += `<div class='back-button-container'>
                    <button class='back-button animated-button' 
                        style='background: #FF5722; color: white;' 
                        onclick='showMainMenu()'>Back</button>
                </div>`;

    document.getElementById("content").innerHTML = content;
}
