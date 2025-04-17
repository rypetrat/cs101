function colorChange() {
    console.log("Color change function called");
    const [R, G, B] = [Math.random() * 255, Math.random() * 255, Math.random() * 255];
    document.getElementById("body").style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
}

function fontChange() {
    console.log("Font change function called");
    const fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana", "System-Ui", "cursive", "fantasy", "monospace", "serif", "sans-serif"];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    console.log("Random font selected:", randomFont);
    document.getElementById("body").style.fontFamily = randomFont;
}

function sizeChange() {
    console.log("Size change function called");
    const fontSizes = ["12px", "14px", "16px", "18px", "20px", "22px", "24px", "26px", "28px", "30px", "32px", "34px", "36px", "38px", "40px"];
    const randomFontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];
    document.getElementById("body").style.fontSize = randomFontSize;
}

function bodyLoaded() {
    alert("Page Loaded Successfully!");
}