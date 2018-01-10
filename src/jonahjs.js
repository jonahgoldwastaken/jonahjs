export const JonahJS = {
    text: 'Jonah',
    image: 'http://www.jonahjs.nl/pictures/jonah.jpg',
    init: function() {
        let textElements = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, p, ul>li, span, a:not(:empty), legend, i, small')
        this.textElementArray = Array.from(textElements)
        this.imageElements = document.body.querySelectorAll('img')

        for (let i = 0; i < this.textElementArray.length; i++) {
            if (this.textElementArray[i].children.length != 0) {
                for (let j = 0; j < this.textElementArray[i].children.length; j++) {
                    let el = this.textElementArray.indexOf(this.textElementArray[i].children[j], 0)
                    this.textElementArray[i].removeChild(this.textElementArray[i].children[j])
                    this.textElementArray.splice(el, 1)
                }
            }
            this.textElementArray[i].textLength = this.textElementArray[i].innerHTML.split(' ').length
            this.textElementArray[i].innerHTML = ''
        }

        for (let i = 0; i < this.imageElements.length; i++) {
            setTimeout(this.changeAllImages(i), 1000 * i)
        }
        for (let i = 0; i < this.textElementArray.length; i++) {
            setTimeout(this.injectJonah(i), 100 * i)
        }

        this.spamNotifications()
        this.playANiceSong()
    },
    changeTextToJonah: function(currentElement) {
        currentElement.innerHTML += JonahJS.text + ' '
    },
    changeAllImages: function(index) {
        let imageElements = document.body.querySelectorAll('img')
        imageElements[index].src = JonahJS.image
    },
    injectJonah: function(index) {
        let currentTextElement = this.textElementArray[index]
        for (let i = 0; i < this.textElementArray[index].textLength; i++) {
            setTimeout(function () {
                JonahJS.changeTextToJonah(currentTextElement)
            }, 25 * i)
        }
    },

    spamNotifications: function() {
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                let buttons = document.querySelectorAll('button, a')
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].addEventListener('click', function(e) {
                        e.preventDefault()
                        let n = new Notification('Whelp', {body: 'You really fucked it up this time...'})
                    })
                }
            } else if (permission === 'denied') {
                console.log('hoi')
                window.setInterval(function() {
                    alert('WAAROM?! WAAROM MAG IK GEEN BERICHTEN STUREN??!!')
                }, 1000)
                alert('WAAROM?! WAAROM MAG IK GEEN BERICHTEN STUREN??!!')
            }
        })
    },

    VibrateYourSocksOff: function() {
        window.setInterval(navigator.vibrate(400), 500)
    },

    playANiceSong: function() {
        let ac = new AudioContext()
        let oscillator = ac.createOscillator()
        let gain = ac.createGain()
        oscillator.frequency.value = 300
        oscillator.type = 'sine'
        oscillator.start(ac.currentTime)

        oscillator.connect(ac.destination)
        navigator.mediaSession.metadata = new MediaMetadata({
            title: 'Kutherrie',
            artist: 'Jonah Meijers',
            album: 'Kattengejank'
        })

        navigator.mediaSession.setActionHandler('pause', function() {
            alert('NEVER')
            gain.gain.value += 0.1
        })
    }
}
