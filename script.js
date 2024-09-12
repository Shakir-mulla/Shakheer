let score = 0;
const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");

function moveBox() {
    const x = Math.floor(Math.random() * (window.innerWidth - 50));
    const y = Math.floor(Math.random() * (window.innerHeight - 50));

    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
}

function updateScore() {
    score++;
    scoreDisplay.innerText = `Score: ${score}`;
}

box.addEventListener("click", () => {
    updateScore();
    moveBox();
});

// Initial position of the box
moveBox();
