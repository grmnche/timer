const inputEl = document.querySelector('input')
const buttonStartEl = document.querySelector('.btn-start')

const secondsEl = document.querySelector('.seconds')
const minutesEl = document.querySelector('.minutes')
const hoursEl = document.querySelector('.hours')

let time = 0
let interval

inputEl.addEventListener('input', keyDownFunc)
    function keyDownFunc() {
        this.value = this.value.replace(/\D/g, '')
}

buttonStartEl.addEventListener('click', () => {
    time = Number(inputEl.value)
    clearInterval(interval)
  
    interval = setInterval(createTimerAnimator, 1000)
    inputEl.value = ''
    inputEl.placeholder = 'The countdown is on...'
}
)

function createTimerAnimator() {

    let hours = Math.floor(time / 60 / 60),
        minutes = Math.floor(time / 60),
        seconds = time % 60

        // Секунды
        if (seconds > 59) {
            secondsEl.innerText = '0' - seconds
        }
        if(seconds < 60) {
            secondsEl.innerText = seconds
        }
        if(seconds < 10) {
            secondsEl.innerText = '0' + seconds
        }
        if(seconds < 0) {
            minutes--
            minutesEl.innerText = '0' + minutes
            seconds = 0
            secondsEl.innerText = '0' + seconds
        }

        // Минуты
        if (minutes > 59) {
            minutesEl.innerText = minutes - (hours * '60')
        }
        if(minutes < 60) {
            minutesEl.innerText = minutes
        }
        if(minutes < 10) {
            minutesEl.innerText = '0' + minutes
        }
        if(minutes < 0) {
            hours--
            hoursEl.innerText = '0' + hours
            minutes = 0
            minutesEl.innerText = '0' + minutes
        }

        // Часы
        if (hours > 24) {
            hoursEl.innerText = hours
        }
        if(hours < 24) {
            hoursEl.innerText = hours
        }
        if(hours < 10) {
            hoursEl.innerText = '0' + hours
        }
        if(hours < 1) {
            hours = 0
            hoursEl.innerText = '0' + hours
        }

        if(hours < 1, minutes < 1, seconds < 1) {
            inputEl.placeholder = 'The countdown is over...'
        }

        time--
}




