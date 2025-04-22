const StyleController = {
    colorChange() {
        console.log("Color change function called");
        const [R, G, B] = [
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256)
        ];
        const newColor = `rgb(${R}, ${G}, ${B})`;
        PageStyleModel.setBackgroundColor(newColor);
        PageView.applyBackgroundColor(newColor);
    },

    fontChange() {
        console.log("Font change function called");
        const fonts = [
            "Arial", "Courier New", "Georgia", "Times New Roman", "Verdana",
            "System-Ui", "cursive", "fantasy", "monospace", "serif", "sans-serif"
        ];
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
        console.log("Random font selected:", randomFont);
        PageStyleModel.setFontFamily(randomFont);
        PageView.applyFontFamily(randomFont);
    },

    sizeChange() {
        console.log("Size change function called");
        const fontSizes = [
            "12px", "14px", "16px", "18px", "20px", "22px", "24px",
            "26px", "28px", "30px", "32px", "34px", "36px", "38px", "40px"
        ];
        const randomFontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];
        PageStyleModel.setFontSize(randomFontSize);
        PageView.applyFontSize(randomFontSize);
    },

    bodyLoaded() {
        alert("Page Loaded Successfully!");
    }
};