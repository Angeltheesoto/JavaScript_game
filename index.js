
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
      question.innerText = `In 1`;
       setTimeout(() => {
       question.innerText = `Starting`;
       }, 2000);
     }, 2000);
    }, 2000);
   }, 2000);
 });

noBtn.addEventListener('click', () => {
  console.log('No')
  question.innerText = `Maybe next time.`;
  noBtn.classList.add('none')
  yesBtn.classList.add('none')
 });


// 




















































