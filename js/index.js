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


window.addEventListener('load', function() {
    const root = document.documentElement;
    const button = document.getElementById('crazy-mode-button');
    let crazyModeInterval;

    // Function to generate a random hex color
    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }

    // Toggle "Crazy Mode"
    button.addEventListener('click', function() {
        if (crazyModeInterval) {
            // If Crazy Mode is on, turn it off
            clearInterval(crazyModeInterval);
            crazyModeInterval = null;
            button.textContent = "Crazy Mode"; // Update button text
            root.style.setProperty('--primary-color', 'white');
            root.style.setProperty('--secondary-color', 'grey');
            root.style.setProperty('--accent-color', '#f064ff');
        } else {
            // If Crazy Mode is off, turn it on
            crazyModeInterval = setInterval(() => {
                root.style.setProperty('--primary-color', getRandomColor());
                root.style.setProperty('--secondary-color', getRandomColor());
                root.style.setProperty('--accent-color', getRandomColor());
            }, 100); // Change color every 0.1 seconds
            button.textContent = "Stop Crazy Mode"; // Update button text
        }
    });
});
