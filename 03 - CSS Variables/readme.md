# Day 03 - CSS Variables

View [Codepen](https://codepen.io/hnbreyer/pen/JjXEQMP)

I've never used CSS variables before, so this was something nice to learn!
This feature provides a much clever and flexible connection between JavaScript and CSS styling.
Runtime effects are much easier to be created, like the ones on this challenge.

#### Modifications
I didn't make modifications to the code, just added a few variables, such as ```opacity```, ```border-radius```.
For ```opacity```, I added the ```step``` attribute to create a range between 0 and 1.

```HTML
<label for="blur">Opacity:</label>
    <input id="opacity" type="range" name="opacity" min="0" max="1" value="1" step="0.1">
```
