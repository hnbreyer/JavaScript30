<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Array Cardio 💪</title>
</head>
<body>
  <p><em>Psst: have a look at the JavaScript Console</em> 💁</p>
  <script>
    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's

    const fifteen = inventors.filter(function(inventor) {
      if(inventor.year >= 1500 && inventor.year < 1600){
        return true;
      }
    });
    console.log(fifteen);

    let i = [];
    let x=0;
    for (x in fifteen) {
      i += fifteen[x].first + ' ';
    }

    console.log(i);

    //console.log(inventors.first);

    //const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
    //console.table(fifteen);
//////////////////////////////////////////////////////////////////
    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names

    const names = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.log(names);
    //const names = inventors.map(inventor => (inventor.first + ' ' + inventor.last))
// map always returns the same amount of items you give it
// filter can receive 30 and give back 1
//////////////////////////////////////////////////////////


    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    //const oldToYoung = inventors.sort(inventor => (inventor.year))
    //console.log(oldToYoung);
    /*inventors.sort(function(a, b) {
      return a.year - b.year;
    });
    console.table(inventors);
    */

  const ordered = inventors.sort((a, b) => a.year - b.year);
  console.table(inventors);

  const ordered2 = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.table(ordered);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?

    const ages = inventors.map(inventor => (inventor.passed - inventor.year))
    //console.log(ages);
    const reducer = (total, currentAge) => total + currentAge;

    console.log(ages.reduce(reducer));

    console.log(
    inventors.reduce( ( sum, { year, passed } ) => ( sum + ( passed - year ) ), 0 )
);

    //inventors.reduce(inventor => (inventor.passed - inventor.year))
    //console.log(inventors);

    // 5. Sort the inventors by years lived

   /* ages.sort(function(a, b) {
      return a - b;
    });
    console.log(ages);
    */

    const yearsLived = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
    console.table(inventors);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    /*const category = document.querySelector('.mw-category');
    const links = Array.from(category.querySelectorAll('a'));
    const de = links 
                    .map(link => link.textContent)
                    .filter(streetName =>streetName.includes('de'));
*/

//////////////////////////////////////////////

    // 7. sort Exercise
    // Sort the people alphabetically by last name

    people.sort();
    console.log(people);

    console.log(
      people.sort((a, b) => (a.split( ', ' )[0] > b.split( ', ' )[0]
      ))
      );

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const reducer2 = (accumulator, currentValue) => accumulator + ' ' + currentValue;
    console.log(data.reduce(reducer2));

   /*  let car = [];
    let truck = [];
    let bike = [];
    let van = [];
    let walk = [];

    let y = 0;

   
      for (y in data){
        if (data[y] === 'car'){
          car += data[y] + ' '; 
        } else if (data[y] === 'truck'){
          truck += data[y] + ' ';
        } else if (data[y] === 'bike') {
          bike += data[y] + ' ';
        } else if (data[y] === 'van') {
          van += data[y] + ' ';
        } else (data[y] === 'walk') ;{
          walk += data[y] + ' ';
        }
      }

      console.log(walk);
  

    console.log('cars: ' + car.length);
    console.log('trucks: ' + truck.length);
    console.log('bikes: ' + bike.length);
    console.log('vans: ' + van.length);
    console.log('walks: ' + walk.length); */

    const transportation = data.reduce(function(obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      //console.log(obj);
      return obj;
    }, {});

    console.log(transportation);

    console.log(
      data.reduce((sum, item) => {
        sum[item] = (sum[item] || 0) + 1;
        return sum;
      }, {})
    );

  </script>
</body>
</html>
