var allCards = document.querySelectorAll('div');
var flippedImagesUntilNow = []; // the array of images on flipped cards
var flippedCardsUntilNow = []; // the array of flipped cards' ID-s
var flippedCardsCount = 0; // all flipped cards until now 


// the function is started when you click on a card
function flipCard(currentCard, imageName) {
    currentCard.style.backgroundImage = 'url(images/' + imageName + '.jpg)'; // TO DO: change it when we have pictures
    if (flippedImagesUntilNow.length === 0) {
        addNewCardToFlipped();
    } else if (flippedImagesUntilNow.length === 1) {
        addNewCardToFlipped();

        if (flippedImagesUntilNow[0] === flippedImagesUntilNow[1]) {
            flippedCardsCount += 2;
            clearFlipped();
        } else {
            flippedCardsUntilNow[0].style.backgroundImage = 'url(images/default.jpg)'; // TO DO: change it when we have pictures
            flippedCardsUntilNow[1].style.backgroundImage = 'url(images/default.jpg)'; // TO DO: change it when we have pictures
            clearFlipped();
        }

        if (flippedCardsCount === allCards.length) {
            // the game finishes
        }
    } 
}

// adds a new card to the array of currently flipped cards and a new image to the array of currently flipped images
function addNewCardToFlipped() {
    flippedImagesUntilNow.push(image);
    flippedCardsUntilNow.push(currentCard);
}

// clears the current selection of 2 cards
function clearFlipped() {
    flippedCardsUntilNow = [];
    flippedImagesUntilNow = [];
}

// shuffles the order of the array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// generates the main board in the beginning of the game
function generateBoard() {
    flippedCardsCount = 0;
    var numbers = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
    var shuffledNums = shuffle(numbers);

    for (var i = 0; i < shuffledNums.length; i++) {
        assignPicsToDivs(shuffledNums[i], i);
    }
}

// decides which pic to draw in the given div with id = num
function assignPicsToDivs(randomNum, num) {
    switch (randomNum) {
        case 0: drawZeroPic(num); break;
        case 1: drawFirstPic(num); break;
        case 2: drawSecondPic(num); break;
        case 3: drawThirdPic(num); break;
        case 4: drawFourthPic(num); break;
        case 5: drawFifthPic(num); break;
        case 6: drawSixthPic(num); break;
        case 7: drawSeventhPic(num); break;
        case 8: drawEighthPic(num); break;
        case 9: drawNinethPic(num); break;
    }
}

function drawZeroPic(num) {
    var canvas = document.getElementById(num);
    var ctx = canvas.getContext('2d');

    // TO DO...
}

function drawFirstPic(num) {
    var canvas = document.getElementById(num);
    var ctx = canvas.getContext('2d');

    // TO DO...
}

function drawSecondPic(num) {
    var canvas = document.getElementById(num);
    var ctx = canvas.getContext('2d');

    // TO DO...

}

function drawThirdPic(num) {
    var canvas = document.getElementById(num);
    var ctx = canvas.getContext('2d');

    // TO DO...

}

function drawFourthPic(num) {
    var canvas = document.getElementById(num);
    var ctx = canvas.getContext('2d');

    // TO DO...

}

function drawFifthPic(num) {
    var canvas = document.getElementById(num);
    var ctx = canvas.getContext('2d');

    // TO DO...

}

function drawSixthPic(num) {
    var canvas = document.getElementById(num);
    var ctx = canvas.getContext('2d');

    // TO DO...

}

function drawSeventhPic(num) {
    var canvas = document.getElementById(num);
    var ctx = canvas.getContext('2d');

    // TO DO...

}

function drawEighthPic(num) {
    var canvas = document.getElementById(num);
    var ctx = canvas.getContext('2d');

    // TO DO...

}

function drawNinethPic(num) {
    var canvas = document.getElementById(num);
    var ctx = canvas.getContext('2d');

    // TO DO...

}