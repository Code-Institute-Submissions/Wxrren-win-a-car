let container1 = document.getElementById('card-1');
let container2 = document.getElementById('card-2');
let container3 = document.getElementById('card-3');
let container4 = document.getElementById('card-4');
let container5 = document.getElementById('card-5');
let container6 = document.getElementById('card-6');
let container7 = document.getElementById('card-7');
let container8 = document.getElementById('card-8');
let container9 = document.getElementById('card-9');

let containerArray = [container1, container2, container3, container4, container5, container6, container7, container8, container9];
let images = [
    "assets/images/apple.webp", "assets/images/blueberry.webp", "assets/images/car-winner.webp", "assets/images/chilli.webp", "assets/images/corn.webp", "assets/images/grape.webp", "assets/images/orange.webp", "assets/images/stawberry.webp", "assets/images/watermelon.webp"
];
let selectedCards = [];
let attempts = 0;


function startGame() {

    alert('Good Luck!');

    selectedCards = [];
    document.getElementById('matches').innerHTML = 0;
    
    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    } // The maximum is inclusive and the minimum is inclusive

    containerArray.forEach((element) => {
        element.addEventListener('click', function () {
            if (selectedCards.length < 3) {
                let frontFace = element.querySelector('.front.face');
                frontFace.innerHTML = `<img src="${images[getRandomIntInclusive(0, images.length - 1)]}" alt="Random Image" style="width: 100%", height="100%">`;
                selectedCards.push(element);
                matchCounter();
                restart()
                if (selectedCards.length === 3) {
                    checkMatch();
                }
            }

        });
    });

    
    
}

function restart() {
    // Increment attempts count
    attempts++;
    // Store the updated attempts count in localStorage
    localStorage.setItem('attempts', attempts);
    // Reload the page to restart the game
    location.reload();
}

// Check attempts on page load
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the attempts count from localStorage, or default to 0 if not set
    attempts = parseInt(localStorage.getItem('attempts')) || 0;
    // Update the display
    document.getElementById('attempts').textContent = attempts;
    // If attempts are 5 or more, show game over and disable the game
    if (attempts >= 5) {
        // Show game over message
        alert('Game Over: You have reached the maximum number of attempts.');
        // Disable the game
        document.getElementById('start-game-button').disabled = true;
        document.getElementById('restart-game-button').disabled = true;
    }
});



function matchCounter() {
    let matchCount = 0;
    for (let i = 0; i < selectedCards.length - 1; i++) {
        for (let j = i + 1; j < selectedCards.length; j++) {
            if (selectedCards[i].querySelector('.front.face img').src === selectedCards[j].querySelector('.front.face img').src) {
                document.getElementById('matches').innerHTML = ++matchCount;
            }
        }
    }
    if (matchCount === 3) {
        winGame();
    } else {
        loseGame();
    }
}



// function to start game - Complete
// array of strings with filed image paths - complete
// function that will generate a random number - complete
// function that click binds to card to flip the card - complete
// function that tracks if the cards display match. Turn/attempt ends when 3 cards are selected. - complete
// function that pops up saying winner if  matches are made - generates an email confirmation with an emial API
// function that tracks how many attempts are made. Game over when you reach 5. 

// Flip card functions
function flipCard1() {
    container1.classList.add('flip-card');
}
function flipCard2() {
    container2.classList.add('flip-card');
}
function flipCard3() {
    container3.classList.add('flip-card');
}
function flipCard4() {
    container4.classList.add('flip-card');
}
function flipCard5() {
    container5.classList.add('flip-card');
}
function flipCard6() {
    container6.classList.add('flip-card');
}
function flipCard7() {
    container7.classList.add('flip-card');
}
function flipCard8() {
    container8.classList.add('flip-card');
}
function flipCard9() {
    container9.classList.add('flip-card');
}
