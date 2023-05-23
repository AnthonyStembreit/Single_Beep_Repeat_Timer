let number = document.getElementById("number")
let intervalType = document.getElementById("type")
let startBtn = document.getElementById("start_btn")
let htmlCountDown = document.getElementById("countdown")
let htmlTimerSection = document.getElementById("timer")
let miliseconds;
let visibleCountdown;

startBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("input " + number.value)
    console.log("input " + intervalType.value)
    htmlTimerSection.setAttribute("style", "display:flex")
    calculateMiliseconds(number.value, intervalType.value)
})

function calculateMiliseconds(num, type) {
    if (type === "Seconds") {
        miliseconds = num * 1000
        visibleCountdown = num
        
        let countDown = setInterval(() => {
            visibleCountdown--
            htmlCountDown.innerText = visibleCountdown +1
        }, 1000)
        let actualTime = setInterval(() => {
            visibleCountdown = miliseconds / 1000 
        }, miliseconds)

    }
    else {
        console.log("not seconds")
    }

}

