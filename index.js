
// Toggle background audio
let audio = document.getElementById('background-audio');

document.getElementById('mute').addEventListener('click', (e) =>
{
  e = e || window.event;
  audio.muted = !audio.muted;
  e.preventDefault();
});

// Press yes or no to start the game. If you press yes the game will start and say 'Your journey will begin shortly' have it wait 3 seconds before changing the text. If no the game will say 'Dont worry, theres always next time.'

const question = document.getElementById('question');
const yesBtn = document.getElementById('btn-yes');
const noBtn = document.getElementById('btn-no');

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
        }, 2000);
        }, 1000);
      }, 1000);
    }, 1000);
    }, 1000);
  });

noBtn.addEventListener('click', () => {
  question.innerText = `Maybe next time.`;
  noBtn.classList.add('none')
  yesBtn.classList.add('none')
});

 // These are my choices for every question -
let newChoices = [
  // label = choice [index#-level#-button#] -
  // questionLabel = question [path#-currentQuestion#] -
  {
    'level 11': {'c1': 'choice 0-1-one', 'level': 1, 'question': 'starter question 0-0'},
    'level 12': {'c2': 'choice 0-2-two', 'level': 2},
    'level 13': {'c3': 'choice 0-3-three', 'level': 3},
    'level 14': {'c4': 'choice 0-4-four', 'level':4}
  },
  {
    'level 11': {'c1': 'choice 1-5-one', 'level': 5, 'question': 'question 1-1'},
    'level 12': {'c2': 'choice 1-6-two', 'level': 6},
    'level 13': {'c3': 'choice 1-7-three', 'level': 7},
    'level 14': {'c4': 'choice 1-8-four', 'level': 8}
  },
  {
    'level 11':{'c1': 'choice 2-9-one', 'level': 9, 'question': 'question 2-1'},
    'level 12':{'c2': 'choice 2-10-two', 'level': 10},
    'level 13':{'c3': 'choice 2-11-three', 'level': 11},
    'level 14':{'c4': 'choice 2-12-four', 'level': 12}
  },
  {
    'level 11':{'c1': 'choice 3-13-one', 'level': 13, 'question': 'question 3-1'},
    'level 12':{'c2': 'choice 3-14-two', 'level': 14},
    'level 13':{'c3': 'choice 3-15-three', 'level': 15},
    'level 14':{'c4': 'choice 3-16-four', 'level': 16}
  },
  {
    'level 11':{'c1': 'choice 4-17-one', 'level': 17, 'question': 'question 4-1'},
    'level 12':{'c2': 'choice 4-18-two', 'level': 18},
    'level 13':{'c3': 'choice 4-19-three', 'level': 19},
    'level 14':{'c4': 'choice 4-20-four', 'level': 20}
  },
  {
    'level 11':{'c1': 'choice 5-21-one', 'level': 21, 'question': 'question 1-2'},
    'level 12':{'c2': 'choice 5-22-two', 'level': 22},
    'level 13':{'c3': 'choice 5-23-three', 'level': 23},
    'level 14':{'c4': 'choice 5-24-four', 'level': 24}
  },
  {
    'level 11':{'c1': 'choice 6-25-one', 'level': 25, 'question': 'question 2-2'},
    'level 12':{'c2': 'choice 6-26-two', 'level': 26},
    'level 13':{'c3': 'choice 6-27-three', 'level': 27},
    'level 14':{'c4': 'choice 6-28-four', 'level': 28}
  },
  {
    'level 11':{'c1': 'choice 7-29-one', 'level': 29, 'question': 'question 3-2'},
    'level 12':{'c2': 'choice 7-30-two', 'level': 30},
    'level 13':{'c3': 'choice 7-31-three', 'level': 31},
    'level 14':{'c4': 'choice 7-32-four', 'level': 32}
  },
  {
    'level 11':{'c1': 'choice 8-33-one', 'level': 33, 'question': 'question 4-2'},
    'level 12':{'c2': 'choice 8-34-two', 'level': 34},
    'level 13':{'c3': 'choice 8-35-three', 'level': 35},
    'level 14':{'c4': 'choice 8-36-four', 'level': 36}
  }
];

 // function that runs all the questions and choices. -
let level = 0;
function theWoodsGame() {
  // variables - buttons 
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

  function callbackClicked(event, button) {
    // console.log(event);
    // console.log('calling call back clicked for level' + level);
    // console.log('break');
    let currentNode = newChoices[level];
    let name = button.getAttribute('data-name');
    let currentChild = currentNode[name];
    let childIndex = currentChild['level'];
    populateChildren(childIndex);
  }

  function populateChildren(start) {
    console.log('starting children at index' + start);
    question.innerHTML = newChoices[start]['level 11']['question'];
    btnOne.innerHTML = newChoices[start]['level 11']['c1'];
    btnTwo.innerHTML = newChoices[start]['level 12']['c2'];
    btnThree.innerHTML = newChoices[start]['level 13']['c3'];
    btnFour.innerHTML = newChoices[start]['level 14']['c4'];
    level = start;
  }
//  Event listener.
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

// MY OLD CODE -
 // // starter dialogue
 // let newQuestion = question.innerText = `You and a friend are on a trip at one of the largest forest in the United States. Your hiking through the mountains of Tongrass National Forest, Alaska. Its been nothing but three fun filled days with hiking, camping and fishing in the great outdoors. You and your best-friend are miles away from any contact with civilization and your both tired and ready to head back home. You have enough supplies to last you at least two more days for the journey back. To head back your best-friend suggest a more adventurer route through the rocky river, pass the abonded yellow bus. There is also another shorter route on the map that a ranger had mentioned to you before the trip called the Moose path. Or also the Cove trail if your not afraid of animals.`;

 // let answerOne = btnOne.innerText = `You decide to be a little bit more adventurest person on this trip and agree to go with your friend through the creek`;
 // let answerTwo = btnTwo.innerHTML = `Answer two`;
 // let answerThree = btnThree.innerHTML = `Answer three`;
 // let answerFour = btnFour.innerHTML = `Answer four`;

 //  // This works!!!
 // function callbackClicked(element) {
 //  element.addEventListener('click', (evt) => {
 //   let target = evt.target;

 //    if(target.id === 'btn-one') {
 //     console.log('Button one was pressed.');

 //     question.innerHTML = `New question.`;
 //     btnOne.innerHTML = `New choice one.`;
 //     btnTwo.innerHTML = `New choice two.`;
 //     btnThree.innerHTML = `New choice three.`;
 //     btnFour.innerHTML = `New choice four.`;
 //      if(target.id === 'btn-one' ) {
 //       question.innerHTML = `Another question.`;
 //       btnOne.innerHTML = `Another choice one.`;
 //       btnTwo.innerHTML = `Another choice two.`;
 //       btnThree.innerHTML = `Another choice three.`;
 //       btnFour.innerHTML = `Another choice four.`;
 //      }

 //    } else if (target.id === 'btn-two') {
 //     console.log('Button two was pressed.')

 //    } else if (target.id === 'btn-three') {
 //     console.log('Button three was pressed.')

 //    } else {
 //     console.log('Button four was pressed.')

 //    }
 //   })
 // }
 // callbackClicked(btnOne);
 // callbackClicked(btnTwo);
 // callbackClicked(btnThree);
 // callbackClicked(btnFour);
















































