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

    function startFlying() {
        nyanCat.style.top = randomYPosition();
    }

    startFlying();
});
