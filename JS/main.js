window.addEventListener('load', gameStart);

const levels = {
    easy: 5,
    medium: 3,
    hard: 1
  };

 const currentLevel = levels.easy;

 let time = currentLevel;
 let score = 0;
 let isPlaying;

 const levelTime = document.getElementById('word-time');
 const currentWord = document.getElementById('current-word');
 const inputText = document.getElementById('input-text');
 const timeLeft = document.getElementById('time-left');
 const scoreDisplay = document.getElementById('scores');
 const message = document.getElementById('message');

 var words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'champion',
    'ghost',
    'fierce',
    'html',
    'css',
    'mecheon',
    'vamsi',
    'imagination',
    'improvement',
    'olympics',
    'anxiety',
    'integrity',
    'quotation',
    'liberty',
    'empowerment',
    'intution',
    'gears',
    'pulley',
    'anvil',
    'swageblock',
    'peenhammer',
    'snipers',
    'security',
    'excellence',
    'freefire',
    'pubg'
 ]

 function gameStart(){
    levelTime.innerHTML = time;
    inputText.addEventListener('input', startMatch);
    showWord(words);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
 }


 function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel+1;
        showWord(words);
        inputText.value = '';
        score=score+1;
    }

    if(score === -1){
        scoreDisplay.innerHTML = 0;
     }else{
        scoreDisplay.innerHTML = score;
     }
 }


 function matchWords(){
    if(inputText.value ===  currentWord.innerHTML){
        message.innerHTML = 'Correct <i style="color:yellow;" class="fa-regular fa-face-smile-beam"></i>';
        message.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
        message.style.borderRadius = '10px';
        message.style.padding = '10px';
        message.style.border = '1px solid white';
        message.style.backgroundColor= 'green';
        return true;
    }
    else{
        message.innerHTML = 'Typing... <i style="color:black;" class="fa-solid fa-pen"></i>';
        message.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
        message.style.borderRadius = '10px';
        message.style.padding = '10px';
        message.style.border = '1px solid white';
        message.style.backgroundColor= 'skyblue';
        return false;
    }
 }

 function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.textContent =`${words[randIndex]}`;
 }

 function countdown(){
    if(time>0){
        time--;
    }
    else if(time === 0){
        isPlaying = false;
    }
    timeLeft.innerHTML = time;
 }

 function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over ! Better Luck Next Time <i style="color:yellow;" class="fa-regular fa-face-frown"></i>';
        message.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
        message.style.borderRadius = '10px';
        message.style.padding = '10px';
        message.style.border = '1px solid white';
        message.style.backgroundColor= 'red';
        score = -1;
    }
 }

 window.sr = ScrollReveal();
 sr.reveal('#main' ,{
     duration: 2000,
     origin: 'top',
     distance: '100px'
 });
 sr.reveal('#inst', {
    duration: 5000,
    origin: 'bottom',
    distance: '300px'
 });