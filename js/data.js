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
