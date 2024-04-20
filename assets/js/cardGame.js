let topLeft = document.getElementById('card-1');
let topMiddle = document.getElementById('card-2');
let topRight = document.getElementById('card-3');
let middleLeft = document.getElementById('card-4');
let middle = document.getElementById('card-5');
let middleRight = document.getElementById('card-6');
let bottomLeft = document.getElementById('card-7');
let bottomMiddle = document.getElementById('card-8');
let bottomRight = document.getElementById('card-9');

let cardArray = [topLeft, topMiddle, topRight, middleLeft, middle, middleRight, bottomLeft, bottomMiddle, bottomRight];
let images = [
    "assets/images/apple.webp", "assets/images/blueberry.webp", "assets/images/car-winner.webp", "assets/images/chilli.webp", "assets/images/corn.webp", "assets/images/grape.webp", "assets/images/orange.webp", "assets/images/stawberry.webp", "assets/images/watermelon.webp"
];
let selectedCards = [];
let attempts = 0;
let matchCount = 0;
let contactFormData = null;
let winnerModal = document.getElementById('winner')
let goodLuck = document.getElementById('game-start-modal');
let gameOverModal = document.getElementById('game-over-modal');
let playButton = document.getElementById('start-game-button')

function startGame() {

    if (attempts == 0) {
        goodLuck.classList.add('game-start-active');

        if (goodLuck.classList.contains('game-start-active')) {
            document.querySelector('#close-game-start-button').addEventListener('click', function () {
                goodLuck.classList.remove('game-start-active')
            });

        }
    }

    selectedCards = [];
    document.getElementById('matches').innerHTML = 0;

    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    } // The maximum is inclusive and the minimum is inclusive

    cardArray.forEach((element) => {
        element.addEventListener('click', function () {
            // BUG fix: Stops more than 3 cards being selected so that attempts don't increment when selecting more than 1
            if (selectedCards.length >= 3) {
                return;
            }
            if (selectedCards.length < 3) {
                let frontFace = element.querySelector('.front.face');
                frontFace.innerHTML = `<img src="${images[getRandomIntInclusive(0, images.length - 1)]}" alt="Random Image" style="width: 100%", height="100%">`;
                selectedCards.push(element);
                matchCounter();
            }
            if (selectedCards.length === 3) {
                attempts++;
                localStorage.setItem('attempts', attempts);
                setTimeout(function() {
                    location.reload();
                }, 500); //
            }
        });
    });

}


function restart() {
    attempts = 0;
    document.getElementById('attempts').textContent = attempts;
    localStorage.removeItem('attempts');
    location.reload();
}

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the attempts count from localStorage, or default to 0 if not set
    attempts = parseInt(localStorage.getItem('attempts')) || 0;
    document.getElementById('attempts').textContent = attempts;
    if (attempts >= 5) {
        gameOverModal.classList.add('game-over-active');
        document.getElementById('start-game-button').disabled = true;
        document.getElementById('try-again-game-button').disabled = true;
    }
    if (attempts >= 1) {
        playButton.innerHTML="Next turn!";
    }
});

function matchCounter() {
    matchCount = 0;
    for (let i = 0; i < selectedCards.length - 1; i++) {
        for (let j = i + 1; j < selectedCards.length; j++) {
            if (selectedCards[i].querySelector('.front.face img').src === selectedCards[j].querySelector('.front.face img').src) {
                document.getElementById('matches').innerHTML = ++matchCount;
            }
        }
    }
    if (matchCount === 3) {
        winGame(matchCount);
    }
}

// Game winner 
function winGame(matchCount) {
    if (matchCount >= 3) {
        winnerModal.classList.add('winner-active');

        if (winnerModal.classList.contains('winner-active')) {
            document.querySelector('#submit').addEventListener('click', function () {
                winnerModal.classList.remove('winner-active')
            });
        }


        document.getElementById('start-game-button').disabled = true;
        document.getElementById('try-again-game-button').disabled = true;
        document.getElementById('restart-game-button').disabled = true;
    }
}
// Email sent when win condition is met - 
function sendSignUpEmail(contactForm) {

    contactFormData = {
        name: contactForm.name.value,
        emailaddress: contactForm.emailaddress.value
    };

    emailjs.send("service_8398az5", "template_tyxq0kh", {
        from_name: "Warren @ Win a Car",
        to_name: contactForm.name.value,
        from_email: contactForm.emailaddress.value,
        message: "Congratulations! You have won a 2023 BMW M5 Competition in shiny red paint. To claim this prize, give our team a call on: 01446 734010",
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}

function sendQueryEmail(contactForm) {
    emailjs.send("service_8398az5", "template_h2fjv69", {
        from_name: "Warren @ Win a Car",
        from_email: contactForm.queryemailaddress.value,
        message: "Thank you for reaching out! A member of our team will be in touch about your query in 3-5 business days. For urgent requests, give us a call on 01446 73401",
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}

// Flip card function
function flipCard(buttonPosition) {

    if (selectedCards.length >= 3) {
        return;
    }
    document.getElementById(buttonPosition).classList.add('flip-card')

}

