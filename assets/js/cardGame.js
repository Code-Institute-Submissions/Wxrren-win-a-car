let container1 = document.getElementById('card-1');
let container2 = document.getElementById('card-2');
let container3 = document.getElementById('card-3');
let container4 = document.getElementById('card-4');
let container5 = document.getElementById('card-5');
let container6 = document.getElementById('card-6');
let container7 = document.getElementById('card-7');
let container8 = document.getElementById('card-8');
let container9 = document.getElementById('card-9');

let contaierArray = [container1, container2, container3, container4, container5, container6, container7, container8, container9];
let images = [
    "assets/images/apple.webp", "assets/images/blueberry.webp", "assets/images/car-winner.webp", "assets/images/chilli.webp", "assets/images/corn.webp", "assets/images/grape.webp", "assets/images/orange.webp", "assets/images/stawberry.webp", "assets/images/watermelon.webp"
];

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
} // The maximum is inclusive and the minimum is inclusive

containerArray.forEach((element) => {
    element.addEventListener('click', function () {
        // Find the .front face div within the clicked card
        let frontFace = element.querySelector('.front.face');
        // Change the content of the .front face div
        frontFace.innerHTML = `<img src="${images[getRandomIntInclusive(0, images.length - 1)]}" alt="Random Image">`;
    })
})


// function to start game
// array of strings with filed paths
// function that will generate a random number
// function that click binds to card to flip the card
// function that tracks if the cards display match. Turn/attempt ends when 3 cards are selected.
// function that pops up saying winner if 3 matches are made - generates an email confirmation with an emial API
// function that tracks how many attempts are made. Game over when you reach 5. 