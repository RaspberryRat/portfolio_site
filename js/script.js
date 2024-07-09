const monitorBtn = document.getElementById('monitor-btn');
const monitor = document.getElementsByClassName('monitor');

monitorBtn.addEventListener('click', () => {
    // Convert HTMLCollection to array using spread operator [...]
    [...monitor].forEach(piece => {
        if (piece.classList.contains('animate-turnOff')) {
            piece.classList.remove('animate-turnOff');
            piece.classList.add('animate-turnOn');
        } else if (piece.classList.contains('animate-turnOn')) {
            piece.classList.remove('animate-turnOn');
            piece.classList.add('animate-turnOff');
        }
    });
});
