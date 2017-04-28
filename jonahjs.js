var elements = document.body.getElementsByTagName("*");
var textElements = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, li");
var jonah = "Jonah ";
var t = -1;

function addJonah(currentElement) {
    currentElement.innerHTML += jonah;
}

function injectSauce() {
    t++;
    var amntOfWords = textElements[t].innerHTML.split(' ').length;
    textElements[t].innerHTML = "";
    var ding = textElements[t];
    for (var o = 0; o < amntOfWords; o++) {
        setTimeout(function() {
            addJonah(ding);
        }, 25 * o);
    }
}

window.onload = function() {
    for (var i = 0; i < elements.length / (Math.floor(Math.random() * 3 + 1)); i++) {
        setTimeout(function() {
            var selectedElement = elements[Math.floor(Math.random() * elements.length)];
            var image = document.createElement("IMG");
            image.src = "http://www.jonahjs.nl/pictures/" + (Math.floor(Math.random() * 4 + 1)) + ".jpg";
            image.style.width = "200px";
            image.style.height = "200px";
            selectedElement.parentNode.insertBefore(image, selectedElement);
        }, 200 * i);
    }
    for (i = 0; i < textElements.length; i++) {
        setTimeout(injectSauce, 100 * i);
    }
};
