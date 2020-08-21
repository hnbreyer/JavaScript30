# Day 01 - JavaScript Drum Kit

#### I've added a warning message that appears when you press any key that is not in the drum kit.

```HTML
  <div class="divWrong">
    <p id="wrong" style="visibility: hidden">WRONG BEAT!</p>
  </div>
```

Original code:
```javascript
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
```
My code:
```javascript
function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio) {   
    document.getElementById("wrong").style.visibility = 'visible';
    return;
  } 
```

I've added this to hide the message after 1.5s

```javascript
function warningMessage(e){  
  const message = document.getElementById("wrong").style;
  if(message.visibility === 'hidden') return;
   if (message.visibility === 'visible'){
    message.transition = '1.5s';
    message.visibility = 'hidden';
  }
}
```
```javascript
window.addEventListener('keyup', warningMessage);
```

#### For clarity, I've used ```javascript keyup``` instead of ```javascript transitionend```

Original code: 
```javascript
 function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
```
```javascript
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  ```
  
  My code:
  ```javascript
  function removeAnimation(e){
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!key) return;
  key.classList.remove('playing');
}
```
```javascript
window.addEventListener('keyup', removeAnimation);
```
  
