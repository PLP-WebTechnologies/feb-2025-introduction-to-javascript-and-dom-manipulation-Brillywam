// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

let toggle = false; // Toggle to switch between two sets of pets

changeTextBtn.addEventListener('click', () => {
    if (!toggle) {
        dynamicText.textContent = 'I love parrots, turtles, and goldfish! They are amazing pets.';
        dynamicText.style.color = 'purple'; // Modify CSS style
    } else {
        dynamicText.textContent = 'I love dogs, cats, and rabbits! They are my favorite pets.';
        dynamicText.style.color = 'blue'; // Modify CSS style
    }
    toggle = !toggle; // Toggle the state
});

// Add a new pet dynamically
const addElementBtn = document.getElementById('add-element-btn');
const newElementContainer = document.getElementById('new-element-container');

let petIndex = 0; // Index to cycle through pets
const pets = [
    'Meet my new pet: a cute little hamster!',
    'Meet my new pet: a playful puppy!',
    'Meet my new pet: a curious kitten!',
    'Meet my new pet: a colorful parrot!'
];

addElementBtn.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = pets[petIndex];
    newElement.style.color = 'green';
    newElementContainer.appendChild(newElement);

    // Cycle through the pets array
    petIndex = (petIndex + 1) % pets.length;
});