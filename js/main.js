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

function getDataForView(dataView) {
  if (dataView === 'general-setup') {
    $h2GeneralPunchline.textContent = '';
    generalJokes();
  }
  if (dataView === 'general-punchline') {
    $h2GeneralSetup.textContent = '';
  }
  if (dataView === 'programming-setup') {
    $h2ProgrammingPunchline.textContent = '';
    programmingJokes();
  }
  if (dataView === 'programming-punchline') {
    $h2ProgrammingSetup.textContent = '';
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

var $favStars = document.querySelectorAll('.favs');

function clickFavorites(event) {
  if (!event.target.classList.contains('favs')) {
    return;
  }
  for (var i = 0; i < $favStars.length; i++) {
    if ($favStars[i] === event.target) {
      event.target.classList.toggle('gold-star');
    }
  }
}

$container.addEventListener('click', buttonClicks);
$container.addEventListener('click', clickFavorites);
