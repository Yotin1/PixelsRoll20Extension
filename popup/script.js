const dice1Btn = document.getElementById("dice1Btn");
const dice2Btn = document.getElementById("dice2Btn");
const dice1Result = document.getElementById("dice1Result");
const dice2Result = document.getElementById("diceResult");

function onResponse(response) {
    console.log(`Received ${response}`);
}

function onError(error) {
    console.log(`Error: ${error}`);
}

dice1Btn.addEventListener("click", function (e) {
    console.log("Sending:  ping");
    let sending = browser.runtime.sendNativeMessage("ping_pong", "ping");
    sending.then(onResponse, onError);
});
dice2Btn.addEventListener("click", function (e) {
    console.log("Sending:  ping");
    let sending = browser.runtime.sendNativeMessage("ping_pong", "ping");
    sending.then(onResponse, onError);
});
