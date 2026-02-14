const homeScore = document.querySelector("#home-boxscore")
const awayScore = document.querySelector("#away-boxscore")
const btnHomeOne = document.querySelector("#btn-home-one")
const btnAwayOne = document.querySelector("#btn-away-one")
const btnHomeTwo = document.querySelector("#btn-home-two")
const btnAwayTwo = document.querySelector("#btn-away-two")
const btnHomeThree = document.querySelector("#btn-home-three")
const btnAwayThree = document.querySelector("#btn-away-three")

let countH = 0
btnHomeOne.addEventListener("click", function() {
    countH += 1
    homeScore.textContent = countH
})

btnHomeTwo.addEventListener("click", function() {
    countH += 2
    homeScore.textContent = countH
})

btnHomeThree.addEventListener("click", function() {
    countH += 3
    homeScore.textContent = countH
})

let countA = 0
btnAwayOne.addEventListener("click", function() {
    countA += 1
    awayScore.textContent = countA
})

btnAwayTwo.addEventListener("click", function() {
    countA += 2
    awayScore.textContent = countA
})

btnAwayThree.addEventListener("click", function() {
    countA += 3
    awayScore.textContent = countA
})