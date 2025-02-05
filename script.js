const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "My Love please...",
    "Pretty Pleaseee",
    "fine fine last one..",
    "JKK Pleaseeee ❤️",
    "cmonnnnnn",
];



let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('#nbutton');
    const yesButton = document.querySelector('#ybutton');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const gifimg = document.querySelector('.image-container');
    gifimg.classList.add('changed');
    
}

function handleYesClick() {
        window.location.href = "yes_page.html";
       
}