var elements = document.body.getElementsByTagName("*");
window.onload = function() {
    for (var i = 0; i < elements.length / (Math.floor(Math.random() * 3 + 1)); i++) {
        setTimeout(function() {
            var selectedElement = elements[Math.floor(Math.random() * elements.length)];
            console.log(selectedElement);
            var image = document.createElement("IMG");
            image.src = "http://www.jonahjs.nl/pictures/" + (Math.floor(Math.random() * 4 + 1)) + ".jpg";
            image.style.width = "200px";
            image.style.height = "200px";
            selectedElement.parentNode.insertBefore(image, selectedElement);
        }, 900*i);
    }
};
