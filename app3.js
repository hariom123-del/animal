
document.addEventListener('DOMContentLoaded', () => {
  const mystery = document.getElementById('mysteryAnimation');
  const result = document.getElementById('result');
  const animalNameEl = document.getElementById('animalName');

  const animals = [
    "Lion 🦁",
    "Elephant 🐘",
    "Tiger 🐅",
    "Owl 🦉",
    "Fox 🦊",
    "Wolf 🐺",
    "Dolphin 🐬",
    "Eagle 🦅",
    "Rabbit 🐇",
    "Panda 🐼"
  ];

  setTimeout(() => {
    // Hide animation completely
    mystery.style.display = 'none';

    // Pick a random animal
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

    // Show result
    animalNameEl.textContent = randomAnimal;
    result.classList.remove('hidden');
  }, 3000); // 3 seconds spinner
});
