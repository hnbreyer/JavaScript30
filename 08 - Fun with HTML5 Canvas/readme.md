# Day 08 - HTML5 Canvas

View [Codepen]()

This was the first time I've ever used ```<canvas>``` and it was great fun! I felt like I travelled back in time when I would mess around with Paint on Windows.

The canvas tag is added to the html body, and we set its dimensions:

```html
<canvas id="draw" width="800" height="800"></canvas>
```

Then, we start messing around with JS.

First, we 'grab' the canvas element:

```javascript
const canvas = document.querySelector('#draw');
```
And specify the context (either 2D or 3D):

```javascript
  const ctx = canvas.getContext('2d');
```

Size up the canvas to be the exact width of the window:
```javascript
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
```

And add color and stroke definitions:

```javascript
ctx.strokeStyle = '#BADA55';
  ctx.lineJoin = 'join';
  ctx.lineCap = 'round';
  ctx.lineWidth = 100;
```

Then, we create a function that will be called everytime I move the mouse over the canvas:

```javascript
let isDrawing = false;
//variables that hold coordinate points of start and end of a line
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
  if(!isDrawing) return; //stop the function from running when they are not moused down
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
```

And listen for mouse events:

```javascript
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
```
