# Day 02 - JavaScript + CSS Clock

View [Codepen]()

#### I've separated the JS, CSS and HTML files, I prefer it like that.

#### Modifications

When the hands reach 0 degress (or 90 offset), they rotate backwards instead of continuing onwards - they go from 400 something degrees to back to 90 (```transform: rotate(90deg);``` make the hands start at the top).
To resolve this, I've used JavaScript (within setDate function):

```javascript
if (seconds === 0){
        secondHand.style.transition = 'all 0s';
        minsHand.style.transition = 'all 0s';
        hourHand.style.transition = 'all 0s';
    } else {
        secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
        minsHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
        hourHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    }
 ```


