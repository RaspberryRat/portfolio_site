const monitorBtn = document.getElementById('monitor-btn');
const monitor = document.getElementsByClassName('monitor');
const groupFolder = document.getElementById('group-page-btn');
const groupPage = document.getElementById('group-page');
const groupClose = document.getElementById('group-close')

monitorBtn.addEventListener('click', () => {
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

groupFolder.addEventListener('click', () => {
    groupPage.classList.remove('animate-close');
    groupPage.classList.add('animate-open');

});


groupClose.addEventListener('click', () => {
    groupPage.classList.remove('animate-open');
    groupPage.classList.add('animate-close')
})
