// background.js

function applyBackgroundAnimation(type = "gradient") {
    const style = document.createElement("style");
    let animationStyles = "";

    if (type === "gradient") {
        animationStyles = `
            @keyframes backgroundAnimation {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(270deg, #ffecd2, #fcb69f, #ff9a9e, #fad0c4);
                background-size: 400% 400%;
                animation: backgroundAnimation 15s ease infinite;
            }
        `;
    } else if (type === "bubbles") {
        animationStyles = `
            body {
                background-color:rgb(11, 145, 71);
                overflow: hidden;
            }
            .bubble {
                position: absolute;
                bottom: -100px;
                width: 40px;
                height: 40px;
                background: rgba(27, 137, 165, 0.86);
                border-radius: 50%;
                animation: floatUp 12s infinite ease-in-out;
            }
            @keyframes floatUp {
                0% { transform: translateY(0); opacity: 1; }
                100% { transform: translateY(-120vh); opacity: 0; }
            }
        `;
        generateBubbles();
    }

    style.innerHTML = animationStyles;
    document.head.appendChild(style);
}

function generateBubbles(count = 15) {
    for (let i = 0; i < count; i++) {
        const bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${5 + Math.random() * 10}s`;
        bubble.style.width = bubble.style.height = `${10 + Math.random() * 40}px`;
        document.body.appendChild(bubble);
    }
}

// Export functions so they can be used in script.js
export { applyBackgroundAnimation };
