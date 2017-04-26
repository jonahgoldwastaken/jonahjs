window.onload = function() {
    var elements = document.body.children;
    for (var i = 0; i < document.body.children.length / (Math.floor(Math.random() * 3 + 1)); i++) {
        var image = document.createElement("IMG");
        image.src = "http://www.jonahjs.nl/pictures/" + (Math.floor(Math.random() * 4)) + ".jpg";
        document.body.insertBefore(image, elements[Math.floor(Math.random() * elements.length)]);
    }
};
