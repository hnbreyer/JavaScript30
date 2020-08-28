//I want all panels - querySelectorAll with generate a node list with all .panels
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

     /* Safari transitionend event.propertyName === flex */
      /* Chrome + FF transitionend event.propertyName === flex-grow */

    //loop over each of the panels, listen for a click on each, and execute toggleOpen
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    //now, I need to bring the rest of the text that is hidden up and down when the toggle is active
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
