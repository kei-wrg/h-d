const messages = [
    "¿segura?",
    "¿de verdad?",
    "¿de vdd de vdd de vdd segura?",
    "amor...",
    "Si dices que no, m voy a poner triste..",
    "estaré triste...",
    "muy triste...",
    "muy, muy, muy, muy, muy, muy triste...",
    "ya no t voy a preguntar nada...",
    "MENTIRA, dime q sí"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "snn.html";
}