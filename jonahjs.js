var textElements = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p, ul>li, span, a:not(:empty)");
var imageElements = document.body.querySelectorAll("img");
var JonahJS = {
    text: "Jonah",
    image: "http://www.jonahjs.nl/pictures/jonah.jpg",
};
var t = -1;
var p = -1;

function changeTextToJonah(currentElement) {
    currentElement.innerHTML += JonahJS.text + " ";
}

function changeAllImagesToJonah() {
    p++
    imageElements[p].src = JonahJS.image;
}

function injectJonah() {
    t++;
    var amntOfWords = textElements[t].innerHTML.split(' ').length;
    textElements[t].innerHTML = "";
    var ding = textElements[t];
    for (var o = 0; o < amntOfWords; o++) {
        setTimeout(function() {
            changeTextToJonah(ding);
        }, 25 * o);
    }
}

JonahJS.init = function() {
    for (var i = 0; i < imageElements.length; i++) {
        setTimeout(changeAllImagesToJonah, 1000 * i);
    }
    for (i = 0; i < textElements.length; i++) {
        setTimeout(injectJonah, 100 * i);
    }
};
