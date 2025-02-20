import { playAudio } from './script.js'; 
import { showMainMenu } from './script.js'; 
import { startConfetti, stopConfetti } from './confetti.js';

const buttonColors = ["#FF4081", "#4CAF50", "#2196F3", "#FF9800", "#03A9F4", "#8BC34A", "#FFC107", "#9C27B0", "#FF5722"];
const quizItems = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", ...Array.from({ length: 11 }, (_, i) => i.toString()), "red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "black"];

let currentQuizItem = null;

export function startQuiz() {
    stopConfetti(); // 🎊 Ensure confetti stops before starting a new quiz

    currentQuizItem = quizItems[Math.floor(Math.random() * quizItems.length)];
    playAudio(currentQuizItem);

    let options = new Set([currentQuizItem]); // ✅ Use Set to prevent duplicates
    while (options.size < 4) {
        options.add(quizItems[Math.floor(Math.random() * quizItems.length)]);
    }

    const shuffledOptions = [...options].sort(() => Math.random() - 0.5); // ✅ Ensure proper randomization

    let quizHtml = `<h2 class='section-title'>Quiz Mode</h2>
                    <p class='quiz-question'>Which one is: <strong>${currentQuizItem.charAt(0).toUpperCase() + currentQuizItem.slice(1)}</strong>?</p> 
                    <div class='buttons-container'>`;

    shuffledOptions.forEach(option => {
        quizHtml += `<button class='animated-button quiz-button' 
                        style='background: ${buttonColors[Math.floor(Math.random() * buttonColors.length)]}; color: white;' 
                        onclick='checkAnswer("${option}")'>
                        ${option}
                     </button>`;
    });

    // ✅ Use the new back button container
    quizHtml += `<div class='back-button-container'>
                    <button class='back-button animated-button' 
                        style='background: #FF5722; color: white;' 
                        onclick='showMainMenu()'>Back</button>
                </div>`;

    document.getElementById("content").innerHTML = quizHtml;
}

// ✅ Define checkAnswer function to handle correct/incorrect answers
export function checkAnswer(selected) {
    if (selected === currentQuizItem) {
        startConfetti(); // 🎉 Start confetti for correct answer
        showMessagePopup("Correct!", startQuiz);
    } else {
        showMessagePopup("Try Again!");
    }
}

// ✅ Ensure popups work correctly
function showMessagePopup(message, callback) {
    let popup = document.getElementById("message-popup");

    if (!popup) {
        popup = document.createElement("div");
        popup.id = "message-popup";
        popup.className = "message-popup";
        popup.innerHTML = `
            <p id='popup-message'></p>
            <button id='popup-button'>OK</button>
            <canvas id="confetti-canvas"></canvas> <!-- Confetti Canvas -->
        `;
        document.body.appendChild(popup);
    }

    document.getElementById("popup-message").innerText = message;
    popup.style.display = "block";
    popup.style.animation = "popupBounce 0.5s ease-in-out"; // Bounce Animation

    document.getElementById("popup-button").onclick = () => {
        popup.style.display = "none";
        stopConfetti(); // 🎊 Stop Confetti
        if (callback) callback();
    };
}
