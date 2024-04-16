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
let matchCount = 0;
let contactFormData = null;


function startGame() {

    if (attempts == 0) {
        alert('Good Luck!');
    }


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
                if (selectedCards.length === 3) {
                    checkMatch();
                }
            }

        });
    });

}


// setting and getting local storage was learned on W3 Schools - https://www.w3schools.com/jsref/prop_win_localstorage.asp
function restart() {
    attempts++;
    localStorage.setItem('attempts', attempts);
    location.reload();
}

/* Check attempts on page load - DOMContentLoaded learned from "Love Maths" Module & 
    parseInt() learned from W3 schools https://www.w3schools.com/jsref/jsref_parseint.asp
*/
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the attempts count from localStorage, or default to 0 if not set
    attempts = parseInt(localStorage.getItem('attempts')) || 0;
    document.getElementById('attempts').textContent = attempts;
    if (attempts >= 5) {
        alert('Game Over: You have reached the maximum number of attempts.');
        document.getElementById('start-game-button').disabled = true;
        document.getElementById('restart-game-button').disabled = true;
    }
});


// Query Selector learned from W3 schools - https://www.w3schools.com/jsref/met_document_queryselector.asp
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
    } else {
        loseGame();
    }
}

// Game winner 
function winGame(matchCount) {
    if (matchCount >= 3) {
        alert(`You won! You'll receive an email in the mail`);
        document.getElementById('start-game-button').disabled = true;
        document.getElementById('restart-game-button').disabled = true;
        sendMail(contactFormData);
    }
}

function sendSignUpEmail(contactForm) {

    contactFormData = {
        name: contactForm.name.value,
        emailaddress: contactForm.emailaddress.value
    };

    emailjs.send("service_8398az5", "template_h2fjv69", {
        from_name: "Warren @ Win a Car",
        to_name: contactForm.name.value,
        from_email: contactForm.emailaddress.value,
        message: "Thanks for Signing up! Good luck with your game, remember - You only get 5 attempts!",
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


function sendMail(contactForm) {

    emailjs.send("service_8398az5", "template_tyxq0kh", {
        from_name: "Warren @ Win a car!",
        to_name: contactForm.name,
        from_email: contactForm.emailaddress,
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
