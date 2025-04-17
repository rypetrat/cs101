function colorChange() {
    console.log("Color Change Function Called");
    const [R, G, B] = [Math.random() * 255, Math.random() * 255, Math.random() * 255];
    document.getElementById("body").style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
}