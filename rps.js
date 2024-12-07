alert("Get 10 Points to Win the Game!")
let playerPoints = 0;
let aiPoints = 0;

function game(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const aiChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (userChoice === aiChoice) {
        result = `It's a Tie! Both Chose ${userChoice}`;
        document.getElementById("result").className = 'result tie';
    } else if (
        (userChoice === 'rock' && aiChoice === 'scissors') ||
        (userChoice === 'paper' && aiChoice === 'rock') ||
        (userChoice === 'scissors' && aiChoice === 'paper')
    ) {
        result = `You Win! You Chose ${userChoice} and Computer Chose ${aiChoice}`;
        playerPoints++;
        document.getElementById("result").className = 'result win';
    } else {
        result = `You Lose! You Chose ${userChoice} and Computer Chose ${aiChoice}`;
        aiPoints++;
        document.getElementById("result").className = 'result lose';
    }

    document.getElementById("result").innerText = result;
    updatePoints();

    if (playerPoints === 10 || aiPoints === 10) {
        endGame(playerPoints === 10 ? "Player" : "Computer");
    }
}

function updatePoints() {
    document.getElementById("points").innerText = `Player: ${playerPoints} | Computer: ${aiPoints}`;
}

function resetGame() {
    playerPoints = 0;
    aiPoints = 0;
    updatePoints();
    document.getElementById('result').innerText = '';
    document.getElementById('result').className = 'result';
}

function endGame(winner) {
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    popupContent.innerHTML = `<h2>${winner} Wins!</h2><p>Thanks for playing!</p><button onclick="resetPopup()">Play Again</button>`;
    popup.style.display = "flex";
}

function resetPopup() {
    document.getElementById("popup").style.display = "none";
    resetGame();
}
