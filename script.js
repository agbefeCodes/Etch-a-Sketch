const randColours = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `background-color: rgb(${red},${green},${blue})`;
};

const fillBoard = (size = 16) => {
  const board = document.querySelector('.board');
  const removeDiv = board.querySelectorAll('div');
  removeDiv.forEach(div => div.remove());

  board.style.gridTemplate = `repeat(${size},1fr)/repeat(${size},1fr)`;

  const area = size * size;
  for (let i = 0; i < area; i++) {
    const square = document.createElement('div');

    square.setAttribute('class', 'board_squares boxes');
    square.addEventListener('mouseover', () =>
      square.setAttribute('style', `${randColours()}`)
    );
    board.insertAdjacentElement('beforeend', square);
    // console.log(square);
  }
};

const range = document.querySelector('#range').value;

const size = document.querySelector('#size');

const changeValue = newSize => {
  fillBoard(newSize);
  size.textContent = newSize;
};

changeValue(range);

const borderVisibility = e => {
  document
    .querySelectorAll('.board_squares')
    .forEach(div => div.classList.toggle('boxes'));
  e.target.textContent =
    e.target.textContent === 'turn off' ? 'turn on' : 'turn off';
};

const borders = document.getElementById('borders');
borders.addEventListener('click', borderVisibility);
