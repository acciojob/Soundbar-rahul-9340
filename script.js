
// Get all buttons and the stop button
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

// Create an audio element
const audio = new Audio();

// Function to play audio
function playAudio(soundFile) {
    audio.src = `sounds/${soundFile}`;
    audio.play();
}

// Add click event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        if (soundFile) {
            playAudio(soundFile);
        }
    });
});

// Add click event listener to stop button
stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});
