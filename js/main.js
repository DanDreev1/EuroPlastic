document.getElementById("lang").addEventListener("click", function() {
    let target = document.getElementById("hide__lang");
    let nav = document.getElementById("nav");
    if (target.style.display === "inline-block") {
        nav.style.padding = "25px 0";
        target.style.display = "none"; // Hide the element
    } else {
        nav.style.padding = "25px 0 70px";
        target.style.display = "inline-block"; // Show the element
    }
});

// Get all FAQ question buttons and corresponding text elements
const questionButtons = document.querySelectorAll('.faq__question');
const textElements = document.querySelectorAll('.faq__text');

// Add click event listeners to the buttons
questionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Toggle the display of the corresponding text element
        if (textElements[index].style.display === 'none') {
            questionButtons[index].style.borderRadius = '10px 10px 0 0';
            textElements[index].style.display = 'inline-block';
        } else {
            questionButtons[index].style.borderRadius = '10px';
            textElements[index].style.display = 'none';
        }

        // Hide other text elements
        textElements.forEach((text, i) => {
            if (i !== index) {
                text.style.display = 'none';
            }
        });
    });
});

// Get a reference to the Contact button and the footer
const buttons = document.querySelectorAll('.btn__contact');
const contact = document.getElementById('contacts');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        contact.scrollIntoView({ behavior: 'smooth' });
    });
});