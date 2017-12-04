export var JonahJS = {
    text: "Jonah",
    image: "http://www.jonahjs.nl/pictures/jonah.jpg",
    init: function() {
        var textElements = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p, ul>li, span, a:not(:empty), legend, i, small");
        this.textElementArray = Array.from(textElements);
        this.imageElements = document.body.querySelectorAll("img");

        for (var i = 0; i < this.textElementArray.length; i++) {
            if (this.textElementArray[i].children.length != 0) {
                for (var j = 0; j < this.textElementArray[i].children.length; j++) {
                    var el = this.textElementArray.indexOf(this.textElementArray[i].children[j], 0);
                    this.textElementArray[i].removeChild(this.textElementArray[i].children[j]);
                    this.textElementArray.splice(el, 1);
                }
            }
            this.textElementArray[i].textLength = this.textElementArray[i].innerHTML.split(' ').length;
            this.textElementArray[i].innerHTML = '';
        }

        for (var i = 0; i < this.imageElements.length; i++) {
            setTimeout(this.changeAllImages(i), 1000 * i);
        }
        for (var i = 0; i < this.textElementArray.length; i++) {
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
        var currentTextElement = this.textElementArray[index];
        for (var i = 0; i < this.textElementArray[index].textLength; i++) {
            setTimeout(function () {
                JonahJS.changeTextToJonah(currentTextElement);
            }, 25 * i);
        }
    }
}
