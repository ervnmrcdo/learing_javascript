let score = JSON.parse(`${localStorage.getItem("score")}`) || {
  wins: 0,
  losses: 0,
  tie: 0,
};
document.querySelector(".onscreen-score").innerText =
  `Wins:${score.wins}, Losses:${score.losses}, Tie:${score.tie}`;

function prevGameResult(playerMove, computerMove, result) {
  document.querySelector(".rps-result").innerHTML = `${result}`;
  document.querySelector(".rps-choice").innerHTML =
    `You<img src="./images/${playerMove}.png" alt="your-result" class="move-icon" />
          <img src="./images/${computerMove}.png" class="move-icon" alt="comp-result" />Computer `;
  //`You: ${playerMove} - Computer: ${computerMove}`;
}
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }

  switch (result) {
    case "You win.":
      score.wins += 1;
      break;
    case "You lose.":
      score.losses += 1;
      break;
    case "Tie.":
      score.tie += 1;
      break;
    default:
      throw new error();
  }

  localStorage.setItem("score", JSON.stringify(score));

  prevGameResult(playerMove, computerMove, result);
  document.querySelector(".onscreen-score").innerText =
    `Wins:${score.wins}, Losses:${score.losses}, Tie:${score.tie}`;
  //alert(
  //  `You picked ${playerMove}. Computer picked ${computerMove}. ${result}, Wins: ${score.wins}, Tie: ${score.tie}, Losses: ${score.losses}`,
  //);
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

function resetScore() {
  score.wins = score.tie = score.losses = 0;
  localStorage.removeItem("score");
  document.querySelector(".onscreen-score").innerText =
    `Wins:${score.wins}, Losses:${score.losses}, Tie:${score.tie}`;
  //alert(`${score.wins}, ${score.wins}, ${score.tie},`);
}
