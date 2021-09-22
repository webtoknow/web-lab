# Lab 5 - [JS] - Objects and functions

## Content

- [🦉 Intro](#-Intro)
- [🎢 Exercises](#-Exercises)

## 🦉 Intro

[JavaScript](https://ro.wikipedia.org/wiki/JavaScript) (JS) is one of the most popular programming languages ​​in the world, being used on both client ([browser](https://en.wikipedia.org/wiki/Web_browser)) and server side ([NodeJs](https://nodejs.org/en/)).

## 🎢 Exercises

### 💪 Exercise 5.1

In a HTML document, link a JavaScript file for each exercise below (_ex1.js_, _ex2.js_ etc.).

### 💪 Exercise 5.2

### Who are the people who have influenced your life?

- Create an object which contains some information about a person who has influenced your life. The object must contain: `name` (string), `age` (number) and `qualities` (array of strings).
- Display in the console on separate lines (one `console.log` for each line) the person's information, like below:

```JS
John Doe
Age: 50
Qualities:
Empathetic
Honest
Animal lover
```

### 💪 Exercise 5.3

### It's like IMDB, but much smaller...

- Create an object containing the information about a favorite movie. The object should include `title` (string), `duration` (number) and `actors` (array of strings).
- Create a function which receives the above object as a parameter and prints the information about your favorite movie in the console, like below:

```bash
"The Godfather" running time is 177 minutes. Starring: Marlon Brando, Al Pacino, James Caan, Richard Castellano"
```

### 💪 Exercise 5.4

### It's Black Friday!

- Create a function which receives as a parameter the object corresponding to the shopping cart and returns its total value, as in the example below:

```JS
// Input
const blackFridayCart = {
  phone: "350",
  console: "250",
  tv: "450",
  headPhones: "10.60",
  watch: "20.34",
  bag: "22.36"
};

// Output
getCartValue(blackFridayCart); // 1103.3
```

## 🎁 Exercise 5.5

### Map

- Implement the _[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)_ function to create a new array containing the results of calling a function for every single element of the array:

```JS
Array.prototype.myMap = function(callbackFunction) {
  const array = this;
  let newArray = [];
  // your code here
  return newArray
}

function multiplicator(element) {
    return 2 * element;
}

[1,2,3].map(multiplicator); // [2,4,6]
[1,2,3].myMap(multiplicator); // [2,4,6]
```

## 🎁 Exercise 5.6

### Filter

- Implement the _[filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)_ function to create a new array containing the elements which pass the test implemented by the provided function:

```JS
Array.prototype.myFilter = function(callbackFunction) {
  const array = this;
  let newArray = [];
  // your code here
  return newArray
}

function biggerThanFive(element) {
    return element > 4;
}

[1,2,3,4,5,6,7,8,9].filter(biggerThanFive); // [5,6,7,8,9]
[1,2,3,4,5,6,7,8,9].myFilter(biggerThanFive); // [5,6,7,8,9]
```

## 🎁 Exercise 5.7

### Reduce

- Implement the _[reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)_ method that executes a reducer function (that you provide) on each element of the array, resulting in a single output value:

```JS
Array.prototype.myReduce = function(callbackFunction, initialVal) {
  const array = this;
  let accumulator = (initialVal === undefined) ? undefined : initialVal;

  let newArray = [];
  // your code here
  return accumulator
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

[1,2,3,4].reduce(reducer); // 10
[1,2,3,4].myReduce(reducer); // 10
```
