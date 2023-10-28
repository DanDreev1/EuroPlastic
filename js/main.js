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
const burgerAfter = document.querySelector('.burger::after'); 
const burgerBefore = document.querySelector('.burger::before'); 

burger.addEventListener("click", () => {
  // Check if the transform is "none" using getComputedStyle
  const afterTransform = getComputedStyle(burgerAfter, null).getPropertyValue('transform');
  const beforeTransform = getComputedStyle(burgerBefore, null).getPropertyValue('transform');

  if (afterTransform === 'none' && beforeTransform === 'none') {
    burgerAfter.style.transform = 'rotate(45deg)';
    burgerBefore.style.transform = 'rotate(-45deg)';
  } else {
    burgerAfter.style.transform = 'none';
    burgerBefore.style.transform = 'none';
  }
});