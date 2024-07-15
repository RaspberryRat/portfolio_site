const monitorBtn = document.getElementById('monitor-btn');
const monitorScreen = document.getElementById('monitor-screen');
const groupFolder = document.getElementById('group-page-btn');
const socialFolder = document.getElementById('social-network-btn');
const chessFolder = document.getElementById('chess-btn');
const flightBookerFolder = document.getElementById('flight-booker-btn');
const membersFolder = document.getElementById('members-only-btn');
const eventFolder = document.getElementById('event-page-btn');
const groupPage = document.getElementById('group-page');
const groupClose = document.getElementById('group-close');
const socialPage = document.getElementById('social-page');
const socialClose = document.getElementById('social-close');
const chessPage = document.getElementById('chess-page');
const chessClose = document.getElementById('chess-close');
const flightBookerPage = document.getElementById('flight-booker-page');
const flightBookerClose = document.getElementById('flight-booker-close');
const membersPage = document.getElementById('members-page');
const membersClose = document.getElementById('members-close');
const eventPage = document.getElementById('event-page');
const eventClose = document.getElementById('event-close');
const folders = document.getElementById('folders');
const aboutMe = document.getElementById('about-me');
const aboutMePage = document.getElementById('about-me-page');
const aboutMeClose = document.getElementById('about-me-close');



monitorBtn.addEventListener('click', () => {
    if (monitorScreen.classList.contains('animate-turnOff')) {
        monitorScreen.classList.remove('animate-turnOff');
        monitorScreen.classList.remove('opacity-0');
        monitorScreen.classList.add('animate-turnOn');
        folders.classList.remove('opacity-0');
        folders.classList.remove('animate-foldersOff');
        aboutMe.classList.remove('animate-foldersOff');
        folders.classList.add('animate-foldersOn');
        aboutMe.classList.add('animate-foldersOn');
    } else if (monitorScreen.classList.contains('animate-turnOn')) {
        monitorScreen.classList.remove('animate-turnOn');
        monitorScreen.classList.add('animate-turnOff');
        folders.classList.remove('animate-foldersOn');
        aboutMe.classList.remove('animate-foldersOn');
        folders.classList.add('animate-foldersOff');
        aboutMe.classList.add('animate-foldersOff');
    }
});

groupFolder.addEventListener('click', () => {
    groupPage.classList.remove('animate-close');
    groupPage.classList.add('animate-open');
});

groupClose.addEventListener('click', () => {
    groupPage.classList.remove('animate-open');
    groupPage.classList.add('animate-close')
});

socialFolder.addEventListener('click', () => {
    socialPage.classList.remove('animate-close');
    socialPage.classList.add('animate-open');
});

socialClose.addEventListener('click', () => {
    socialPage.classList.remove('animate-open');
    socialPage.classList.add('animate-close')
});


chessFolder.addEventListener('click', () => {
    chessPage.classList.remove('animate-close');
    chessPage.classList.add('animate-open');
});

chessClose.addEventListener('click', () => {
    chessPage.classList.remove('animate-open');
    chessPage.classList.add('animate-close')
});

flightBookerFolder.addEventListener('click', () => {
    flightBookerPage.classList.remove('animate-close');
    flightBookerPage.classList.add('animate-open');

});

flightBookerClose.addEventListener('click', () => {
    flightBookerPage.classList.remove('animate-open');
    flightBookerPage.classList.add('animate-close')
});

membersFolder.addEventListener('click', () => {
    membersPage.classList.remove('animate-close');
    membersPage.classList.add('animate-open');
});

membersClose.addEventListener('click', () => {
    membersPage.classList.remove('animate-open');
    membersPage.classList.add('animate-close')
});


eventFolder.addEventListener('click', () => {
    eventPage.classList.remove('animate-close');
    eventPage.classList.add('animate-open');
});

eventClose.addEventListener('click', () => {
    eventPage.classList.remove('animate-open');
    eventPage.classList.add('animate-close')
});


aboutMe.addEventListener('click', () => {
    aboutMePage.classList.remove('animate-close');
    aboutMePage.classList.add('animate-open');
});

aboutMeClose.addEventListener('click', () => {
    aboutMePage.classList.remove('animate-open');
    aboutMePage.classList.add('animate-close')
});
