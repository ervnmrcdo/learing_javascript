const destroy = { destructure: 23 };

const { destructure } = destroy;
console.log(destructure);

//document.title;
//document.body.addEventListener;
//document.querySelector;

console.log(typeof event);
//let obj = {
//  name: "shirt",
//  stars: 42,
//  nest: {
//    circles: "star",
//    flip: true,
//  },
//};
//
////console.log(JSON.stringify(ob));
//console.log(typeof JSON.parse(JSON.stringify(obj)));
//
//localStorage.setItem("msg1", "fuck");
//localStorage.setItem("msg2", "off");
//localStorage.setItem("msg3", "cunt");
//localStorage.getItem("msg3", "cunt");
//
//console.log(localStorage.length);
//localStorage.clear();
//console.log(localStorage.length);
//
//
//let score = {
//  wins: 0,
//  losses: 0,
//  tie: 0,
//};
//
//function playGame(playerMove) {
//  const computerMove = pickComputerMove();
//
//  let result = "";
//
//  if (playerMove === "scissors") {
//    if (computerMove === "rock") {
//      result = "You lose.";
//    } else if (computerMove === "paper") {
//      result = "You win.";
//    } else if (computerMove === "scissors") {
//      result = "Tie.";
//    }
//  } else if (playerMove === "paper") {
//    if (computerMove === "rock") {
//      result = "You win.";
//    } else if (computerMove === "paper") {
//      result = "Tie.";
//    } else if (computerMove === "scissors") {
//      result = "You lose.";
//    }
//  } else if (playerMove === "rock") {
//    if (computerMove === "rock") {
//      result = "Tie.";
//    } else if (computerMove === "paper") {
//      result = "You lose.";
//    } else if (computerMove === "scissors") {
//      result = "You win.";
//    }
//  }
//
//  switch (result) {
//    case "You win.":
//      score.wins += 1;
//    case "You lose.":
//      score.wins += 1;
//    case "Tie":
//      score.tie += 1;
//  }
//
//  console.log(
//    `You picked ${playerMove}. Computer picked ${computerMove}. ${result}, Wins: ${score.wins}, Tie: ${score.wins}, Losses: ${score.wins}`,
//  );
//}
//
//function pickComputerMove() {
//  const randomNumber = Math.random();
//
//  let computerMove = "";
//
//  if (randomNumber >= 0 && randomNumber < 1 / 3) {
//    computerMove = "rock";
//  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
//    computerMove = "paper";
//  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
//    computerMove = "scissors";
//  }
//
//  return computerMove;
//}
//
//playGame();
//
//function resetScore() {
//  score.wins, score.tie, (score.losses = 0);
//  console.log(score);
//}
//
//playGame("scissors");
//playGame("scissors");
//playGame("scissors");
//playGame("scissors");
//playGame("scissors");
//playGame("scissors");
//playGame("scissors");
//playGame("scissors");
//playGame("scissors");
//
//function taxCalculation(amount) {
//  return amount * 0.1;
//}
//
//console.log(taxCalculation(100));

//throw "hello";
//try {
//  throw "exception";
//} catch (err) {
//  console.error(err);
//}
