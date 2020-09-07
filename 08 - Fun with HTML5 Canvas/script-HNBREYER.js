  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.strokeStyle = '#BADA55';
  ctx.lineJoin = 'join';
  ctx.lineCap = 'round';
  ctx.lineWidth = 100;

//flag to make sure that the stroke is only applied when clicking down
let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
  if(!isDrawing) return; 
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  //start from
  ctx.moveTo(lastX, lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY); //these values come from the event
  ctx.stroke();
  //update lastX and lastY values, so they don't start from zero again
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if(hue >= 360){
  hue = 0;
  }
}

//listen for mouse move event on canvas
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
//canvas.addEventListener('mouseout', () => isDrawing = false);
