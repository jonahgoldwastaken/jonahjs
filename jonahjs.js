var JonahJS = {
    text: "Jonah",
    image: "http://www.jonahjs.nl/pictures/jonah.jpg",
    init: function() {
        var textElements = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p, ul>li, span, a:not(:empty)");
        var imageElements = document.body.querySelectorAll("img");
        for (var i = 0; i < imageElements.length; i++) {
            setTimeout(changeAllImagesToJonah(i), 1000 * i);
        }
        for (i = 0; i < textElements.length; i++) {
            setTimeout(injectJonah(i), 100 * i);
        }
    },
    changeTextToJonah: function(currentElement) {
        currentElement.innerHTML += JonahJS.text + " ";
    },
    changeAllImages: function(index) {
        imageElements[index].src = JonahJS.image;
    },
    injectJonah: function(index) {
        var amntOfWords = textElements[index].innerHTML.split(' ').length;
        textElements[index].innerHTML = "";
        var currentTextElement = textElements[index];
        for (var i = 0; i < amntOfWords; i++) {
            setTimeout(function () {
                changeTextToJonah(currentTextElement);
            }, 25 * o);
        }
    }
}
