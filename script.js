/* =========================================
   SELECTING HTML ELEMENTS
========================================= */

const surpriseButton = document.getElementById("surpriseButton");

const loveMessage = document.getElementById("loveMessage");

const giftContainer = document.getElementById("giftContainer");

const giftText = document.getElementById("giftText");

const backgroundHearts = document.getElementById("backgroundHearts");

const againButton = document.getElementById("againButton");


/* =========================================
   HEART EMOJIS
========================================= */

const heartEmojis = [
    "❤️",
    "💖",
    "💕",
    "💗",
    "💓",
    "💞",
    "💘",
    "💝"
];


/* =========================================
   FLOATING HEART GENERATOR
========================================= */

function createFloatingHeart() {

    const heart = document.createElement("span");

    const randomHeart = Math.floor(
        Math.random() * heartEmojis.length
    );

    heart.classList.add("floating-heart");

    heart.innerHTML = heartEmojis[randomHeart];

    const randomPosition = Math.random() * 100;

    const randomSize = Math.random() * 25 + 15;

    const randomDuration = Math.random() * 5 + 5;

    heart.style.left = randomPosition + "%";

    heart.style.fontSize = randomSize + "px";

    heart.style.animationDuration = randomDuration + "s";

    backgroundHearts.appendChild(heart);


    // Remove heart after animation

    setTimeout(function() {

        heart.remove();

    }, randomDuration * 1000);

}


/* =========================================
   AUTOMATIC HEART ANIMATION
========================================= */

function startHeartAnimation() {

    createFloatingHeart();

    setInterval(function() {

        createFloatingHeart();

    }, 400);

}


/* =========================================
   SURPRISE BUTTON FUNCTIONALITY
========================================= */

function openSurprise() {

    // Display love message

    loveMessage.classList.add("show");


    // Hide original button

    surpriseButton.style.display = "none";


    // Hide gift box

    giftContainer.style.display = "none";


    // Change gift text

    giftText.innerHTML = "Your surprise has been opened! 💖";


    // Create extra hearts

    for (let i = 0; i < 20; i++) {

        setTimeout(function() {

            createFloatingHeart();

        }, i * 100);

    }


    // Show console message

    console.log("Surprise successfully opened!");

    console.log("I Love You Hamza! ❤️");


    // Scroll to love message

    setTimeout(function() {

        loveMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);

}


/* =========================================
   CELEBRATE AGAIN FUNCTIONALITY
========================================= */

function celebrateAgain() {

    console.log("Celebrating the love again! 💖");


    // Create a fresh heart celebration

    for (let i = 0; i < 35; i++) {

        setTimeout(function() {

            createFloatingHeart();

        }, i * 80);

    }


    // Add a temporary celebration effect

    document.body.classList.add("celebrating");

    setTimeout(function() {

        document.body.classList.remove("celebrating");

    }, 1500);

}


/* =========================================
   BUTTON EVENT LISTENERS
========================================= */

surpriseButton.addEventListener("click", function() {

    openSurprise();

});


againButton.addEventListener("click", function() {

    celebrateAgain();

});


/* =========================================
   START WEBSITE ANIMATIONS
========================================= */

startHeartAnimation();


/* =========================================
   WEBSITE LOADED MESSAGE
========================================= */

window.addEventListener("load", function() {

    console.log("--------------------------------");

    console.log("Welcome to Hamza's Love Surprise!");

    console.log("Website loaded successfully.");

    console.log("--------------------------------");

});