/* exported data */
// var xhr = new XMLHttpRequest();

function programmingJokes() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://official-joke-api.appspot.com/jokes/programming/random');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    // console.log('response', xhr.response);
    // console.log('status', xhr.status);
  });
  xhr.send();
}

programmingJokes();

// var xhr2 = new XMLHttpRequest();

function generalJokes() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://official-joke-api.appspot.com/random_joke');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    // console.log('response 2', xhr.response);
    // console.log('status 2', xhr.status);
  });
  xhr.send();
}

generalJokes();

var data = {
  favJoke: [{
    type: '',
    setup: '',
    punchline: ''
  }]
};

// console.log(data);

var $homePage = document.querySelector('.home-page');
var $generalSetup = document.querySelector('.general-jokes-setup');
var $generalPunchline = document.querySelector('.general-jokes-punchline');
var $programmingSetup = document.querySelector('.programming-jokes-setup');
var $programmingPunchline = document.querySelector('.programming-jokes-punchline');

var $chooseGeneral = document.querySelector('.general-jokes-button');
var $chooseProgramming = document.querySelector('.programming-jokes-button');
var $tellMeGeneral = document.querySelector('.tell-me-general');
var $tellMeProgramming = document.querySelector('.tell-me-programming');
var $anotherGeneral = document.querySelector('.another-general');
var $anotherProgramming = document.querySelector('.another-programming');

function handleClick(event) {
  // console.log(event.target);
  if (event.target === $chooseGeneral) {
    $homePage.classList.add('hidden');
    $generalSetup.classList.remove('hidden');
  }
  if (event.target === $chooseProgramming) {
    $homePage.classList.add('hidden');
    $programmingSetup.classList.remove('hidden');
  }
  if (event.target === $tellMeGeneral) {
    $generalSetup.classList.add('hidden');
    $generalPunchline.classList.remove('hidden');
  }
  if (event.target === $tellMeProgramming) {
    $programmingSetup.classList.add('hidden');
    $programmingPunchline.classList.remove('hidden');
  }
  if (event.target === $anotherGeneral) {
    $generalPunchline.classList.add('hidden');
    $generalSetup.classList.remove('hidden');
  }
  if (event.target === $anotherProgramming) {
    $programmingPunchline.classList.add('hidden');
    $programmingSetup.classList.remove('hidden');
  }
}

$chooseGeneral.addEventListener('click', handleClick);
$chooseProgramming.addEventListener('click', handleClick);
$tellMeGeneral.addEventListener('click', handleClick);
$tellMeProgramming.addEventListener('click', handleClick);
$anotherGeneral.addEventListener('click', handleClick);
$anotherProgramming.addEventListener('click', handleClick);
