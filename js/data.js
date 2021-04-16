/* exported data */

var data = {
  favJoke: []
};

var previousJokes = localStorage.getItem('jokes');
if (previousJokes !== null) {
  data.favJoke = JSON.parse(previousJokes);
}

function beforeUnload(event) {
  var favJokesJSON = JSON.stringify(data.favJoke);
  localStorage.setItem('jokes', favJokesJSON);
}

window.addEventListener('beforeunload', beforeUnload);
