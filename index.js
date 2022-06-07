
// Toggle background audio
var audio = document.getElementById('background-audio');

document.getElementById('mute').addEventListener('click', function (e)
{
 e = e || window.event;
 audio.muted = !audio.muted;
 e.preventDefault();
});




































































