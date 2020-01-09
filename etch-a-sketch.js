const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// Setup canvas for drawing
const { width, height } = canvas;

// create random x and y for starting point in canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
ctx.lineTo(x, y);
ctx.moveTo(x, y);
ctx.stroke();

// write the draw function
const draw = ({ key }) => {
  hue += 1;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);

  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
};

// handle the keys
const handleKey = e => {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
};

// listen for key press
window.addEventListener('keydown', handleKey);
