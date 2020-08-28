# Day 05 - Flex Panel Gallery

View [Codepen]()

This challenge was a pretty fun one! I really like anything involving JavaScript and CSS, specially FlexBox.
I didn't know much about FlexBox, so I decided to take on another challenge by Wes Bos - [What The FlexBox](https://flexbox.io/).

On this challenge, I didn't make modifications, so I'll make a run down of the exercise.
The goal was to create a gallery of flex panels that can be toggled open/close.

Firstly, I made sure these panels were displayed side by side by adding ```display: flex```
```CSS
.panels {
      min-height: 100vh;
      overflow: hidden;
      display: flex;   /***1 - display side by side***/
    }
 ```
 
 ```.panels``` class refers to the div containing all panels, as for ```.panel``` refer to each individual panel.
 
 Then, I added ```flex: 1``` to each panel, so the space will be equally distributed to each of them. <br>
 ```.justify-content```, ```align-items``` and ```flex-direction```, together with ```display: flex```, makes the text within each panel to be centered (vertically and horizontally).
 
 
 ```CSS
 .panel {
      background: #6B0F9C;
      box-shadow: inset 0 0 0 5px rgba(255,255,255,0.1);
      color: white;
      text-align: center;
      align-items: center;
      transition:
        font-size 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
        flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
        background 0.2s;
      font-size: 20px;
      background-size: cover;
      background-position: center;
      flex: 1; /***2 - equally distribute space amongst each other ***/
      justify-content: center; /***3 - text on center left to right***/
      /*align-items: center; /***3.1 ***/
      display: flex; /***3.2***/
      flex-direction: column; /***3.3 - center text on the middle ***/
    }
 ```  
 
 At this point, the text within the panels is all centered.
 I access them by ```.panel >. *```, and with ```flex: 1 0 auto``` each word takes 1/3 of the panel.<br>
 Again,  ```.justify-content``` and ```align-items``` makes everything centered.
 
 ```CSS
    /* Flex Children */
    .panel > * {
      margin: 0;
      width: 100%;
      transition: transform 0.5s;
      flex: 1 0 auto; /***4***/
      display: flex; /***4.1***/
      justify-content: center; /***4.2***/
      align-items: center; /***4.3***/
    }
 ```
 
 The animation of the page requires that the top and bottom words to be hidden when the panels are closed, and to reveal them when the panels are open. <br>
  For this, I used ```transform: translateY()```.
  
  ```CSS
  
    /***5 - hides the top words up ***/
    .panel > *:first-child { transform: translateY(-100%);}
    .panel.open-active > *:first-child { transform: translateY(0);}
    
     /*** hides the bottom words down ***/
    .panel > *:last-child { transform: translateY(100%);}
    .panel.open-active > *:last-child { transform: translateY(0);}
    /*** 5.1 - .open-active is a class - we can now toggle this class on/off with JS***/
 ```
 
 To create the animation effect of being open, the panel that is clicked needs to get bigger.<br>
 I can use ```flex:5``` and increase font size for that effect.
 
```CSS
  .panel.open {
      /***6 -  flex:5 - takes 5 times the amount of extra room (the others have a flex of 1***/
      flex:5;
      font-size: 40px;
    }
```

<br>

Going to JavaScript now:

```javascript
 // 7 - now write JS
    //I want all panels - querySelectorAll will generate a node list with all .panel
    const panels = document.querySelectorAll('.panel');

    function toggleOpen(){
      this.classList.toggle('open');
      //turns on/off the class 'open'
    }

    //I take event (e) as an argument because there are two different properties being transitioned when I open the flexbox
    //I need to specify wich one I want
    function toggleActive(e){
      //console.log(e.propertyName); - I use this to know which properties are being transitioned
      if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
      }
    }
      
      // I use 'includes' property to specify the correct event that has different names in each browser
     /* Safari transitionend event.propertyName === flex */
      /* Chrome + FF transitionend event.propertyName === flex-grow */

    //loop over each of the panels, listen for a click on each, and execute toggleOpen
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    //now, I need to bring the rest of the text that is hidden up and down when the toggle is active
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));   
 ```
 
