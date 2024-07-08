monitorBtn = document.getElementById('monitor-btn')

const monitorScreen = document.getElementById('monitor-screen')

monitorBtn.addEventListener('click', () => {
    if (monitorScreen.classList.contains('animate-turnOff')) {
        monitorScreen.classList.remove('animate-turnOff')
        monitorScreen.classList.add('animate-turnOn')
    } else if (monitorScreen.classList.contains('animate-turnOn')) {
        monitorScreen.classList.remove('animate-turnOn')
        monitorScreen.classList.add('animate-turnOff')
    }
})