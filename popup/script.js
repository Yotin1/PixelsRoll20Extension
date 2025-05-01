const dice1Btn = document.getElementById("dice1Btn");
const dice2Btn = document.getElementById("dice2Btn");
const dice1Result = document.getElementById("dice1Result");
const dice2Result = document.getElementById("dice2Result");

// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8000");

// Connection opened
socket.addEventListener("open", (event) => {
    socket.send("Hello Server!");
    console.log("Hello World");
});

socket.addEventListener("error", (event) => {
    console.log("WebSocket error: ", event);
});

// Listen for messages
socket.addEventListener("message", (event) => {
    console.log("Message from server ", event.data);
});

socket.addEventListener("close", (event) => {
    console.log(event);
});

// dice1Btn.addEventListener("click", function (e) {
//     console.log("Sending:  ping");
//     port.postMessage("ping");
// });

// dice2Btn.addEventListener("click", function (e) {
//     console.log("Sending:  ping");
//     port.postMessage("ping");
// });
