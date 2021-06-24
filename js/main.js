var $h2GeneralSetup = document.getElementById('append-gen-joke');
var $h2GeneralPunchline = document.getElementById('append-gen-punchline');

var $h2ProgrammingSetup = document.getElementById('append-prog-joke');
var $h2ProgrammingPunchline = document.getElementById('append-prog-punchline');
var $search = document.getElementById('search');

function checkFavorites(joke) {
  for (var i = 0; i < data.favJoke.length; i++) {
    if (data.favJoke[i].jokeData === joke) {
      return true;
    }
  }
  return false;
}

var $genStar = document.getElementById('gen-star');
var $progStar = document.getElementById('prog-star');
var $genStar2 = document.getElementById('gen-star-2');
var $progStar2 = document.getElementById('prog-star-2');
// const $errorMessage

function programmingJokes() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://official-joke-api.appspot.com/jokes/programming/random');
  xhr.responseType = 'json';
  xhr.onerror = () => {
    showErrorMessage();
    // showSpinner();
    // console.log('an error occured');
  };
  // xhr.onprogress = () => {
  //   console.log('loading');
  //   showSpinner();
  // };
  // xhr.onreadystatechange = () => {

  // };
  xhr.addEventListener('load', function () {
    // hideSpinner();
    var strJokeProg = xhr.response[0].setup;
    var progJoke = document.createTextNode(strJokeProg);
    $h2ProgrammingSetup.appendChild(progJoke);

    var strPunchlineProg = xhr.response[0].punchline;
    var progPunchline = document.createTextNode(strPunchlineProg);
    $h2ProgrammingPunchline.appendChild(progPunchline);
    var fullJoke = `${strJokeProg} ${strPunchlineProg}`;
    if (checkFavorites(fullJoke)) {
      $progStar.classList.add('gold-star');
      $progStar2.classList.add('gold-star');
    }
  });
  xhr.send();
}

function generalJokes() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://official-joke-api.appspot.com/random_joke');
  xhr.responseType = 'json';
  xhr.onerror = () => {
    showErrorMessage();
    // showSpinner();
    // console.log('an error occured');
  };
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

// const $loadingSpinner = document.querySelector('.loader');
const $errorMessage = document.querySelector('.error-message');

// $h2GeneralSetup.append($loadingSpinner);
// window.on('load', function () {
//   setTimeout(removeLoader, 2000);
// });
// function removeLoader() {
//   $loadingSpinner.fadeOut(500, function () {
//     $loadingSpinner.remove();
//   });
// }

// function showSpinner() {
//   $loadingSpinner.classList.remove('hidden');
//   $h2ProgrammingSetup.appendChild($loadingSpinner);
// }

function showErrorMessage() {
  $errorMessage.classList.remove('hidden');
  // $h2ProgrammingSetup.appendChild($errorMessage);
  // $h2ProgrammingPunchline.appendChild($errorMessage);
  // $h2GeneralSetup.appendChild($errorMessage);
  // $h2GeneralPunchline.appendChild($errorMessage);

}

// function hideSpinner() {
//   $loadingSpinner.classList.add('hidden');
// }

var $views = document.querySelectorAll('.view');
var $container = document.querySelector('.container');
var $mainHead = document.getElementById('main-header');
var $favHead = document.getElementById('fav-header');

function getDataForView(dataView) {
  if (dataView === 'general-setup') {
    $genStar.classList.remove('gold-star');
    $genStar2.classList.remove('gold-star');
    $h2GeneralSetup.textContent = '';
    $h2GeneralPunchline.textContent = '';
    generalJokes();
    // showSpinner();
  }
  if (dataView === 'programming-setup') {
    $progStar.classList.remove('gold-star');
    $progStar2.classList.remove('gold-star');
    $h2ProgrammingSetup.textContent = '';
    $h2ProgrammingPunchline.textContent = '';
    programmingJokes();
  }
  if (dataView === 'favorites-page') {
    $mainHead.classList.add('hidden');
    $favHead.classList.remove('hidden');
  }
  if (dataView === 'home-page') {
    $mainHead.classList.remove('hidden');
    $favHead.classList.add('hidden');
  }
  // hideSpinner();
}

var $footer = document.querySelector('.footer');

function buttonClicks(event) {
  if (event.target.tagName !== 'A' && event.target.tagName !== 'BUTTON' && !$footer.contains(event.target)) {
    return;
  }

  if (event.target.tagName === 'DIV') {
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
  // showSpinner();
  getDataForView(currentView);
}

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

var $h2Elements = document.querySelectorAll('.text');

function addJokeData(event) {
  if (!event.target.classList.contains('favs')) {
    return;
  }

  for (var k = 0; k < $h2Elements.length; k++) {
    if (event.target.dataset.joke === $h2ProgrammingSetup.dataset.joke ||
      event.target.dataset.joke === $h2ProgrammingPunchline.dataset.joke) {
      var pSetup = $h2ProgrammingSetup.textContent;
      var pPunchline = $h2ProgrammingPunchline.textContent;
      var jokeData = pSetup + ' ' + pPunchline;
    }
    if (event.target.dataset.joke === $h2GeneralSetup.dataset.joke ||
      event.target.dataset.joke === $h2GeneralPunchline.dataset.joke) {
      var gSetup = $h2GeneralSetup.textContent;
      var gPunchline = $h2GeneralPunchline.textContent;
      jokeData = gSetup + ' ' + gPunchline;
    }
  }

  if (event.target.classList.contains('gold-star')) {
    data.favJoke.unshift({ jokeData });
    renderJoke(jokeData);
  } else {
    for (var i = 0; i < data.favJoke.length; i++) {
      if (data.favJoke[i].jokeData === jokeData) {
        data.favJoke.splice(i, 1);
      }
    }
    renderAllJokes(data.favJoke);
  }
}

var $divAppendJokes = document.getElementById('append-saved-jokes');

function renderJoke(joke) {
  var h5 = document.createElement('h5');
  var icon = document.createElement('i');
  icon.classList.add('fas', 'fa-star', 'likes');
  var jokeText = document.createTextNode(joke);
  h5.appendChild(jokeText);
  h5.appendChild(icon);
  $divAppendJokes.prepend(h5);
  return h5;
}

function renderAllJokes(jokes) {
  removeAllChildNodes($divAppendJokes);
  for (var i = 0; i < jokes.length; i++) {
    var addJoke = renderJoke(jokes[i].jokeData);
    $divAppendJokes.appendChild(addJoke);
  }
}

function clickUnfavorite(event) {
  var $h5 = document.querySelectorAll('h5');
  var $likes = document.querySelectorAll('.likes');
  if (!event.target.classList.contains('likes')) {
    return;
  }
  for (var i = 0; i < $likes.length; i++) {
    if (event.target === $likes[i]) {
      $h5[i].remove();
      data.favJoke.splice(i, 1);
    }
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function handleInput(event) {
  removeAllChildNodes($divAppendJokes);
  const lowercaseInput = event.target.value.toLowerCase();
  for (var i = data.favJoke.length - 1; i >= 0; i--) {
    const lowercaseJokeData = data.favJoke[i].jokeData.toLowerCase();
    if (lowercaseJokeData.includes(lowercaseInput)) {
      renderJoke(data.favJoke[i].jokeData);
    }
  }
}

$search.addEventListener('input', handleInput);
$divAppendJokes.addEventListener('click', clickUnfavorite);
$container.addEventListener('click', buttonClicks);
$container.addEventListener('click', clickFavorites);
$container.addEventListener('click', addJokeData);

window.addEventListener('DOMContentLoaded', renderAllJokes(data.favJoke));
