export var JonahJS = {
    text: "Jonah",
    image: "http://www.jonahjs.nl/pictures/jonah.jpg",
    init: function() {
        var textElements = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p, ul>li, span, a:not(:empty), legend");
        var imageElements = document.body.querySelectorAll("img");
        for (var i = 0; i < imageElements.length; i++) {
            setTimeout(this.changeAllImages(i), 1000 * i);
        }
        for (i = 0; i < textElements.length; i++) {
            setTimeout(this.injectJonah(i), 100 * i);
        }
    },
    changeTextToJonah: function(currentElement) {
        currentElement.innerHTML += JonahJS.text + " ";
    },
    changeAllImages: function(index) {
        var imageElements = document.body.querySelectorAll("img");
        imageElements[index].src = JonahJS.image;
    },
    injectJonah: function(index) {
        var textElements = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p, ul>li, span, a:not(:empty), legend");
        var amntOfWords = textElements[index].innerHTML.split(' ').length;
        textElements[index].innerHTML = "";
        var currentTextElement = textElements[index];
        for (var i = 0; i < amntOfWords; i++) {
            setTimeout(function () {
                JonahJS.changeTextToJonah(currentTextElement);
            }, 25 * i);
        }
    }
}
