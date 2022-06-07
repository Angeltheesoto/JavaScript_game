
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


// Create a function that runs all the if/else statements for the questions and routes the player can go for the game to try and make it out alive.
function theWoodsGame() {

 const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnThree = document.getElementById('btn-three');
const btnFour = document.getElementById('btn-four');

 // starter dialogue
 let newQuestion = question.innerText = `You and a friend are on a trip at one of the largest forest in the United States. Your hiking through the mountains of Tongrass National Forest, Alaska. Its been nothing but three fun filled days with hiking, camping and fishing in the great outdoors. You and your best-friend are miles away from any contact with civilization and your both tired and ready to head back home. You have enough supplies to last you at least two more days for the journey back. To head back your best-friend suggest a more adventurer route through the rocky river, pass the abonded yellow bus. There is also another shorter route on the map that a ranger had mentioned to you before the trip called the Moose path. Or also the Cove trail if your not afraid of animals.`;

  // When a button is clicked have the question change to a new question and four new answers appear.
 let answerOne = btnOne.innerText = `You decide to be a little bit more adventurest person on this trip and agree to go with your friend through the creek`;
 let answerTwo = btnTwo.innerHTML = `Answer two`;
 let answerThree = btnThree.innerHTML = `Answer three`;
 let answerFour = btnFour.innerHTML = `Answer four`;
// click event listener - COMEBACK HERE !!!
 function callbackClicked(callback) {
  callback.addEventListener('click', () => {
   console.log('clicked')
   })
 }

  if( callbackClicked(btnOne) === `You decide to be a little bit more adventurest person on this trip and agree to go with your friend through the creek` ) {
   newQuestion.textContent = `New question.`;
   answerOne.textContent = `New choice`;
   answerTwo.textContent = `New choice`;
   answerThree.textContent = `New choice`;
   answerFour.textContent = `New choice`;
  }
};














































