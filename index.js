
// Toggle background audio
let audio = document.getElementById('background-audio');

document.getElementById('mute').addEventListener('click', (e) =>
{
  e = e || window.event;
  audio.muted = !audio.muted;
  e.preventDefault();
});

// Press yes or no to start the game. If you press yes the game will start and say 'Your journey will begin shortly' have it wait 3 seconds before changing the text. If no the game will say 'Dont worry, theres always next time.'

// Variables
const question = document.getElementById('question');
const yesBtn = document.getElementById('btn-yes');
const noBtn = document.getElementById('btn-no');
const btnContainer = document.querySelector('.btn-container')

// Introduction to the game.
  yesBtn.addEventListener('click', () => {
  question.innerText = `Your game will begin shortly...`;


  noBtn.classList.add('none')
  yesBtn.classList.add('none')
    setTimeout(() => {
    question.innerText = `In 3..`;
      setTimeout(() => {
      question.innerText = `In 2..`;
      setTimeout(() => {
      question.innerText = `In 1..`;
        setTimeout(() => {
        question.innerText = `Good Luck!`;
        setTimeout(() => {
          theWoodsGame();
          restart();
        }, 2000);
        }, 1000);
      }, 1000);
    }, 1000);
    }, 1000);
  });

  // css styles added if [NO] button is clicked
noBtn.addEventListener('click', () => {
  question.innerText = `Maybe next time.`;
  noBtn.classList.add('none')
  yesBtn.classList.add('none')
  btnContainer.classList.add('none')
  restart();
});

// Importing my choices and questions for the game -
import {newChoices} from './data.js'; 

// function that runs all the questions and choices. -
let level = 0;

function theWoodsGame() {
  // variables - 
  const btnOne = document.getElementById('btn-one');
  const btnTwo = document.getElementById('btn-two');
  const btnThree = document.getElementById('btn-three');
  const btnFour = document.getElementById('btn-four');


 // Starter question and choices- IT STARTS HERE ->
  question.innerHTML = newChoices[0]['level 11']['question'];
  btnOne.innerHTML = newChoices[0]["level 11"].c1;
  btnTwo.innerHTML = newChoices[0]["level 12"].c2;
  btnThree.innerHTML = newChoices[0]["level 13"].c3;
  btnFour.innerHTML = newChoices[0]["level 14"].c4;

  // LINKED LIST - 
  function callbackClicked(event, button) {
    let currentNode = newChoices[level]; // currentNode is equal to the newChoices level.
    let name = button.getAttribute('data-name'); // All the attributes that start with [data-name];
    let currentChild = currentNode[name]; // Passing the attribute name.
    let childIndex = currentChild['level']; // Passing the current level which the choice is at.
    populateChildren(childIndex); // Calling populateChildren and passing in the childIndex.
  }

  // Assigning each node to the appropriate button.
  function populateChildren(start) {
    console.log('starting children at index' + start);
    if(newChoices[start]['level 11']['gameOver']=== ''){
      newChoices[start]['level 11']['gameOver'] = gameOver(buttons);
    };
    question.innerHTML = newChoices[start]['level 11']['question'];
    btnOne.innerHTML = newChoices[start]['level 11']['c1'];
    btnTwo.innerHTML = newChoices[start]['level 12']['c2'];
    btnThree.innerHTML = newChoices[start]['level 13']['c3'];
    btnFour.innerHTML = newChoices[start]['level 14']['c4'];
    level = start;
  }

  //  Event listener - Listens for which button is pressed so it is able to assign the right node.
  // Array of all the buttons.
  let buttons = [
    btnOne,
    btnTwo,
    btnThree,
    btnFour
  ];
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      console.log('clicked')
      callbackClicked(event, button);
    })
  })
};

// restart function - Restarts the game when button is pressed.
function restart() {
  const restartBtn = document.getElementById('restart');
  if(restartBtn.style.display === 'none'){
    restartBtn.style.display = 'block';
    restartBtn.addEventListener('click', () => {
    window.location.reload()
  });
  } else {
    restartBtn.style.display = 'none';
  }
}
restart()

// Hide buttons -
function gameOver(para) {
  para.forEach((btn) => {
    btn.classList.add('none');
  })
}

