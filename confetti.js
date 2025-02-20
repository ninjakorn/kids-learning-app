function startConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confetti = [];
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 5 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            tilt: Math.random() * 10,
            tiltAngleIncremental: Math.random() * 0.07 + 0.05,
            tiltAngle: 0
        });
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach((c, i) => {
            c.tiltAngle += c.tiltAngleIncremental;
            c.y += c.d;
            ctx.fillStyle = c.color;
            ctx.beginPath();
            ctx.arc(c.x + c.tilt, c.y, c.r, 0, Math.PI * 2);
            ctx.fill();
            if (c.y > canvas.height) {
                confetti[i] = { ...c, y: -10, x: Math.random() * canvas.width };
            }
        });
    }

    confettiInterval = setInterval(drawConfetti, 30);
}

function stopConfetti() {
    clearInterval(confettiInterval);
    const canvas = document.getElementById("confetti-canvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

let confettiInterval;

export { startConfetti, stopConfetti };
