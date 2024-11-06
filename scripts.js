/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function() {
    // Selects the form, input, and message div elements
    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector('input[type="email"]');
    const messageDiv = document.querySelector(".message");

    // Adds event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const email = emailInput.value.trim(); // Get the email value and trim whitespace

        // Checks if the email input is empty
        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
        } else {
            messageDiv.textContent = `Thank you! Your email address <${email}> has been added to our mailing list!`;
        }
   });
});