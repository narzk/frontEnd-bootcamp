// 00:00

// set time (3 min)
// 2:59->2:58 -> ....-> 2:00 -> 1:59 -> 1:58 ->....-> 1:00


const minuteDom = document.querySelector(".timer_min")
const secDom = document.querySelector(".timer_sec")
const finishText = document.querySelector(".timer_text")
const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")


//input user
const INITIAL_MIN = 2
const INITIAL_SEC = 0

let min = INITIAL_MIN
let sec = INITIAL_SEC

let isReset = false
let counter = min * 60 + sec

// whole time in seconds

let timer = null


minuteDom.innerHTML = min < 10 ? `0${min}` : min
secDom.innerHTML = sec < 10 ? `0${sec}` : sec


const startTimer = () => {
  min = isReset ? INITIAL_MIN : min
  sec = isReset ? INITIAL_SEC : sec
  counter = min * 60 + sec

  timer = setInterval(() => {
    counting()
  }, 1000)
}

const stopTimer = () => {
    isReset=false;
  clearInterval(timer)
}

const resetTimer = () => {
  clearInterval(timer)
  isReset = true

  renderDom(INITIAL_MIN, INITIAL_SEC)
}

startBtn.addEventListener("click", startTimer)
stopBtn.addEventListener("click", stopTimer)
resetBtn.addEventListener("click", resetTimer)



const renderDom = (min, sec) => {
  if (min === 0 && sec === 0) {
    clearInterval(timer)
    finishText.innerHTML = "finished"
  }
  minuteDom.innerHTML = min < 10 ? "0" + min : min
  secDom.innerHTML = sec < 10 ? "0" + sec : sec
}

const counting = () => {
  counter = counter - 1
  min = Math.floor(counter / 60)
  sec = counter % 60

  renderDom(min, sec)
}
