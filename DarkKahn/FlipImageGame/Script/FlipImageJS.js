var allCards = document.querySelectorAll('div');
var flippedImagesUntilNow = []; // the array of images on flipped cards
var flippedCardsUntilNow = []; // the array of flipped cards' ID-s
var flippedCardsCount = 0; // all flipped cards until now 


// the function is started when you click on a card
function flipCard(currentCard, imageName) {
    //currentCard.style.backgroundImage = 'url(images/' + imageName + '.jpg)'; // TO DO: change it when we have pictures
    assignPicsToDivs(currentCard.className, currentCard.id);

    if (flippedCardsUntilNow.length === 0) {
        addNewCardToFlipped(currentCard);
    } else if (flippedCardsUntilNow.length === 1) {
        addNewCardToFlipped(currentCard);

        if (flippedCardsUntilNow[0].className === flippedCardsUntilNow[1].className) {
            flippedCardsCount += 2;
            clearFlipped();
        } else {

            sleep(3);

            var element = flippedCardsUntilNow[0].getElementsByTagName('svg');
            for (index = 0; index < element.length; index++) {
                element[index].parentNode.removeChild(element[index]);
            }

            element = flippedCardsUntilNow[1].getElementsByTagName('svg');
            for (index = 0; index < element.length; index++) {
                element[index].parentNode.removeChild(element[index]);
            }

            //flippedCardsUntilNow[0].style.backgroundImage = 'url(images/default.jpg)'; // TO DO: change it when we have pictures
            //flippedCardsUntilNow[1].style.backgroundImage = 'url(images/default.jpg)'; // TO DO: change it when we have pictures
            clearFlipped();
        }

        if (flippedCardsCount === allCards.length) {
            // the game finishes
        }
    } 
}

function sleep(seconds) {
    var e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) { }
}

// adds a new card to the array of currently flipped cards and a new image to the array of currently flipped images
function addNewCardToFlipped(currentCard) {
    //flippedImagesUntilNow.push(image);
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
        var div = document.getElementById(i);
        div.className = shuffledNums[i];
        //assignPicsToDivs(shuffledNums[i], i);
    }
}

window.onload = generateBoard;

