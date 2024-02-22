const spots = [...document.querySelectorAll('.spot')];
const info = document.querySelector('.info');

let players = ['X', 'O'];
let current = 0;

for (let spot of spots) {
  spot.addEventListener('click', () => {
    if (spot.innerHTML == '&nbsp;') {
      spot.innerHTML = players[current];
      board[spots.indexOf(spot) % 3][Math.floor(spots.indexOf(spot) / 3)] =
        players[current];

      current = ++current % 2;

      let state = endGame(board);
      if (state) {
        spots.forEach((x) => (x.style.pointerEvents = 'none'));
        info.innerHTML = 'The winner is....' + state;
      }
    }
  });
}

// the game
let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

function endGame(board) {
  if (board[0][0] == board[0][1] && board[0][0] == board[0][2])
    return board[0][0];
  if (board[1][0] == board[1][1] && board[1][0] == board[1][2])
    return board[1][0];
  if (board[2][0] == board[2][1] && board[2][0] == board[2][2])
    return board[2][0];
  if (board[0][0] == board[1][0] && board[0][0] == board[2][0])
    return board[0][0];
  if (board[0][1] == board[1][1] && board[0][1] == board[2][1])
    return board[0][1];
  if (board[0][2] == board[1][2] && board[0][2] == board[2][2])
    return board[0][2];
  if (board[1][1] == board[0][0] && board[1][1] == board[2][2])
    return board[1][1];
  if (board[1][1] == board[2][0] && board[1][1] == board[0][2])
    return board[1][1];

  if (!board.some((x) => x.indexOf(0) != -1)) return 'nobody';
}
