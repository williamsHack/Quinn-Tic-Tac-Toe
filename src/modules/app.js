import '../css/style.css';

import Game from './game';

const input = document.getElementById('input');
const button = document.getElementById('submit');
const start = document.querySelector('.start');
const board = document.querySelector('.board');
const reset = document.getElementById('reset');
const winData = document.querySelector('[data-win-text]');
const winningMsg = document.querySelector('.winning-msg');
const cells = document.querySelectorAll('.cell');
const positions = Array.from(cells);
function displayName() {
  const inputValue = input.value;
  const name = document.querySelector('.name');
  name.innerHTML = `<h1 class="text-center">Player: ${inputValue}</h1>`;
  start.classList.remove('show');
  board.classList.add('show');
}
function resetGame() {
  window.location.reload();
}
reset.addEventListener('click', resetGame);
button.addEventListener('click', displayName);
const tictactoe = Game(positions, winData, winningMsg);
tictactoe.start();