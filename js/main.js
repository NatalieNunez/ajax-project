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

var $views = document.querySelectorAll('.view');
var $container = document.querySelector('.container');
var $genStar = document.getElementById('gen-star');
var $progStar = document.getElementById('prog-star');
var $genStar2 = document.getElementById('gen-star-2');
var $progStar2 = document.getElementById('prog-star-2');

function getDataForView(dataView) {
  if (dataView === 'general-setup') {
    $genStar.classList.remove('gold-star');
    $genStar2.classList.remove('gold-star');
    $h2GeneralSetup.textContent = '';
    $h2GeneralPunchline.textContent = '';
    generalJokes();
  }
  if (dataView === 'programming-setup') {
    $progStar.classList.remove('gold-star');
    $progStar2.classList.remove('gold-star');
    $h2ProgrammingSetup.textContent = '';
    $h2ProgrammingPunchline.textContent = '';
    programmingJokes();
  }
}

function buttonClicks(event) {
  if (event.target.classList.contains('favs')) {
    return;
  }
  var currentButton = event.target.dataset.view;
  for (var i = 0; i < $views.length; i++) {
    var viewDataSet = $views[i].dataset.view;
    if (viewDataSet === currentButton) {
      $views[i].classList.remove('hidden');
      var currentView = $views[i].dataset.view;
    } else {
      $views[i].classList.add('hidden');
    }
  }
  getDataForView(currentView);
}

// var $favStars = document.querySelectorAll('.favs');
var $h2Elements = document.querySelectorAll('.text');
// console.log('h2s:', $h2Elements);

function clickFavorites(event) {
  if (!event.target.classList.contains('favs')) {
    return;
  }

  if (event.target === $genStar || event.target === $genStar2) {
    $genStar.classList.toggle('gold-star');
    $genStar2.classList.toggle('gold-star');
  }
  if (event.target === $progStar || event.target === $progStar2) {
    $progStar.classList.toggle('gold-star');
    $progStar2.classList.toggle('gold-star');
  }
}

function addJokeData(event) {
  if (!event.target.classList.contains('favs')) {
    return;
  }

  for (var k = 0; k < $h2Elements.length; k++) {
    if (event.target.dataset.joke === $h2ProgrammingSetup.dataset.joke || event.target.dataset.joke === $h2ProgrammingPunchline.dataset.joke) {
      var pSetup = $h2ProgrammingSetup.textContent;
      var pPunchline = $h2ProgrammingPunchline.textContent;
      var jokeData = pSetup + ' ' + pPunchline;
    }
    if (event.target.dataset.joke === $h2GeneralSetup.dataset.joke || event.target.dataset.joke === $h2GeneralPunchline.dataset.joke) {
      var gSetup = $h2GeneralSetup.textContent;
      var gPunchline = $h2GeneralPunchline.textContent;
      jokeData = gSetup + ' ' + gPunchline;
    }
  }

  if (event.target.classList.contains('gold-star')) {
    data.favJoke.unshift({ jokeData });
    // console.log('data model after adding data:', data);
  } else {
    data.favJoke.shift();
    // console.log('data model after removing data:', data);
  }
}

$container.addEventListener('click', buttonClicks);
$container.addEventListener('click', clickFavorites);
$container.addEventListener('click', addJokeData);

// if a star is clicked and has a class of gold-star, unshift jokeData into data model
// if star is clicked and doesnt have a class of gold star, remove jokeData (or index 0) from data model
// NOTE: we are able to add and remove data but so far only the punchline, need to figure out how to get both pieces of data
