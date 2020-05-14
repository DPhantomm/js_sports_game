let teamOneShootButton = document.querySelector("#teamone-shoot-button");
let teamOneNumShots = document.querySelector("#teamone-numshots");
let teamOneGoals = document.querySelector("#teamone-numgoals");


let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");
let teamTwoNumShots = document.querySelector("#teamtwo-numshots");
let teamTwoGoals = document.querySelector("#teamtwo-numgoals");

let resetButton = document.querySelector("#reset-button");
let resetNumPresses = document.querySelector("#num-resets");
let isReset = false;
//Team one points
teamOneShootButton.addEventListener("click", function () {
    isReset = false;
    let randomChance = Math.floor((Math.random() * 12) + 1);
    // New Value
    let newCounterValue = Number(teamOneNumShots.innerHTML) + 1;
    let luckyNumber = 1;
    teamOneNumShots.innerHTML = newCounterValue;

    if (randomChance <= 5) {
        let newGoalValue = Number(teamOneGoals.innerHTML) + 1;
        teamOneGoals.innerHTML = newGoalValue;
    }
})
// Team two points
teamTwoShootButton.addEventListener("click", function () {
    isReset = false;
    let randomChance = Math.floor((Math.random() * 12) + 1);
    // New Value
    let newCounterValue = Number(teamTwoNumShots.innerHTML) + 1;
    let luckyNumber = 1;
    teamTwoNumShots.innerHTML = newCounterValue;

    if (randomChance <= 5) {
        let newGoalValue = Number(teamTwoGoals.innerHTML) + 1;
        teamTwoGoals.innerHTML = newGoalValue;
    }
})

resetButton.addEventListener("click", function () {
    let newResetValue = Number(resetNumPresses.innerHTML) + 1;
    resetNumPresses.innerHTML = newResetValue
    teamOneNumShots.innerHTML = 0;
    teamOneGoals.innerHTML = 0
    teamTwoNumShots.innerHTML = 0
    teamTwoGoals.innerHTML = 0
})