// script.js
import { showLettersSection } from './letters.js';
import { showNumbersSection } from './numbers.js';
import { showColorsSection } from './colors.js';
import { showShapesSection } from './shapes.js';
import { startQuiz, checkAnswer } from './quiz.js';
import { showDrawingBoard } from './drawing.js';
import { applyBackgroundAnimation } from './background.js';

let hasStarted = false;
export const buttonColors = ["#FF4081", "#4CAF50", "#2196F3", "#FF9800", "#03A9F4", "#8BC34A", "#FFC107", "#9C27B0", "#FF5722"];

// Apply the default gradient background
applyBackgroundAnimation("bubbles");

// To switch to the bubble animation, change "gradient" to "bubbles"
// applyBackgroundAnimation("bubbles");

function injectCSS() {
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes backgroundAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        body {
            font-size: 18px;
            text-align: center;
            padding: 10px;
            background: linear-gradient(270deg, #ffecd2, #fcb69f, #ff9a9e, #fad0c4);
            background-size: 400% 400%;
            animation: backgroundAnimation 15s ease infinite;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            min-height: 100vh;
            margin: 0;
            overflow-y: auto;
            overflow-x: hidden;
            font-family: 'Comic Sans MS', cursive, sans-serif;
        }
        #content {
            width: 100%;
            max-width: 900px;
            margin: auto;
            flex-grow: 1;
            position: relative;
        }
    `;
    document.head.appendChild(style);
}

function setContent(html) {
    const content = document.getElementById("content");
    content.innerHTML = html;
}

export function playAudio(text) {
    const filename = text.toLowerCase();
    const audio = new Audio(`audio/${filename}.mp3`);
    audio.play().catch(error => console.error("Audio playback error:", error));
}

function startApp() {
    hasStarted = true;
    showMainMenu();
}

export function showMainMenu() {
    let menuHtml = `<h2 class='section-title'>Choose A Game Below To Get Started</h2>
                    <div class='buttons-container'>`;

        ["letters", "numbers", "colors", "shapes", "quiz", "drawing"].forEach((section, index) => {
            menuHtml += `<button class='animated-button menu-button' 
                            style='background: ${buttonColors[index % buttonColors.length]}; color: white;' 
                            onclick='navigateToSection("${section}")'>
                            ${section.charAt(0).toUpperCase() + section.slice(1)}
                            </button>`;
    });

    menuHtml += `</div>`; // ✅ Wrapped back button in a div

    setContent(menuHtml);
}


export function navigateToSection(section) {
    if (section === "letters") {
        showLettersSection();
    } else if (section === "numbers") {
        showNumbersSection();
    } else if (section === "colors") {
        showColorsSection();
    } else if (section === "shapes") {
        showShapesSection();
    } else if (section === "quiz") {
        startQuiz();
    } else if (section === "drawing") {
        showDrawingBoard();  // ✅ Now supports the drawing feature!
    }
}

function showWelcomePage() {
    setContent("<h1 class='title'>Welcome, Oliver!</h1><button onclick='startApp()' class='animated-button menu-button' style='background: #4CAF50;'>Begin</button>");
}

window.onload = () => {
    injectCSS();
    showWelcomePage();
};

window.setContent = setContent;
window.startApp = startApp;
window.showMainMenu = showMainMenu;
window.navigateToSection = navigateToSection;
window.checkAnswer = checkAnswer;
window.playAudio = playAudio;
