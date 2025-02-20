import { buttonColors } from './script.js';

export function showNumbersSection() {
    const numbers = Array.from({ length: 11 }, (_, i) => i.toString());
    let content = `<h2 class='section-title'>Numbers</h2><div class='grid'>`;

    numbers.forEach((number, index) => {
        const color = buttonColors[index % buttonColors.length]; 
        content += `<div class='card animated-button color-card'
                        style='background-color: ${color}; color: white;'
                        onclick='playAudio("${number}")'>
                        ${number}
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
