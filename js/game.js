let playerScore = 0;
let computerScore = 0;

function playGame(playerSelect) {
    const selection = ['rock', 'paper', 'scissors'];
    const computerSelect = selection[Math.floor(Math.random() * 3)];

    document.getElementById('player-choice').textContent = playerSelect;
    document.getElementById('computer-choice').textContent = computerSelect;

    let result = '';
    if (playerSelect === computerSelect) {
        result = "Draw! Both chose " + playerSelect;
    } else if (
        (playerSelect === 'rock' && computerSelect === 'scissors') ||
        (playerSelect === 'paper' && computerSelect === 'rock') ||
        (playerSelect === 'scissors' && computerSelect === 'paper')
    ) {
        result = "You win! " + playerSelect + " wins " + computerSelect;
        playerScore++;
    } else {
        result = "Computer wins! " + computerSelect + " wins " + playerSelect;
        computerScore++;
    }

    document.getElementById('result').textContent = result;
            document.getElementById('player-score').textContent = playerScore;
            document.getElementById('computer-score').textContent = computerScore;
}