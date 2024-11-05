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
    let clickCount = 0;

    // Function to generate a random hex color
    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }

    // Toggle "Crazy Mode" with specific click requirements
    button.addEventListener('click', function() {
        if (crazyModeInterval) {
            // If Crazy Mode is on, turn it off immediately
            clearInterval(crazyModeInterval);
            crazyModeInterval = null;
            clickCount = 0; // Reset the click counter
            button.textContent = "Crazy Mode"; // Update button text
            root.style.setProperty('--primary-color', 'white');
            root.style.setProperty('--text-color', 'black');
            root.style.setProperty('--secondary-color', 'grey');
            root.style.setProperty('--accent-color', '#6764FF');
        } else {
            // Increment click counter if Crazy Mode is off
            clickCount += 1;

            // Activate Crazy Mode if the button has been clicked 3 times
            if (clickCount === 3) {
                crazyModeInterval = setInterval(() => {
                    root.style.setProperty('--primary-color', getRandomColor());
                    root.style.setProperty('--secondary-color', getRandomColor());
                    root.style.setProperty('--accent-color', getRandomColor());
                    root.style.setProperty('--text-color', getRandomColor());
                }, 100); // Change color every 0.1 seconds

                button.textContent = "Stop Crazy Mode"; // Update button text
                clickCount = 0; // Reset the click counter after activation
            }
        }
    });
});
