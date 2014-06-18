startClock();
var allCards = document.querySelectorAll('div'),
    flippedImagesUntilNow = [], // the array of images on flipped cards
    flippedCardsUntilNow = [], // the array of flipped cards' ID-s
    flippedCardsCount = 0, // all flipped cards until now 
    sameImagesFlippedSound = new Sound('Sounds/same.mp3', 100, false),
    sameIvoImagesFlippedSound = new Sound('Sounds/siren.mp3', 100, false),
    differentImagesFlippedSound = new Sound('Sounds/different.mp3', 100, false),
    ivoImageId = 0;

// the function is started when you click on a card
function flipCard(currentCard, imageName) {
    assignPicsToDivs(currentCard.className, currentCard.id);

    if (flippedCardsUntilNow.length === 0) {
        addNewCardToFlipped(currentCard);
    } else if (flippedCardsUntilNow.length === 1) {
        addNewCardToFlipped(currentCard);
        
        if (flippedCardsUntilNow[0].className === flippedCardsUntilNow[1].className) {
            if (flippedCardsUntilNow[0].id == ivoImageId || flippedCardsUntilNow[1].id == ivoImageId) {
                var divOnTop = document.createElement('div');
                divOnTop.classList.add('blink');
                divOnTop.style.height = '100%';
                divOnTop.style.width = '100%';
                divOnTop.style.position = 'absolute';
                divOnTop.style.top = '0';
                divOnTop.style.backgroundColor = '#627BAE';
                divOnTop.style.zIndex = '1000';
                document.body.appendChild(divOnTop);

                sameIvoImagesFlippedSound.start();
                blink();
            }
            else {
                sameImagesFlippedSound.start();
                enlargePic();
                flippedCardsCount += 2;
                clearFlipped();
            }
        } else {
            differentImagesFlippedSound.start();
            setTimeout(function () {
                removeDrawnPics();
                clearFlipped();
            }, 1000);
        }

        if (flippedCardsCount === 20) {
            alert("CONGRATULATIONS, YOU WON! LET'S PLAY AGAIN!");
            reload();
        }
    } 
}

//reloads the whole screen
function reload() {
    location.reload(true);
}

//removes the drawn pictures if they are not the same
function removeDrawnPics() {
    var sth = flippedCardsUntilNow;
    var element = sth[0].getElementsByTagName('svg');
    for (index = 0; index < element.length; index++) {
        element[index].parentNode.removeChild(element[index]);
    }

    element = sth[1].getElementsByTagName('svg');
    for (index = 0; index < element.length; index++) {
        element[index].parentNode.removeChild(element[index]);
    }
}

//if the turned pictures are not the same waits for 1 second
function sleep(seconds) {
    var e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) { }
}

