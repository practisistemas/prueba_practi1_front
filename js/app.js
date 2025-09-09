// Application state
let counter = 0;

// DOM elements
const nameInput = document.getElementById('nameInput');
const greetButton = document.getElementById('greetButton');
const greeting = document.getElementById('greeting');
const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

// Greeting functionality
function showGreeting() {
    const name = nameInput.value.trim();
    
    if (name === '') {
        alert('Por favor, ingresa tu nombre');
        return;
    }
    
    const greetingMessage = `¡Hola, ${name}! Bienvenido a Prueba Practi Front 1.`;
    greeting.textContent = greetingMessage;
    greeting.classList.add('show');
    
    // Clear input
    nameInput.value = '';
}

// Counter functionality
function updateCounterDisplay() {
    counterValue.textContent = counter;
    
    // Add visual feedback for the counter changes
    counterValue.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterValue.style.transform = 'scale(1)';
    }, 150);
}

function incrementCounter() {
    counter++;
    updateCounterDisplay();
}

function decrementCounter() {
    counter--;
    updateCounterDisplay();
}

function resetCounter() {
    counter = 0;
    updateCounterDisplay();
}

// Event listeners
greetButton.addEventListener('click', showGreeting);
incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);
resetBtn.addEventListener('click', resetCounter);

// Allow Enter key to trigger greeting
nameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        showGreeting();
    }
});

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Prueba Practi Front 1 - Aplicación cargada correctamente');
    
    // Add smooth transitions to counter value
    counterValue.style.transition = 'transform 0.15s ease-in-out';
    
    // Focus on name input when page loads
    nameInput.focus();
});

// Additional utility functions
function getRandomGreeting(name) {
    const greetings = [
        `¡Hola, ${name}! ¿Cómo estás?`,
        `¡Bienvenido, ${name}!`,
        `¡Qué tal, ${name}!`,
        `¡Saludos, ${name}!`,
        `¡Hola, ${name}! Esperamos que tengas un buen día.`
    ];
    
    return greetings[Math.floor(Math.random() * greetings.length)];
}

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        incrementCounter,
        decrementCounter,
        resetCounter,
        getRandomGreeting
    };
}