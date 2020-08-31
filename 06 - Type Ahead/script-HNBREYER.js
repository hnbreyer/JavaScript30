const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//1 - we need an empty array to put our cities into
const cities = [];

//2 - fetch our data - API fetch
//fetch returns a promise 

///fetch(endpoint).then(blob => console.log(blob));
//up: it doesn't know what kind of data it is yet; we know is json, so...
///fetch(endpoint).then(blob => JSON.parse(blob)); --> this doesn't work because the blob needs to be converted to json first
///there is a method called json (see on console)
//.then(blob) blob.json())  ----- returns another promise

fetch(endpoint)
    .then(blob => blob.json())
//3 - now, we need to put data into cities
///push method adds arguments as one item in the array 
///we need to spread into data (ES6)
    .then(data => cities.push(...data));

//4 - run a function that's going tu run the array and filter down into a subset you can listen for

function findMatches(wordToMatch, cities){
  return cities.filter(place => {
    //here we need to figure out if the city or state matches the search
    const regex = new RegExp(wordToMatch, 'gi') /// g is global, i is case insensitive
    return place.city.match(regex) || place.state.match(regex);

  });
}

//5 - display results; function is called whenever someone changes the value on the search bar

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
 }).join('');  //instead returning an array w/ multiple items, it returns one string

suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('input', displayMatches);
