# Day 04 - Array Cardio day 1

View [Codepen]()

This challenge was great to exercise some basic array functions, like ```.filter```, ```.map```, ```.sort``` and ```.reduce```.   

#### Modifications
For <b><i>exercise 3</i></b> (sort), I've simplified it a little bit:

Original code:

```javascript
const ordered = inventors.sort((a, b) => a.year > b.year ? -1 : 1);
    console.table(ordered);
```

My code:

```javascript
 const ordered = inventors.sort((a, b) => a.year - b.year);
  console.table(inventors);
```

If ```.sort``` function is not provided with a [compare function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), all array elements are sorted in the UTF-16 order.
Since we are dealing with years in this exercise, the compact version works just like the expanded version.


On <b><i>exercise 4</i></b>, we needed to use ```.reduce``` to find the sum of years of all inventors:

Original code:

```javascript
const totalYears = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
    }, 0);

    console.log(totalYears);
```

My code:

```javascript
 const ages = inventors.map(inventor => (inventor.passed - inventor.year))
 const reducer = (total, currentAge) => total + currentAge;

 console.log(ages.reduce(reducer));
```

Firstly, I combined ```.map``` and ```.reduce```. 
Then I realized there was a quicker way to write it:

```javascript
console.log(
    inventors.reduce( ( sum, { year, passed } ) => ( sum + ( passed - year ) ), 0 )
);
```

On <b><i>exercise 5</i></b>, we also used ```.sort```, but to sort the inventors by years lived this time.
I have done a quicker version of the original code.

Original code:

```javascript
 const oldest = inventors.sort(function(a, b) {
      const lastInventor = a.passed - a.year;
      const nextInventor = b.passed - b.year;
      return lastInventor > nextInventor ? -1 : 1;
    });
    console.table(oldest);
```

My code:

```javascript
  const yearsLived = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
    console.table(inventors);
```

```(b.passed - b.year) - (a.passed - a.year)``` will provide a [descending list](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) - the greater values on the array will always be placed on lower indexes, since the result of the subtraction will be greater than 0.
```(a.passed - a.year) - (b.passed - b.year)``` will provide a ascending list for the same reason.


<b><i>Exercise 7</i></b> also uses ```.sort``` to sort last names alphabetically.
I've simplified the code a little bit. Since the exercise didn't ask for first name, I just worked with the last name.

Original code:

```javascript
const alpha = people.sort((lastOne, nextOne) => {
      const [aLast, aFirst] = lastOne.split(', ');
      const [bLast, bFirst] = nextOne.split(', ');
      return aLast > bLast ? 1 : -1;
    });
    console.log(alpha);
```

My code:

```javascript
  console.log(
      people.sort((a, b) => (a.split( ', ' )[0] > b.split( ', ' )[0]
      ))
      );
```





