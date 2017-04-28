var elements = document.body.getElementsByTagName("*");
var textElements = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, li");
var jonah = "Jonah ";
var t = 0;
window.onload = function() {
    for (var i = 0; i < elements.length / (Math.floor(Math.random() * 3 + 1)); i++) {
        setTimeout(function() {
            var selectedElement = elements[Math.floor(Math.random() * elements.length)];
            var image = document.createElement("IMG");
            image.src = "http://www.jonahjs.nl/pictures/" + (Math.floor(Math.random() * 4 + 1)) + ".jpg";
            image.style.width = "200px";
            image.style.height = "200px";
            selectedElement.parentNode.insertBefore(image, selectedElement);
        }, 900 * i);
    }
    for (i = 0; i < textElements.length; i++) {
        setTimeout(injectSauce, 900 * i);
    }
};

function injectSauce() {
    var amntOfWords = textElements[t].innerHTML.split(' ').length;
    textElements[t].innerHTML = "";
    for (i = 0; i < amntOfWords; i++) {
        textElements[t].innerHTML += jonah;
    }
    t++;
}
