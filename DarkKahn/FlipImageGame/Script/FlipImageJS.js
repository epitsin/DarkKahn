var allCards = document.querySelectorAll('div');
var flippedImagesUntilNow = []; // the array of images on flipped cards
var flippedCardsUntilNow = []; // the array of flipped cards' ID-s
var flippedCardsCount = 0; // all flipped cards until now 

// the function is started when you click on a card
function flipCard(currentCard, imageName) {
    currentCard.style.backgroundImage = 'url(images/' + imageName + '.jpg)';
    if (flippedImagesUntilNow.length === 0) {
        addNewCardToFlipped();
    } else if (flippedImagesUntilNow.length === 1) {
        addNewCardToFlipped();

        if (flippedImagesUntilNow[0] === flippedImagesUntilNow[1]) {
            flippedCardsCount += 2;
            clearFlipped();
        } else {
            flippedCardsUntilNow[0].style.backgroundImage = 'url(images/default.jpg)';
            flippedCardsUntilNow[1].style.backgroundImage = 'url(images/default.jpg)';
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
//test commit