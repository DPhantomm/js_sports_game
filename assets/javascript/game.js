let teamOneShootButton = document.querySelector("#teamone-shoot-button");
let teamOneNumShots = document.querySelector("#teamone-numshots");
let teamOneGoals = document.querySelector("#teamone-numgoals");


let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");
let teamTwoNumShots = document.querySelector("#teamtwo-numshots");
let teamTwoGoals = document.querySelector("#teamtwo-numgoals");

let resetButton = document.querySelector("#reset-button");
let resetNumPresses = document.querySelector("#num-resets");
let counter = document.querySelector("#counter");

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