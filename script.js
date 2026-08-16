function aliens() {
    alert("Alien Attack! Brace yourself!");
    const alien = document.createElement("div");

    alien.textContent = "👽";
    alien.style.position = "fixed";
    alien.style.left = "-100px";
    alien.style.top = Math.random() * (window.innerHeight - 100) + "px";
    alien.style.fontSize = "60px";
    alien.style.zIndex = "9999";
    alien.style.transition = "transform 4s linear";

    document.body.appendChild(alien);

    // Start moving across the screen
    setTimeout(() => {
        alien.style.transform = `translateX(${window.innerWidth + 200}px)`;
    }, 50);

    // Remove it after it leaves the screen
    setTimeout(() => {
        alien.remove();
    }, 4200);
}