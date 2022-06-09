
// Toggle background audio
let audio = document.getElementById('background-audio');

document.getElementById('mute').addEventListener('click', function (e)
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
  console.log('Yes')
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
  console.log('No')
  question.innerText = `Maybe next time.`;
  noBtn.classList.add('none')
  yesBtn.classList.add('none')
 });

 // NEW CODE - create a list of objects to call back on for each choice. MY VARIABLES -
 let newQuestions = [{
  'q1': 'question one',
  'q2': 'question two',
  'q3': 'question three',
  'q4': 'question four'
 }]

 let newChoices = [
  // choices for question one - 1
 {
  'level 11': {'c1': 'choice q1-one', 'child': 1},
  'level 12': {'c2': 'choice q1-two', 'child': 2},
  'level 13': {'c3': 'choice q1-three', 'child': 3},
  'level 14': {'c4': 'choice q1-four', 'child':4}
 },
 //  Q-ONE CHOICES IF C1 IS CHOSEN
 {
  'level 11': {'c1': 'choice q1-c1-one', 'child': 5},
  'level 12': {'c2': 'choice q1-c1-two', 'child': 6},
  'level 13': {'c3': 'choice q1-c1-three', 'child': 7},
  'level 14': {'c4': 'choice q1-c1-four', 'child': 8}
 }
 //  Q-ONE CHOICES IF C2 IS CHOSEN
 // {
 //  'c1': 'choice q1-c2-one',
 //  'c2': 'choice q1-c2-two',
 //  'c3': 'choice q1-c2-three',
 //  'c4': 'choice q1-c2-four'
 // },
 // //  Q-ONE CHOICES IF C3 IS CHOSEN
 // {
 //  'c1': 'choice q1-c3-one',
 //  'c2': 'choice q1-c3-two',
 //  'c3': 'choice q1-c3-three',
 //  'c4': 'choice q1-c3-four'
 // },
 // //  Q-ONE CHOICES IF C4 IS CHOSEN
 // {
 //  'c1': 'choice q1-c4-one',
 //  'c2': 'choice q1-c4-two',
 //  'c3': 'choice q1-c4-three',
 //  'c4': 'choice q1-c4-four'
 // },

 //  // choices for question two - 2
 // {
 //  'c1': 'choice q2-one',
 //  'c2': 'choice q2-two',
 //  'c3': 'choice q2-three',
 //  'c4': 'choice q2-four'
 // },
 // //  Q-TWO CHOICES IF C1 IS CHOSEN
 // {
 //  'c1': 'choice q2-c1-one',
 //  'c2': 'choice q2-c1-two',
 //  'c3': 'choice q2-c1-three',
 //  'c4': 'choice q2-c1-four'
 // },
 // //  Q-TWO CHOICES IF C2 IS CHOSEN
 // {
 //  'c1': 'choice q2-c2-one',
 //  'c2': 'choice q2-c2-two',
 //  'c3': 'choice q2-c2-three',
 //  'c4': 'choice q2-c2-four'
 // },
 // //  Q-TWO CHOICES IF C3 IS CHOSEN
 // {
 //  'c1': 'choice q2-c3-one',
 //  'c2': 'choice q2-c3-two',
 //  'c3': 'choice q2-c3-three',
 //  'c4': 'choice q2-c3-four'
 // },
 // //  Q-TWO CHOICES IF C4 IS CHOSEN
 // {
 //  'c1': 'choice q2-c4-one',
 //  'c2': 'choice q2-c4-two',
 //  'c3': 'choice q2-c4-three',
 //  'c4': 'choice q2-c4-four'
 // },
 ];

 let level = 0;

// Create a function that runs all the if/else statements for the questions and routes the player can go for the game to try and make it out alive.
function theWoodsGame() {

 const btnOne = document.getElementById('btn-one');
 const btnTwo = document.getElementById('btn-two');
 const btnThree = document.getElementById('btn-three');
 const btnFour = document.getElementById('btn-four');

 // NEW CODE - create a list of objects to call back on for each choice.

  question.innerHTML = newQuestions[0].q1;
  btnOne.innerHTML = newChoices[0].c1;
  btnTwo.innerHTML = newChoices[0].c2;
  btnThree.innerHTML = newChoices[0].c3;
  btnFour.innerHTML = newChoices[0].c4;

 function callbackClicked(element) {
  console.log('hello');
  // Find out we are at level 0. Find child level, current button
  let currentNode = newChoices[level];
  let currentChild = currentNode[`level 11`];
  let childIndex = currentChild['child'];
  populateChildren(childIndex);
 }

 // populate children
 function populateChildren(start) {
  btnOne.innerHTML = newChoices[start]['level 11']['c1'];
  btnTwo.innerHTML = newChoices[start]['level 12']['c2'];
  btnThree.innerHTML = newChoices[start]['level 13']['c3'];
  btnFour.innerHTML = newChoices[start]['level 14']['c4'];
  console.log(newChoices[start]['level 11'])
  level += start;
 }

 btnOne.addEventListener('click', (event) => {
  callbackClicked(event);
 })







 //  element.addEventListener('click', (evt) => {
 //   let target = evt.target;

 //    if(question.innerHTML === newQuestions[0].q1) {
 //     console.log('Button one was pressed.');
 //     question.innerHTML = newQuestions[0].q2;
 //     btnOne.innerHTML = newChoices[1].c1;
 //     btnTwo.innerHTML = newChoices[1].c2;
 //     btnThree.innerHTML = newChoices[1].c3;
 //     btnFour.innerHTML = newChoices[1].c4;

 //      if(question.innerHTML === newQuestions[0].q2) {
 //        question.innerHTML = newQuestions[0].q3;
 //        btnOne.innerHTML = newChoices[2].c1;
 //        btnTwo.innerHTML = newChoices[2].c2;
 //        btnThree.innerHTML = newChoices[2].c3;
 //        btnFour.innerHTML = newChoices[2].c4;

 //         if(question.innerHTML === newQuestions[0].q3) {
 //          question.innerHTML = newQuestions[0].q3;
 //          btnOne.innerHTML = newChoices[3].c1;
 //          btnTwo.innerHTML = newChoices[3].c2;
 //          btnThree.innerHTML = newChoices[3].c3;
 //          btnFour.innerHTML = newChoices[3].c4;
 //         } 
 //      } 
 //      // else if(question.innerHTML === newQuestions[0].q2 && ) {
 //      //   question.innerHTML = newQuestions[0].q4;
 //      //   btnOne.innerHTML = newChoices[3].c1;
 //      //   btnTwo.innerHTML = newChoices[3].c2;
 //      //   btnThree.innerHTML = newChoices[3].c3;
 //      //   btnFour.innerHTML = newChoices[3].c4;
 //      // }

 //    } else if (target.id === 'btn-two') {
 //     console.log('Button two was pressed.')

 //    } else if (target.id === 'btn-three') {
 //     console.log('Button three was pressed.')

 //    } else {
 //     console.log('Button four was pressed.')

 //    }
 //   }
 //  )
 // }
 // callbackClicked(btnOne);
 // callbackClicked(btnTwo);
 // callbackClicked(btnThree);
 // callbackClicked(btnFour);
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
















































