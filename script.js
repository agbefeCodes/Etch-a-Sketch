const fillBoard = size => {
  const board = document.querySelector('.board');

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

fillBoard(68);
const changeSize = newSize => {
  fillBoard(newSize);
};
