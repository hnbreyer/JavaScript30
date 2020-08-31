# Day 06 - Type Ahead

View [Codepen](https://codepen.io/hnbreyer/pen/yLOooQR)

On this challenge, we needed to implement a 'type ahead' functionality to a search, and pull data from a remote dataset.
This one used ```fetch()```, regular expressions, array functions... It was longer to get it done, but I sure learned a lot!

#### Modifications

I used ```input``` event instead of ```change``` or ```keyup```:

Original code:

```javascript
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
```

My code:

```javascript
searchInput.addEventListener('input', displayMatches);
```

On the dropdown list, there's the name of the city, state and population. To add a comma as a thousands separator, I used ```Intl.NumberFormat```, not a custom function:

Original code:

```javascript
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}
```

My code:

```javascript
function displayMatches(){
 const matchArray = findMatches(this.value, cities);
 const html = matchArray.map(place => {
   const regex = new RegExp(this.value, 'gi');
   const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
   const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
   const formatter = new Intl.NumberFormat('en-US'); 
   return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${formatter.format(place.population)}</span>  
    </li>
   `;
 }).join('');

suggestions.innerHTML = html;
}
```
