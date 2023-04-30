const fillBoard = (size = 16) => {
  const board = document.querySelector('.board');
  const removeDiv = board.querySelectorAll('div');
  removeDiv.forEach(div => div.remove());

  board.style.gridTemplate = `repeat(${size},1fr)/repeat(${size},1fr)`;

  const area = size * size;
  for (let i = 0; i < area; i++) {
    const square = document.createElement('div');
    square.setAttribute('style', 'border: 1px solid');
    square.style.backgroundColor = `blue`;
    square.addEventListener(
      'mouseover',
      () => (square.style.backgroundColor = 'red')
    );
    board.insertAdjacentElement('beforeend', square);
  }
};

const range = document.querySelector('#range').value;

const size = document.querySelector('#size');

const changeValue = newSize => {
  fillBoard(newSize);
  size.textContent = newSize;
};

changeValue(range);
