const body = document.querySelector("body");

const Img_number = 3;

function genRandom() {
    const number =  Math.floor(Math.random() * Img_number);
    return number;
}

function handleImgLoad() {
    console.log("fininshed loading");
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}



function init() {
const randomNumber = genRandom();
paintImage(randomNumber)
}
init();