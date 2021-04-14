var $h2GeneralSetup = document.getElementById('append-gen-joke');
var $h2GeneralPunchline = document.getElementById('append-gen-punchline');

var $h2ProgrammingSetup = document.getElementById('append-prog-joke');
var $h2ProgrammingPunchline = document.getElementById('append-prog-punchline');

function programmingJokes() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://official-joke-api.appspot.com/jokes/programming/random');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var strJokeProg = xhr.response[0].setup;
    var progJoke = document.createTextNode(strJokeProg);
    $h2ProgrammingSetup.appendChild(progJoke);

    var strPunchlineProg = xhr.response[0].punchline;
    var progPunchline = document.createTextNode(strPunchlineProg);
    $h2ProgrammingPunchline.appendChild(progPunchline);
  });
  xhr.send();
}

function generalJokes() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://official-joke-api.appspot.com/random_joke');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var strJokeGeneral = xhr.response.setup;
    var genJoke = document.createTextNode(strJokeGeneral);
    $h2GeneralSetup.appendChild(genJoke);

    var strPunchlineGeneral = xhr.response.punchline;
    var genPunchline = document.createTextNode(strPunchlineGeneral);
    $h2GeneralPunchline.appendChild(genPunchline);
  });
  xhr.send();
}

var $homePage = document.querySelector('#home-page');
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
  if (event.target === $chooseGeneral) {
    $homePage.classList.add('hidden');
    $generalSetup.classList.remove('hidden');
    generalJokes();
  }
  if (event.target === $chooseProgramming) {
    $homePage.classList.add('hidden');
    $programmingSetup.classList.remove('hidden');
    programmingJokes();
  }
  if (event.target === $tellMeGeneral) {
    $generalSetup.classList.add('hidden');
    $generalPunchline.classList.remove('hidden');
    $h2GeneralSetup.textContent = '';
  }
  if (event.target === $tellMeProgramming) {
    $programmingSetup.classList.add('hidden');
    $programmingPunchline.classList.remove('hidden');
    $h2ProgrammingSetup.textContent = '';
  }
  if (event.target === $anotherGeneral) {
    $generalPunchline.classList.add('hidden');
    $generalSetup.classList.remove('hidden');
    generalJokes();
    $h2GeneralPunchline.textContent = '';
  }
  if (event.target === $anotherProgramming) {
    $programmingPunchline.classList.add('hidden');
    $programmingSetup.classList.remove('hidden');
    programmingJokes();
    $h2ProgrammingPunchline.textContent = '';
  }
}

$chooseGeneral.addEventListener('click', handleClick);
$chooseProgramming.addEventListener('click', handleClick);
$tellMeGeneral.addEventListener('click', handleClick);
$tellMeProgramming.addEventListener('click', handleClick);
$anotherGeneral.addEventListener('click', handleClick);
$anotherProgramming.addEventListener('click', handleClick);

var $navItems = document.querySelector('.nav');
var $homeLink = document.querySelector('.home');
var $homeIcon = document.getElementById('home-icon');

function linkAndIconClicks(event) {
  if (event.target === $homeLink || event.target === $homeIcon) {
    $homePage.classList.remove('hidden');
    $generalSetup.classList.add('hidden');
    $generalPunchline.classList.add('hidden');
    $programmingSetup.classList.add('hidden');
    $programmingPunchline.classList.add('hidden');
    $h2GeneralSetup.textContent = '';
    $h2ProgrammingSetup.textContent = '';
    $h2GeneralPunchline.textContent = '';
    $h2ProgrammingPunchline.textContent = '';
  }
}

$navItems.addEventListener('click', linkAndIconClicks);
$homeIcon.addEventListener('click', linkAndIconClicks);
