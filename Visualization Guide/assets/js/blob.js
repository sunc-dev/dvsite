const box = document.querySelector(".blob");



setInterval(setBorderRadius, 500);

function setBorderRadius() {
    box.style.setProperty("--br-blobby", generateBorderRadiusValue());
    box.style.setProperty("--br-blobby-after", generateBorderRadiusValue());
    box.style.setProperty("--br-blobby-before", generateBorderRadiusValue());
}

function generateBorderRadiusValue() {
    return `${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% / ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}%`;
}

function getRandomValue() {
    return Math.floor(Math.random() * 200) + 200;
}

