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