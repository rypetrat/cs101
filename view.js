const PageView = {
    applyBackgroundColor(color) {
        document.getElementById("body").style.backgroundColor = color;
    },
    applyFontFamily(font) {
        document.getElementById("body").style.fontFamily = font;
        document.querySelectorAll('#button-container button').forEach(button => {
            button.style.fontFamily = font;
        });
    },
    applyFontSize(size) {
        document.getElementById("body").style.fontSize = size;
        document.querySelectorAll('#button-container button').forEach(button => {
            button.style.fontSize = size;
        });
    }
};