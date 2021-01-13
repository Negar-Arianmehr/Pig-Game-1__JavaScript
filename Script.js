'use strict';

let randomNumber = Math.trunc(Math.random() * 6) + 1;
let score0 = 0;
let score1 = 0;
let currentScore = 0;
let currentScore0 = 0;
let currentScore1 = 0;
let pics = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];
////////////////////
//roll dice

let changeImg = function (arr, i) {
  document.getElementById('dice').src = arr[i - 1];
};

let playerCurrent = '#current--0';
let placeScore = '#score--0';
const activePlayer = function (id) {
  document.getElementById(id).classList.add('player--active');
};
const removePlayer = function (id) {
  document.getElementById(id).classList.remove('player--active');
};

document.querySelector('.btn--roll').addEventListener('click', function () {
  if (score1 < 100 && score0 < 100) {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    changeImg(pics, randomNumber);
    document.querySelector(playerCurrent).textContent = randomNumber;

    if (randomNumber === 1) {
      // document.querySelector("#score--0").textContent = currentScore
      currentScore = 0;
      document.querySelector(playerCurrent).textContent = currentScore;
      if (playerCurrent === '#current--0') {
        playerCurrent = '#current--1';
        placeScore = '#score--1';
        activePlayer('player1');
        removePlayer('player0');
      } else {
        playerCurrent = '#current--0';
        placeScore = '#score--0';
        activePlayer('player0');
        removePlayer('player1');
      }
    } else {
      if (playerCurrent === '#current--0') {
        currentScore0 += randomNumber;
        // document.querySelector(placeScore).textContent = currentScore
        document.querySelector(playerCurrent).textContent = currentScore0;
      } else {
        currentScore1 += randomNumber;
        document.querySelector(playerCurrent).textContent = currentScore1;
      }
    }
  } else {
    if (score0 >= 100) {
      document.querySelector('#current--0').textContent = 'You win!!';
      document.querySelector('#current--0').style.width = '75%';
    } else if (score1 >= 100) {
      document.querySelector('#current--1').textContent = 'You win!!';
      document.querySelector('#current--1').style.width = '75%';
    }
  }
});

/////////////////////////
//HolD

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playerCurrent === '#current--0') {
    score0 += currentScore0;
    document.querySelector(placeScore).textContent = score0;
    if (score0 >= 100) {
      document.querySelector('#current--0').textContent = 'You win!!';
      document.querySelector('#current--0').style.width = '75%';
    }
    playerCurrent = '#current--1';
    placeScore = '#score--1';
    activePlayer('player1');
    removePlayer('player0');
    currentScore0 = 0;
  } else {
    score1 += currentScore1;
    placeScore = '#score--1';
    document.querySelector(placeScore).textContent = score1;
    if (score1 >= 100) {
      document.querySelector('#current--1').textContent = 'You win!!';
      document.querySelector('#current--1').style.width = '75%';
    }
    playerCurrent = '#current--0';
    placeScore = '#score--0';
    activePlayer('player0');
    removePlayer('player1');
    currentScore1 = 0;
  }
});

document.querySelector('.btn--new').addEventListener('click', function () {
  const scores = document.querySelectorAll('.score');
  for (let i = 0; i < scores.length; i++) scores[i].textContent = 0;

  const newCurrentScore = document.querySelectorAll('.current-score');
  for (let i = 0; i < newCurrentScore.length; i++)
    newCurrentScore[i].textContent = 0;

  score0 = 0;
  score1 = 0;
  playerCurrent = '#current--0';
  placeScore = '#score--0';
  activePlayer('player0');
  removePlayer('player1');
});
