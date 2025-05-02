const dice = {
    d4: document.getElementById("d4"),
    d6: document.getElementById("d6"),
    d8: document.getElementById("d8"),
    d10: document.getElementById("d10"),
    d12: document.getElementById("d12"),
    d20: document.getElementById("d20"),
    d100: document.getElementById("d100"),
};

const advantage = {
    normal: document.getElementById("normal"),
    advantage: document.getElementById("advantage"),
    disadvantage: document.getElementById("disadvantage"),
};

const numRolls = document.getElementById("numRolls");
const modifier = document.getElementById("modifier");
const rollBtn = document.getElementById("rollBtn");

// Load state from local storage
if (localStorage.getItem("dice") !== null) {
    dice[localStorage.getItem("dice")].checked = true;
}

if (localStorage.getItem("advantage") !== null) {
    advantage[localStorage.getItem("advantage")].checked = true;
}

if (localStorage.getItem("numRolls") !== null) {
    numRolls.value = localStorage.getItem("numRolls");
}

if (localStorage.getItem("modifier") !== null) {
    modifier.value = localStorage.getItem("modifier");
}

for (let die of Object.values(dice)) {
    die.addEventListener("click", (e) => {
        localStorage.setItem("dice", e.target.value);
    });
}

for (let advOption of Object.values(advantage)) {
    advOption.addEventListener("click", (e) => {
        localStorage.setItem("advantage", e.target.value);
    });
}

numRolls.addEventListener("input", (e) => {
    localStorage.setItem("numRolls", e.target.value);
});

modifier.addEventListener("input", (e) => {
    localStorage.setItem("modifier", e.target.value);
});

// // Create WebSocket connection.
// const socket = new WebSocket("ws://localhost:8000");

// // Connection opened
// socket.addEventListener("open", (event) => {
//     socket.send("Hello Server!");
//     console.log("Hello World");
// });

// socket.addEventListener("error", (event) => {
//     console.log("WebSocket error: ", event);
// });

// // Listen for messages
// socket.addEventListener("message", (event) => {
//     console.log("Message from server ", event.data);
// });

// socket.addEventListener("close", (event) => {
//     console.log(event);
// });
