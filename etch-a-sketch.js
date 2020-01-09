const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// Setup canvas for drawing
const { width, height } = canvas;

// create random x and y for starting point in canvas
const x = Math.floor(Math.random() * width);
const y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath();
ctx.lineTo(x, y);
ctx.moveTo(x, y);
ctx.stroke();

// write the draw function

// handle the keys
const handleKey = e => {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
  }
};

// listen for key press
window.addEventListener('keydown', handleKey);
