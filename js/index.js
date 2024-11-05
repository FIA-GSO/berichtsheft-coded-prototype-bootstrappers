function toggleInputField() {
    const selectElement = document.getElementById("ausbilder-select");
    const inputContainer = document.getElementById("new-ausbilder-container");

    // Show the input field only if the "new" option is selected
    if (selectElement.value === "new") {
        inputContainer.style.display = "block";
    } else {
        inputContainer.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const nyanCat = document.querySelector(".nyancat");

    function randomYPosition() {
        const windowHeight = window.innerHeight;
        return Math.floor(Math.random() * (windowHeight - 100)) + "px";
    }

    function randomXPosition() {
        const windowWidth = window.innerWidth;
        return Math.floor(Math.random() * (windowWidth - 100)) + "px";
    }

    function startFlying() {
        nyanCat.style.top = randomYPosition(); // Zufällige Y-Position festlegen
        nyanCat.style.left = "0px"; // X-Position startet von ganz links
        animateXPosition(); // X-Animation starten
    }

    function animateXPosition() {
        let xPosition = 0;
        const speed = 5; // Geschwindigkeit der Bewegung

        function move() {
            xPosition += speed;
            nyanCat.style.left = xPosition + "px";

            // Wenn die Katze das Ende des Fensters erreicht, fängt sie neu an
            if (xPosition > window.innerWidth) {
                xPosition = -100; // Zurück zur linken Seite, außerhalb des Bildschirms
                nyanCat.style.top = randomYPosition(); // Neue zufällige Y-Position festlegen
            }

            requestAnimationFrame(move); // Nächste Animation aufrufen
        }

        move();
    }

    startFlying();
});

