const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Invalid choice. Say rock, paper, or scissors.');
  };
};
const getComputerChoice = () => {
  let randNum = Math.floor(Math.random() * 3);
  return randNum === 0 ? 'rock' : (randNum === 1 ? 'paper' : 'scissors');
};
const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === 'bomb') {
    return 'You won';
  }
  if(userChoice === computerChoice) {
    return 'The game ended in a tie';
  };
  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'You lost.';
    } else {
      return 'You won';
    };
  };
  if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'You lost';
    } else {
      return 'You won';
    };
  };
  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'You lost';
    } else {
      return 'You won';
    };
  };
};
const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(`You played ${userChoice} and the computer played ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();