// adds a new card to the array of currently flipped cards and a new image to the array of currently flipped images
function addNewCardToFlipped(currentCard) {
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

//picks the same cards and makes them smaller and than large again 2 times
function enlargePic() {
    var $samePics = $('.' + flippedCardsUntilNow[0].className);
    for (var i = 0; i < 2; i++) {
        $samePics.resize();
    }

    $samePics.explode();
}

//the function which resizes the pictures
(function ($) {
    $.fn.resize = function () {
        var $this = $(this);

        $this.animate({
            height: ("toggle"),
            width: ("toggle")
        }, 1000);

        $this.animate({
            height: ("toggle"),
            width: ("toggle")
        }, 1000);

    }
}(jQuery));

//the function which explodes the pictures
(function ($) {
    $.fn.explode = function () {
        var $this = $(this);

        $this.toggle("explode");
    }
}(jQuery));

function blink() {
    setInterval(function () {
        $(".blink").css("background-color", function () {
            this.switch = !this.switch
            return this.switch ? "red" : ""
        });
    }, 100)
}

// DRAWING PICTURES

// Ivo
function drawZeroPic(num) {
    ivoImageId = num;

    var paper = Raphael(document.getElementById(num), 80, 120);

    var rectangle = paper.rect(0, 0, 80, 120);

    var img = paper.image('Images/ivo.jpg', 0, 0, 80, 120);

    rectangle.attr(
        {
            "stroke-width": 0
        }
    );

    var radius = 10;

    var img = paper.image('Images/ivo.png', 1, 0, 82, 121, radius);
}

// joystick_
function drawFirstPic(num) {
    var paper = Raphael(document.getElementById(num), 80, 120);
    var games = paper.set();

    var pathA = paper.path("M66.277,46.301c-8.451-13.889-21.188-4.227-21.188-4.227c-0.824,0.625-2.347,1.137-3.382,1.141h-3.412   c-1.035,0.004-2.558-0.51-3.383-1.135c0,0-12.736-9.664-21.188,4.225C5.273,60.188,8.678,75.309,8.678,75.309   c0.599,3.701,2.564,6.172,6.277,5.861c3.701-0.309,11.734-9.969,11.734-9.969c0.663-0.795,2.051-1.445,3.086-1.445l20.448-0.004   c1.034,0,2.424,0.65,3.086,1.445c0,0,8.033,9.66,11.739,9.969c3.707,0.313,5.681-2.16,6.271-5.861   C71.318,75.305,74.73,60.188,66.277,46.301z M33.453,51.865v4.357v0.375h-0.375h-4.375v4.375v0.375h-0.375h-4.367h-0.375v-0.375   v-4.375h-4.371h-0.376v-0.375v-4.357V51.49h0.376h4.371v-4.379v-0.375h0.375h4.367h0.375v0.375v4.379h4.375h0.375V51.865z    M52.43,62.422c-1.923,0-3.47-1.551-3.47-3.471s1.547-3.471,3.47-3.471c1.911,0,3.473,1.551,3.473,3.471   S54.341,62.422,52.43,62.422z M52.43,52.875c-1.923,0-3.47-1.553-3.47-3.473s1.547-3.469,3.47-3.469   c1.911,0,3.473,1.549,3.473,3.469S54.341,52.875,52.43,52.875z M61.072,58c-1.922,0-3.471-1.553-3.471-3.473   s1.549-3.469,3.471-3.469c1.912,0,3.472,1.549,3.472,3.469S62.984,58,61.072,58z").attr({
        parent: 'games',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathA');

    games.attr({
        'id': 'games',
        'name': 'games'
    });

    var rsrGroups = [games];
    games.push(
        pathA
    );
}

// clock_
function drawSecondPic(num) {
    var paper = Raphael(document.getElementById(num), 80, 120);

    var alarm = paper.set();
    var pathA = paper.path("M71.928,39.75c-0.038-6.559-5.388-11.842-11.945-11.803c-3.68,0.021-6.959,1.717-9.122,4.359l16.817,16.619   C70.294,46.73,71.949,43.432,71.928,39.75z").attr({
        parent: 'alarm',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathA');

    var pathB = paper.path("M12.28,49.119l16.633-16.832c-2.193-2.527-5.429-4.123-9.037-4.102c-6.559,0.039-11.843,5.387-11.804,11.945   C8.093,43.74,9.727,46.955,12.28,49.119z").attr({
        parent: 'alarm',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathB');

    var pathC = paper.path("M44.067,45.193c0-1.381-1.119-2.502-2.5-2.502c-1.381,0-2.5,1.121-2.5,2.502v16.082l-9.407-4.645   c-1.733-0.855-3.832-0.145-4.688,1.59c-0.856,1.732-0.146,3.832,1.588,4.688l12.785,6.309c0.499,0.246,1.027,0.363,1.548,0.363   c1.29,0,2.531-0.715,3.139-1.951c0.483-0.979,0.452-2.068,0.034-2.99V45.193z").attr({
        parent: 'alarm',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathC');

    var pathD = paper.path("M64.401,78.818c2.977-4.588,4.697-10.063,4.663-15.939c-0.096-15.955-13.062-28.826-28.996-28.826   c-0.059,0-0.118,0-0.177,0c-16.016,0.096-28.923,13.158-28.827,29.172c0.036,6.131,1.978,11.801,5.251,16.465l-5.996,6.068   c-0.776,0.787-0.77,2.051,0.015,2.828c0.392,0.385,0.9,0.576,1.408,0.576c0.516,0,1.031-0.197,1.422-0.592l5.684-5.754   c5.297,5.682,12.843,9.236,21.212,9.236c0.059,0,0.118-0.002,0.177-0.002C48.925,92,56.693,88.127,61.973,82.043l6.201,6.127   c0.388,0.385,0.896,0.578,1.403,0.578c0.517,0,1.032-0.199,1.423-0.594c0.778-0.785,0.77-2.055-0.015-2.83L64.401,78.818z    M40.21,87.051l-0.15,0.002c-13.153,0-23.917-10.703-23.995-23.857c-0.038-6.41,2.422-12.451,6.929-17.012   c4.506-4.559,10.518-7.092,16.925-7.131h0.15c0.001,0,0,0,0.001,0c13.151,0,23.917,10.703,23.995,23.857   c0.038,6.41-2.424,12.451-6.929,17.012C52.629,84.482,46.618,87.014,40.21,87.051z").attr({
        parent: 'alarm',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathD');

    alarm.attr({
        'id': 'alarm',
        'name': 'alarm'
    });

    var rsrGroups = [alarm];
    alarm.push(
        pathA,
        pathB,
        pathC,
        pathD
    );
}

// house_
function drawThirdPic(num) {
    var paper = Raphael(document.getElementById(num), 80, 120);
    var home = paper.set();

    var pathA = paper.path("M74.73,54.681l-12.597-9.617V29.156h-9v9.038L40,28.167L5.269,54.679l5.461,7.155l3.741-2.856v32.856H65.53V58.979   l3.739,2.855L74.73,54.681z M60.53,86.834H49.001v-19H31v19H19.471V55.796L40,40.12l20.53,15.676V86.834z").attr({
        parent: 'home',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathA');

    home.attr({
        'id': 'home',
        'name': 'home'
    });

    var rsrGroups = [home];
    home.push(
        pathA
    );
}

// scissors_
function drawFourthPic(num) {
    var paper = Raphael(document.getElementById(num), 80, 120);
    var cut = paper.set();

    var pathA = paper.path("M56.269,69c-2.421,0-4.663,0.752-6.517,2.029l-3.902-4.646c2.885-1.123,5.955-2.785,7.716-5.133c4-5.334,13.166-18,14-21.5   C68.398,36.25,66.398,28,66.398,28L40,59.42L13.602,28c0,0-2,8.25-1.166,11.75c0.833,3.5,10,16.166,14,21.5   c1.761,2.348,4.831,4.01,7.715,5.133l-3.902,4.645C28.396,69.75,26.153,69,23.732,69c-6.352,0-11.5,5.148-11.5,11.5   c0,6.35,5.148,11.5,11.5,11.5s11.5-5.15,11.5-11.5c0-2.162-0.607-4.178-1.645-5.906l5.228-6.219c0,0,0.447-0.076,1.185-0.238   c0.738,0.162,1.185,0.238,1.185,0.238l5.228,6.219c-1.037,1.729-1.645,3.744-1.645,5.906c0,6.35,5.148,11.5,11.5,11.5   s11.5-5.15,11.5-11.5C67.769,74.148,62.62,69,56.269,69z M23.732,86c-3.033,0-5.5-2.467-5.5-5.5s2.467-5.5,5.5-5.5   s5.5,2.467,5.5,5.5S26.765,86,23.732,86z M56.269,86c-3.033,0-5.5-2.467-5.5-5.5s2.467-5.5,5.5-5.5s5.5,2.467,5.5,5.5   S59.302,86,56.269,86z").attr({
        parent: 'cut',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathA');

    cut.attr({
        'id': 'cut',
        'name': 'cut'
    });

    var rsrGroups = [cut];
    cut.push(
        pathA
    );
}

// phone_
function drawFifthPic(num) {
    var paper = Raphael(document.getElementById(num), 80, 120);
    var phone = paper.set();

    var pathA = paper.path("M48.998,36.012H33.443l-0.004-4.516c-0.004-1.934-1.57-3.5-3.502-3.496c-1.932,0-3.498,1.57-3.496,3.5l0.006,5.627   c-3.223,1.664-5.441,5.025-5.441,8.885v18.684c0,5.5,0.9,13.893,2,18.65c1.101,4.762,6.5,8.654,12,8.654h9.988   c5.5,0,10.899-4.004,12-8.893c1.1-4.895,2-13.395,2-18.895V46.012C58.994,40.512,54.496,36.012,48.998,36.012z M40.002,84.375   c-2.173,0-3.938-1.766-3.938-3.938s1.765-3.934,3.938-3.934c2.176,0,3.934,1.762,3.934,3.934S42.178,84.375,40.002,84.375z    M52.298,59.066c0,1.1-0.899,2-1.998,2H29.711c-1.099,0-2-0.9-2-2V46.537c0-1.104,0.901-2,2-2H50.3c1.099,0,1.998,0.896,1.998,2   V59.066z").attr({
        parent: 'phone',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathA');

    phone.attr({
        'id': 'phone',
        'name': 'phone'
    });

    var rsrGroups = [phone];
    phone.push(
        pathA
    );
}

// photo_
function drawSixthPic(num) {
    var paper = Raphael(document.getElementById(num), 80, 120);
    var photo = paper.set();

    var pathA = paper.path("M64.911,42.318l-4.124-5.772c-1.341-1.692-3.041-2.565-5.195-2.673h-6.093c-2.156,0.108-3.854,0.981-5.195,2.673   l-3.991,5.583H17.001c-5.5,0-10,4.5-10,10v23.999c0,5.5,4.5,10,10,10H63c5.5,0,10-4.5,10-10V52.129   C73,47.283,69.505,43.217,64.911,42.318z M48.372,39.452c-0.005-0.01,0.229-0.241,0.518-0.38c0.278-0.154,0.604-0.208,0.609-0.202   h6.093c0.005-0.008,0.329,0.048,0.609,0.202c0.287,0.14,0.52,0.37,0.518,0.378l1.913,2.679H46.46L48.372,39.452z M37.982,78.044   c-7.852,0-14.239-6.388-14.239-14.239c0-7.851,6.388-14.238,14.239-14.238c7.851,0,14.238,6.387,14.238,14.238   C52.221,71.656,45.833,78.044,37.982,78.044z M13.001,76.128V52.129c0-2.168,1.832-4,4-4h6.688   c-4.258,3.884-6.945,9.459-6.945,15.676c0,6.563,2.979,12.427,7.656,16.323h-7.398C14.833,80.128,13.001,78.297,13.001,76.128z    M67,76.128c0,2.169-1.832,4-4,4H51.565c4.676-3.896,7.655-9.76,7.655-16.323c0-6.216-2.688-11.792-6.945-15.676H63   c2.168,0,4,1.832,4,4V76.128z").attr({
        parent: 'photo',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathA');

    photo.attr({
        'id': 'photo',
        'name': 'photo'
    });

    var rsrGroups = [photo];
    photo.push(
        pathA
    );
}

// autospeaker
function drawSeventhPic(num) {
    var paper = Raphael(document.getElementById(num), 80, 120);
    var Announcement = paper.set();

    var pathA = paper.path("M69.52,43.772c-0.393,0-0.813,0.08-1.253,0.25l-9.373,3.602c-0.689-0.572-1.449-1.029-2.248-1.318L13.641,30.722   c-0.631-0.229-1.238-0.336-1.807-0.336C9.61,30.386,8,32.05,8,34.679v42.391c0,2.6,1.567,4.232,3.741,4.232   c0.584,0,1.213-0.119,1.866-0.367l27.432-10.445c0.236,0.674,0.584,1.467,1.106,2.291c1.265,2.066,3.943,4.266,7.995,4.266   c0.039,0,0.077,0,0.115,0c0.109-0.002,0.222-0.012,0.332-0.016c0.047,0.152,0.094,0.297,0.14,0.43l6.098,11.357   c0.601,0.922,1.753,1.064,2.561,0.316l7.296-6.756c0.808-0.748,0.972-2.111,0.366-3.029l-2.798-5.377   c-0.367-1.037-0.812-2.773-0.986-3.859l-0.655-4.631c-0.031-0.828-0.051-2.109-0.053-2.811l5.711,2.195   c0.438,0.168,0.86,0.248,1.253,0.248c1.442,0,2.48-1.082,2.48-2.813V46.587C72,44.856,70.962,43.772,69.52,43.772z M14,37.235   l40.602,14.713c0.195,0.07,0.407,0.225,0.613,0.424c-0.035,0.23-0.063,0.463-0.063,0.691v2.762c0,0.699,0.186,1.422,0.484,2.111   c-0.333,0.461-0.738,0.855-1.092,0.99L14,74.364V37.235z M45.514,70.624c-0.345-0.539-0.579-1.098-0.732-1.561l4.147-1.578   l0.75,5.521C47.36,72.819,46.313,71.784,45.514,70.624z").attr({
        parent: 'Announcement',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathA');

    Announcement.attr({
        'id': 'Announcement',
        'name': 'Announcement'
    });

    var rsrGroups = [Announcement];
    Announcement.push(
        pathA
    );
}

// shopping cart_
function drawEighthPic(num) {
    var paper = Raphael(document.getElementById(num), 80, 120);
    var shoppingCart = paper.set();

    var pathA = paper.path("M71.75,70.002L22.5,69.999v-2.428l45.232-5.988c2.418-0.389,4.086-2.292,4.154-4.74V41.917c-0.01-2.493-2.01-4.491-4.5-4.5   H22.5V34c-0.012-3.046-2.451-5.486-5.5-5.5H8.25c-1.933,0-3.499,1.568-3.499,3.501S6.317,35.5,8.25,35.5h7.25v36   c0.014,3.048,2.453,5.488,5.5,5.499h50.75c1.933,0,3.499-1.566,3.499-3.498C75.249,71.568,73.683,70.002,71.75,70.002z    M42.192,59.92l-8.597,1.139V42.418h8.597V59.92z M46.193,42.418h8.596v15.834l-8.596,1.138V42.418z M66.885,56.65l-8.096,1.072   V42.418h8.096V56.65z M29.597,42.418v19.17L22.5,62.527V42.418H29.597z").attr({
        parent: 'shoppingCart',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathA');

    var circleB = paper.circle(31, 84, 6).attr({
        parent: 'shoppingCart',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'circleB');

    var circleC = paper.circle(64, 84, 6).attr({
        parent: 'shoppingCart',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'circleC');

    shoppingCart.attr({
        'id': 'shoppingCart',
        'name': 'shoppingCart'
    });

    var rsrGroups = [shoppingCart];
    shoppingCart.push(
        pathA,
        circleB,
        circleC
    );
}

// envelope
function drawNinethPic(num) {
    var paper = Raphael(document.getElementById(num), 80, 120);

    var email = paper.set();

    var pathA = paper.path("M7,36.001v47.998h66V36.001H7z M40,66.748l8.317-5.985l17.475,18.236H14.199l17.485-18.236L40,66.748z M40,58.124   L18.984,43.001h42.031L40,58.124z M29.224,58.993L12,76.957V46.599L29.224,58.993z M68,76.965L50.777,58.992L68,46.599V76.965z").attr({
        parent: 'email',
        'stroke-width': '0',
        'stroke-opacity': '1',
        'fill': '#000000'
    }).data('id', 'pathA');

    email.attr({
        'id': 'email',
        'name': 'email'
    });

    var rsrGroups = [email];
    email.push(
        pathA
    );
}


//DRAWING THE CLOCK
function startClock () {
    var cvs, ctx, W, H, mem, StopWatch, Button, mouse;
    mem = {};
    mouse = { x: -10, y: -10, down: false };
    cvs = document.createElement('canvas');
    cvs.style.position = 'fixed'
    cvs.style.left = "-350px";
    cvs.style.top = "20px";
    cvs.width = W = 1040;
    cvs.height = H = 80;
    (function appendCanvas() {
        if (document.body) document.body.appendChild(cvs);
        else setTimeout(appendCanvas, 100);
    })();
    ctx = cvs.getContext('2d');
    function add(o) {
        o.id = Math.floor(Math.random() * 10000).toString(36);
        for (var i in mem) {
            if (mem.hasOwnProperty(i) && i == o.id) {
                add(o);
                return false;
            }
        }
        mem[o.id] = o;
    };
    function remove(o) {
        delete mem[o.id];
    };
    function StopWatch() {
        var started = true,
            time = [[0], [0, 0], [0, 0], [0, 0]];
        this.run = function () {
            var output,
                h = time[0],
                m = time[1],
                s = time[2],
                ms = time[3];
            if (started) {
                ms[1]++;
                if (ms[1] > 9) { ms[1] = 0; ms[0]++; }
                if (ms[0] > 9) { ms[0] = 0; s[1]++; }
                if (s[1] > 9) { s[1] = 0; s[0]++; }
                if (s[0] > 5) { s[0] = 0; m[1]++; }
                if (m[1] > 9) { m[1] = 0; m[0]++; }
                if (m[0] > 5) { m[0] = 0; h[0]++; }
                if (h[0] > 23) { ms = [0, 0]; s = [0, 0]; m = [0, 0]; h[0] = 0; }
            }
            ctx.font = 'bold 36px monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#000';
            output = h[0] + ':' + m[0] + m[1] + ':' + s[0] + s[1] + '.' + ms[0] + ms[1];
            ctx.fillText(output, W / 2, 20);
        };
        add(this);        
    };

    function Button(x, y, t) {
        var x = x, y = y, w = 60, h = 30, t = t;
        this.run = function () {
            ctx.font = 'bold 16px monospace';
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            ctx.rect(x, y, w, h);           
            ctx.fillRect(x, y, w, h);
            ctx.fillStyle = '#000';
            ctx.fillText(t, x + w / 2, y + h / 2);
        };
        add(this);
    };
    (function init() {
        new StopWatch();        
    })();
    (function loop() {        
        var a
        ctx.clearRect(0, 0, W, H);
        for (a in mem) if (mem.hasOwnProperty(a)) mem[a].run();        
        setTimeout(loop, 1000 / 100);
    })();
};

//IMPLEMENTING SOUND
function Sound(source, volume, loop) {
    this.source = source;
    this.volume = volume;
    this.loop = loop;
    var son;
    this.son = son;
    this.finish = false;
    this.stop = function () {
        document.body.removeChild(this.son);
    }
    this.start = function () {
        if (this.finish) return false;
        this.son = document.createElement("embed");
        this.son.setAttribute("src", this.source);
        this.son.setAttribute("hidden", "true");
        this.son.setAttribute("volume", this.volume);
        this.son.setAttribute("autostart", "true");
        this.son.setAttribute("loop", this.loop);
        document.body.appendChild(this.son);
    }
    this.remove = function () {
        document.body.removeChild(this.son);
        this.finish = true;
    }
    this.init = function (volume, loop) {
        this.finish = false;
        this.volume = volume;
        this.loop = loop;
    }
}
