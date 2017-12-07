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

        this.spamNotifications();
        this.playANiceSong();
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
    },

    spamNotifications: function() {
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                var buttons = document.querySelectorAll('button, a');
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].addEventListener('click', function(e) {
                        e.preventDefault();
                        var n = new Notification('Whelp', {body: 'You really fucked it up this time...'});
                    });
                }
            } else if (permission === 'denied') {
                console.log('hoi');
                window.setInterval(function() {
                    alert('WAAROM?! WAAROM MAG IK GEEN BERICHTEN STUREN??!!');
                }, 1000);
                alert('WAAROM?! WAAROM MAG IK GEEN BERICHTEN STUREN??!!');
            }
        });
    },

    VibrateYourSocksOff: function() {
        window.setInterval(navigator.vibrate(400), 500);
    },

    playANiceSong: function() {
        var ac = new AudioContext();
        var oscillator = ac.createOscillator();
        var gain = ac.createGain();
        oscillator.frequency.value = 300;
        oscillator.type = 'sine';
        oscillator.start(ac.currentTime);

        oscillator.connect(ac.destination);
        navigator.mediaSession.metadata = new MediaMetadata({
            title: 'Kutherrie',
            artist: 'Jonah Meijers',
            album: 'Kattengejank',
        });

        navigator.mediaSession.setActionHandler('pause', function() {
            alert('NEVER');
            gain.gain.value += 0.1;
        });
    }
}