// decides which pic to draw in the given div with id = num
function assignPicsToDivs(randomNum, num) {
    switch (parseInt(randomNum)) {
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
    //note
    var paper = Raphael(document.getElementById(num), 80, 120);
    var rectA = paper.rect(0, 0, 80, 120);

    rectA.attr({
        fill: 'none',
        'stroke-width': '0',
        'stroke-opacity': '1'
    }).data('id', 'rectA');

    var Music = paper.set();
    var pathB = paper.path("M80.874,85.99h0.058V39.844l0.021-0.153l-0.021,0.003V39.69l-0.049,0.009l-44.898,6.012h-0.003v36.461 c-1.777-0.568-3.777-0.798-5.862-0.595c-6.597,0.641-11.538,5.337-11.038,10.489c0.501,5.151,6.253,8.813,12.849,8.172 c6.598-0.643,11.539-5.337,11.038-10.49c-0.009-0.087-0.03-0.171-0.042-0.258h0.057V57.862l30.948-4.521V78.67 c-1.777-0.568-3.777-0.798-5.863-0.595c-6.598,0.642-11.539,5.338-11.039,10.49c0.5,5.151,6.253,8.813,12.849,8.172 c6.599-0.643,11.539-5.337,11.038-10.49C80.907,86.16,80.887,86.077,80.874,85.99z").attr({
        parent: 'Music',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathB');

    Music.attr({
        'id': 'Music',
        'name': 'Music'
    });

    var rsrGroups = [Music];
    Music.push(pathB);
}

function drawFirstPic(num) {
    //heart
    var paper = Raphael(document.getElementById(num), 80, 120);
    var rectB = paper.rect(0, 0, 80, 120);

    rectB.attr({
        fill: 'none',
        'stroke-width': '0',
        'stroke-opacity': '1'
    }).data('id', 'rectB');

    var Favorite = paper.set();
    Favorite.attr({
        'id': 'Favorite',
        'name': 'Favorite'
    });

    var groupA = paper.set();
    var pathC = paper.path("M64.697,39.515c0.904,0,1.867,0.05,2.898,0.149c6.27,0.612,13.52,6.353,14.403,17.353v3.661 c-0.822,10.528-8.771,23.516-32,39.809c-23.228-16.294-31.176-29.28-31.998-39.809v-3.661c0.883-11,8.133-16.739,14.402-17.353 c1.03-0.101,1.994-0.149,2.898-0.149c7.244,0,10.72,3.132,14.698,7.872C53.979,42.646,57.452,39.515,64.697,39.515 M64.697,46.515 c-4.162,0-5.898,1.275-9.336,5.372l-5.36,6.39l-5.363-6.391c-3.438-4.097-5.174-5.372-9.336-5.372 c-0.682,0-1.428,0.039-2.219,0.116c-2.894,0.283-7.396,3.364-8.082,10.688v3.063C25.853,69.577,34.256,80.151,50,91.854 C65.745,80.15,74.148,69.577,75,60.381v-3.063c-0.688-7.323-5.189-10.405-8.085-10.688C66.125,46.554,65.379,46.515,64.697,46.515 L64.697,46.515z").attr({
        parent: 'Favorite',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathC');

    groupA.attr({
        'parent': 'Favorite',
        'name': 'groupA'
    });

    var rsrGroups = [Favorite, groupA];
    Favorite.push();
    groupA.push(pathC);
}

function drawSecondPic(num) {
    //house
    var paper = Raphael(document.getElementById(num), 80, 120);
    var rectA = paper.rect(0, 0, 80, 120);

    rectA.attr({
        fill: 'none',
        'stroke-width': '0',
        'stroke-opacity': '1'
    }).data('id', 'rectA');
    var Home = paper.set();

    var pathB = paper.path("M84.73,64.679l-12.598-9.615V39.156h-9v9.038L50,38.166L15.27,64.678l5.461,7.156l3.741-2.857v32.857h51.057V68.977   l3.74,2.855L84.73,64.679z M70.529,96.832H59v-19H41v19H29.471V65.794L50,50.119l20.529,15.676V96.832z").attr({
        parent: 'Home',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathB');

    Home.attr({
        'id': 'Home',
        'name': 'Home'
    });

    var rsrGroups = [Home];
    Home.push(
		pathB
	);
}

function drawThirdPic(num) {
    //camera
    var paper = Raphael(document.getElementById(num), 80, 120);
    var rectA = paper.rect(0, 0, 80, 120);

    rectA.attr({
        fill: 'none',
        'stroke-width': '0',
        'stroke-opacity': '1'
    }).data('id', 'rectA');
    var Photo = paper.set();

    var pathB = paper.path("M74.91,52.32l-4.123-5.772c-1.342-1.692-3.041-2.563-5.195-2.673h-6.094c-2.156,0.108-3.854,0.979-5.194,2.673   l-3.991,5.583H27c-5.5,0-10,4.5-10,10v23.999c0,5.5,4.5,10,10,10h46c5.5,0,10-4.5,10-10V62.13C83,57.285,79.504,53.218,74.91,52.32   z M58.371,49.454c-0.004-0.01,0.229-0.241,0.519-0.38c0.278-0.154,0.604-0.208,0.608-0.202h6.094   c0.005-0.008,0.328,0.048,0.609,0.202c0.286,0.14,0.52,0.37,0.518,0.378l1.912,2.679H56.459L58.371,49.454z M47.98,88.045   c-7.852,0-14.239-6.387-14.239-14.238c0-7.851,6.388-14.237,14.239-14.237c7.852,0,14.239,6.386,14.239,14.237   C62.221,81.658,55.832,88.045,47.98,88.045z M23,86.129V62.13c0-2.168,1.832-4,4-4h6.688c-4.258,3.884-6.945,9.459-6.945,15.676   c0,6.563,2.979,12.428,7.656,16.322H27C24.833,90.129,23,88.297,23,86.129z M77,86.129c0,2.168-1.832,4-4,4H61.563   c4.677-3.895,7.655-9.76,7.655-16.322c0-6.216-2.688-11.792-6.945-15.676H73c2.168,0,4,1.832,4,4V86.129z").attr({
        parent: 'Photo',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathB');

    Photo.attr({
        'id': 'Photo',
        'name': 'Photo'
    });

    var rsrGroups = [Photo];
    Photo.push(
		pathB
	);
}

function drawFourthPic(num) {
    //clock
    var paper = Raphael(document.getElementById(num), 80, 120);
    var rectA = paper.rect(0, 0, 80, 120);

    rectA.attr({
        fill: 'none',
        'stroke-width': '0',
        'stroke-opacity': '1'
    }).data('id', 'rectA');
    var Alarm = paper.set();

    var pathB = paper.path("M81.93,49.75c-0.039-6.559-5.389-11.842-11.945-11.803c-3.682,0.021-6.961,1.717-9.123,4.357l16.816,16.619   C80.293,56.73,81.95,53.432,81.93,49.75z").attr({
        parent: 'Alarm',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathB');

    var pathC = paper.path("M22.279,59.119l16.633-16.832c-2.193-2.527-5.429-4.123-9.037-4.104c-6.559,0.039-11.843,5.389-11.804,11.945   C18.093,53.74,19.728,56.955,22.279,59.119z").attr({
        parent: 'Alarm',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathC');

    var pathD = paper.path("M54.066,55.193c0-1.383-1.119-2.502-2.5-2.502c-1.381,0-2.5,1.119-2.5,2.502v16.082l-9.407-4.646   c-1.733-0.854-3.832-0.145-4.688,1.59c-0.856,1.732-0.146,3.832,1.588,4.688l12.785,6.309c0.5,0.246,1.028,0.363,1.549,0.363   c1.289,0,2.53-0.715,3.14-1.951c0.483-0.979,0.452-2.068,0.034-2.99L54.066,55.193L54.066,55.193z").attr({
        parent: 'Alarm',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathD');

    var pathE = paper.path("M74.4,88.818c2.977-4.588,4.697-10.063,4.662-15.939c-0.095-15.955-13.06-28.826-28.995-28.826c-0.059,0-0.118,0-0.177,0   C33.875,44.15,20.968,57.211,21.064,73.225c0.036,6.133,1.978,11.803,5.251,16.467l-5.996,6.066   c-0.776,0.787-0.77,2.051,0.015,2.828c0.392,0.385,0.9,0.576,1.408,0.576c0.516,0,1.031-0.197,1.422-0.592l5.684-5.754   c5.297,5.682,12.843,9.234,21.212,9.234c0.059,0,0.118-0.002,0.177-0.002c8.688-0.049,16.455-3.922,21.736-10.006l6.201,6.127   c0.389,0.385,0.896,0.578,1.404,0.578c0.516,0,1.031-0.199,1.423-0.594c0.778-0.785,0.771-2.057-0.017-2.83L74.4,88.818z    M50.21,97.051l-0.15,0.002c-13.153,0-23.917-10.703-23.995-23.855c-0.038-6.41,2.422-12.451,6.929-17.014   c4.506-4.559,10.518-7.092,16.925-7.131h0.15c0.001,0,0,0,0.001,0c13.151,0,23.917,10.703,23.995,23.857   c0.037,6.41-2.424,12.451-6.93,17.012C62.629,94.483,56.618,97.014,50.21,97.051z").attr({
        parent: 'Alarm',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathE');

    Alarm.attr({
        'id': 'Alarm',
        'name': 'Alarm'
    });

    var rsrGroups = [Alarm];
    Alarm.push(
		pathB,
		pathC,
		pathD,
		pathE
	);
}

function drawFifthPic(num) {
    //note
    var paper = Raphael(document.getElementById(num), 80, 120);
    var rectA = paper.rect(0, 0, 80, 120);

    rectA.attr({
        fill: 'none',
        'stroke-width': '0',
        'stroke-opacity': '1'
    }).data('id', 'rectA');

    var Music = paper.set();
    var pathB = paper.path("M80.874,85.99h0.058V39.844l0.021-0.153l-0.021,0.003V39.69l-0.049,0.009l-44.898,6.012h-0.003v36.461 c-1.777-0.568-3.777-0.798-5.862-0.595c-6.597,0.641-11.538,5.337-11.038,10.489c0.501,5.151,6.253,8.813,12.849,8.172 c6.598-0.643,11.539-5.337,11.038-10.49c-0.009-0.087-0.03-0.171-0.042-0.258h0.057V57.862l30.948-4.521V78.67 c-1.777-0.568-3.777-0.798-5.863-0.595c-6.598,0.642-11.539,5.338-11.039,10.49c0.5,5.151,6.253,8.813,12.849,8.172 c6.599-0.643,11.539-5.337,11.038-10.49C80.907,86.16,80.887,86.077,80.874,85.99z").attr({
        parent: 'Music',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathB');

    Music.attr({
        'id': 'Music',
        'name': 'Music'
    });

    var rsrGroups = [Music];
    Music.push(pathB);
}

function drawSixthPic(num) {
    //heart
    var paper = Raphael(document.getElementById(num), 80, 120);
    var rectB = paper.rect(0, 0, 80, 120);

    rectB.attr({
        fill: 'none',
        'stroke-width': '0',
        'stroke-opacity': '1'
    }).data('id', 'rectB');

    var Favorite = paper.set();
    Favorite.attr({
        'id': 'Favorite',
        'name': 'Favorite'
    });

    var groupA = paper.set();
    var pathC = paper.path("M64.697,39.515c0.904,0,1.867,0.05,2.898,0.149c6.27,0.612,13.52,6.353,14.403,17.353v3.661 c-0.822,10.528-8.771,23.516-32,39.809c-23.228-16.294-31.176-29.28-31.998-39.809v-3.661c0.883-11,8.133-16.739,14.402-17.353 c1.03-0.101,1.994-0.149,2.898-0.149c7.244,0,10.72,3.132,14.698,7.872C53.979,42.646,57.452,39.515,64.697,39.515 M64.697,46.515 c-4.162,0-5.898,1.275-9.336,5.372l-5.36,6.39l-5.363-6.391c-3.438-4.097-5.174-5.372-9.336-5.372 c-0.682,0-1.428,0.039-2.219,0.116c-2.894,0.283-7.396,3.364-8.082,10.688v3.063C25.853,69.577,34.256,80.151,50,91.854 C65.745,80.15,74.148,69.577,75,60.381v-3.063c-0.688-7.323-5.189-10.405-8.085-10.688C66.125,46.554,65.379,46.515,64.697,46.515 L64.697,46.515z").attr({
        parent: 'Favorite',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathC');

    groupA.attr({
        'parent': 'Favorite',
        'name': 'groupA'
    });

    var rsrGroups = [Favorite, groupA];
    Favorite.push();
    groupA.push(pathC);
}

function drawSeventhPic(num) {
    //house
    var paper = Raphael(document.getElementById(num), 80, 120);
    var rectA = paper.rect(0, 0, 80, 120);

    rectA.attr({
        fill: 'none',
        'stroke-width': '0',
        'stroke-opacity': '1'
    }).data('id', 'rectA');
    var Home = paper.set();

    var pathB = paper.path("M84.73,64.679l-12.598-9.615V39.156h-9v9.038L50,38.166L15.27,64.678l5.461,7.156l3.741-2.857v32.857h51.057V68.977   l3.74,2.855L84.73,64.679z M70.529,96.832H59v-19H41v19H29.471V65.794L50,50.119l20.529,15.676V96.832z").attr({
        parent: 'Home',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathB');

    Home.attr({
        'id': 'Home',
        'name': 'Home'
    });

    var rsrGroups = [Home];
    Home.push(
		pathB
	);
}

function drawEighthPic(num) {
    //camera
    var paper = Raphael(document.getElementById(num), 80, 120);
    var rectA = paper.rect(0, 0, 80, 120);

    rectA.attr({
        fill: 'none',
        'stroke-width': '0',
        'stroke-opacity': '1'
    }).data('id', 'rectA');
    var Photo = paper.set();

    var pathB = paper.path("M74.91,52.32l-4.123-5.772c-1.342-1.692-3.041-2.563-5.195-2.673h-6.094c-2.156,0.108-3.854,0.979-5.194,2.673   l-3.991,5.583H27c-5.5,0-10,4.5-10,10v23.999c0,5.5,4.5,10,10,10h46c5.5,0,10-4.5,10-10V62.13C83,57.285,79.504,53.218,74.91,52.32   z M58.371,49.454c-0.004-0.01,0.229-0.241,0.519-0.38c0.278-0.154,0.604-0.208,0.608-0.202h6.094   c0.005-0.008,0.328,0.048,0.609,0.202c0.286,0.14,0.52,0.37,0.518,0.378l1.912,2.679H56.459L58.371,49.454z M47.98,88.045   c-7.852,0-14.239-6.387-14.239-14.238c0-7.851,6.388-14.237,14.239-14.237c7.852,0,14.239,6.386,14.239,14.237   C62.221,81.658,55.832,88.045,47.98,88.045z M23,86.129V62.13c0-2.168,1.832-4,4-4h6.688c-4.258,3.884-6.945,9.459-6.945,15.676   c0,6.563,2.979,12.428,7.656,16.322H27C24.833,90.129,23,88.297,23,86.129z M77,86.129c0,2.168-1.832,4-4,4H61.563   c4.677-3.895,7.655-9.76,7.655-16.322c0-6.216-2.688-11.792-6.945-15.676H73c2.168,0,4,1.832,4,4V86.129z").attr({
        parent: 'Photo',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathB');

    Photo.attr({
        'id': 'Photo',
        'name': 'Photo'
    });

    var rsrGroups = [Photo];
    Photo.push(
		pathB
	);
}

function drawNinethPic(num) {
    //clock
    var paper = Raphael(document.getElementById(num), 80, 120);
    var rectA = paper.rect(0, 0, 80, 120);

    rectA.attr({
        fill: 'none',
        'stroke-width': '0',
        'stroke-opacity': '1'
    }).data('id', 'rectA');
    var Alarm = paper.set();

    var pathB = paper.path("M81.93,49.75c-0.039-6.559-5.389-11.842-11.945-11.803c-3.682,0.021-6.961,1.717-9.123,4.357l16.816,16.619   C80.293,56.73,81.95,53.432,81.93,49.75z").attr({
        parent: 'Alarm',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathB');

    var pathC = paper.path("M22.279,59.119l16.633-16.832c-2.193-2.527-5.429-4.123-9.037-4.104c-6.559,0.039-11.843,5.389-11.804,11.945   C18.093,53.74,19.728,56.955,22.279,59.119z").attr({
        parent: 'Alarm',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathC');

    var pathD = paper.path("M54.066,55.193c0-1.383-1.119-2.502-2.5-2.502c-1.381,0-2.5,1.119-2.5,2.502v16.082l-9.407-4.646   c-1.733-0.854-3.832-0.145-4.688,1.59c-0.856,1.732-0.146,3.832,1.588,4.688l12.785,6.309c0.5,0.246,1.028,0.363,1.549,0.363   c1.289,0,2.53-0.715,3.14-1.951c0.483-0.979,0.452-2.068,0.034-2.99L54.066,55.193L54.066,55.193z").attr({
        parent: 'Alarm',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathD');

    var pathE = paper.path("M74.4,88.818c2.977-4.588,4.697-10.063,4.662-15.939c-0.095-15.955-13.06-28.826-28.995-28.826c-0.059,0-0.118,0-0.177,0   C33.875,44.15,20.968,57.211,21.064,73.225c0.036,6.133,1.978,11.803,5.251,16.467l-5.996,6.066   c-0.776,0.787-0.77,2.051,0.015,2.828c0.392,0.385,0.9,0.576,1.408,0.576c0.516,0,1.031-0.197,1.422-0.592l5.684-5.754   c5.297,5.682,12.843,9.234,21.212,9.234c0.059,0,0.118-0.002,0.177-0.002c8.688-0.049,16.455-3.922,21.736-10.006l6.201,6.127   c0.389,0.385,0.896,0.578,1.404,0.578c0.516,0,1.031-0.199,1.423-0.594c0.778-0.785,0.771-2.057-0.017-2.83L74.4,88.818z    M50.21,97.051l-0.15,0.002c-13.153,0-23.917-10.703-23.995-23.855c-0.038-6.41,2.422-12.451,6.929-17.014   c4.506-4.559,10.518-7.092,16.925-7.131h0.15c0.001,0,0,0,0.001,0c13.151,0,23.917,10.703,23.995,23.857   c0.037,6.41-2.424,12.451-6.93,17.012C62.629,94.483,56.618,97.014,50.21,97.051z").attr({
        parent: 'Alarm',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathE');

    Alarm.attr({
        'id': 'Alarm',
        'name': 'Alarm'
    });

    var rsrGroups = [Alarm];
    Alarm.push(
		pathB,
		pathC,
		pathD,
		pathE
	);
}