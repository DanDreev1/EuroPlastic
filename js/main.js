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

const burger = document.querySelector('.burger');
const burgerList = document.querySelector('.burger__list');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  burgerList.style.display = burger.classList.contains('active') ? 'block' : 'none';
});