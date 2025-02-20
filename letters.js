export function showLettersSection() {
    let content = `<h2 class='section-title'>Letters</h2><div class='grid'>`;

    // URLs for each letter of the alphabet (Replace these with actual links)
    const letterImages = {
        A: "https://www.animatedimages.org/data/media/43/animated-letter-image-1323.gif",
        B: "https://www.animatedimages.org/data/media/43/animated-letter-image-1324.gif",
        C: "https://www.animatedimages.org/data/media/43/animated-letter-image-1319.gif",
        D: "https://www.animatedimages.org/data/media/43/animated-letter-image-1320.gif",
        E: "https://www.animatedimages.org/data/media/43/animated-letter-image-1321.gif",
        F: "https://www.animatedimages.org/data/media/43/animated-letter-image-1322.gif",
        G: "https://www.animatedimages.org/data/media/43/animated-letter-image-1315.gif",
        H: "https://www.animatedimages.org/data/media/43/animated-letter-image-1316.gif",
        I: "https://www.animatedimages.org/data/media/43/animated-letter-image-1317.gif",
        J: "https://www.animatedimages.org/data/media/43/animated-letter-image-1318.gif",
        K: "https://www.animatedimages.org/data/media/43/animated-letter-image-1310.gif",
        L: "https://www.animatedimages.org/data/media/43/animated-letter-image-1311.gif",
        M: "https://www.animatedimages.org/data/media/43/animated-letter-image-1312.gif",
        N: "https://www.animatedimages.org/data/media/43/animated-letter-image-1313.gif",
        O: "https://www.animatedimages.org/data/media/43/animated-letter-image-1314.gif",
        P: "https://www.animatedimages.org/data/media/43/animated-letter-image-1307.gif",
        Q: "https://www.animatedimages.org/data/media/43/animated-letter-image-1308.gif",
        R: "https://www.animatedimages.org/data/media/43/animated-letter-image-1309.gif",
        S: "https://www.animatedimages.org/data/media/43/animated-letter-image-1302.gif",
        T: "https://www.animatedimages.org/data/media/43/animated-letter-image-1303.gif",
        U: "https://www.animatedimages.org/data/media/43/animated-letter-image-1304.gif",
        V: "https://www.animatedimages.org/data/media/43/animated-letter-image-1305.gif",
        W: "https://www.animatedimages.org/data/media/43/animated-letter-image-1306.gif",
        X: "https://www.animatedimages.org/data/media/43/animated-letter-image-1299.gif",
        Y: "https://www.animatedimages.org/data/media/43/animated-letter-image-1300.gif",
        Z: "https://www.animatedimages.org/data/media/43/animated-letter-image-1301.gif"
    };

    // Create letter image buttons
    Object.keys(letterImages).forEach(letter => {
        content += `<div class='card animated-button' 
                        style='background-color: transparent;'
                        onclick='playAudio("${letter}")'>
                        <img src="${letterImages[letter]}" alt="Letter ${letter}" style="width: 100%; height: auto;">
                    </div>`;
    });

    // Back button
    content += `<div class='back-button-container'>
                    <button class='back-button animated-button' 
                        style='background: #FF5722; color: white;' 
                        onclick='showMainMenu()'>Back</button>
                </div>`;

    document.getElementById("content").innerHTML = content;
}
