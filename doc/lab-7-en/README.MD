# Lab 7 - [JS] - Events

## Content

- [🦉 Intro](#-Intro)
- [📹 Video](#-Video)
- [🎢 Exercises](#-Exercises)
- [🚀 Playground](#-Playground)

## 🦉 Intro

[Events](https://developer.mozilla.org/en-US/docs/Web/Events) in JavaScript are actions triggered by the user or browser.
There are many types of events that can be called, some of them are:

- the user clicks on an item on the page;
- the user put the cursor on an item on the page;
- the user presses a key on the keyboard;
- the user changes the size of the browser window or closes it;
- a form was submitted;
- the page has finished loading;
- an error occurred;

## 📹 Video

The JavaScript developers often use expressions like: “event-loop”, “non-blocking”, “callback”, “asynchronous”, “single-threaded” and “concurrency”. To get acquainted with these notions, let's watch this video: 
[Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014](https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=420s).

## 🎢 Exercises

### 💪 Exercise 7.1

#### Travel stories

- Create a HTML document (_travels.html_) with the template below included in the `<body>`:

```html
<h1>Travel stories</h1>
<form>
  <p>
    <label for="places">Visited places:</label>
    <input type="text" id="places" />
  </p>
  <p>
    <label for="characteristics">Characteristics:</label>
    <input type="text" id="characteristics" />
  </p>

  <p>
    <label for="people">People:</label>
    <input type="text" id="people" />
  </p>

  <button type="button" id="story-button">Create the story!</button>
</form>
<p id="story"></p>
```

- Create a JavaScript file named `script.js` and link it to the HTML document using `<script>` tag at the end of it.
- Add an _event listener_ to the button to make the `makeStory` function to be called every time when someone presses it.
- In the `makeStory` function, perform the following actions:

  - take the values from inputs;
  - create a story using them (ex: "Diana visited the beautiful Barcelona.");
  - display the story in the tag identified by the _story_ id;

### 💪 Exercise 7.2

#### Calculator

- Create a HTML document (_calculator.html_) with the template below included in the `<body>`:

```html
<h1>Calculator</h1>
<form>
  <label for="square-input">
    1. Square:
    <input type="number" id="square-input"/>
  </label>
  <button type="button" type="button" id="square-button">Calculate</button>
</form>

<form>
  <label for="half-input">
    2. Half:
    <input type="number" id="half-input" />
  </label>
  <button type="button" id="half-button">Calculate</button>
</form>

<form>
  <label>
    3. Percent:
    <input type="number" id="percent1-input" />
  </label>
  <label for="percent2-input">
    Number:
    <input type="number" id="percent2-input" />
  </label>
  <button type="button" id="percent-button">Calculate</button>
</form>

<form>
  <label for="area-input">
    4. Area of a circle with radius:
    <input type="number" id="area-input" />
  </label>
  <button type="button" id="area-button">Calculate</button>
</form>

<p id="solution"></p>
```

- Create a JavaScript file named `script.js` and link it to the HTML file using `<script>` tag at the end of it.
- Add events to the buttons to make the calculation functions to be called every time they are pressed.
- Create the functions that return the correct results for all the above cases.
- Display the results of the calculations in the tag identified by _solution_ id.
- Use the _keypress_ event on one of the inputs so that the user doesn't have to click on the button.

### 💪 Exercise 7.3

#### Puppy dog eyes

- Create a HTML document (_index.html_) with the template below being included into `<body>`:

```html
<h1>Puppy dog eyes</h1>
<a id="buttons">
  <button type="button" id="start-button">Start</button>
  <button type="button" id="speed-button">Go Faster!</button>
  <button type="button" id="stop-button">Stop</button>
</a>
<p id="info"></p>
<img
  style="position:absolute; left: 0px; top: 80px;"
  src="https://raw.githubusercontent.com/WebToLearn/web-lab/master/doc/lab-7-en/dog.gif"
/>

<script>
  var movePixels = 10; // number of pixels
  var delayMs = 50; // number of miliseconds
  var dogTimer = null;

  // Move the image on screen with 10px
  function dogWalk() {
    var img = document.getElementsByTagName("img")[0];
    var currentLeft = parseInt(img.style.left);
    img.style.left = currentLeft + movePixels + "px";
    // reset image position to start
    if (currentLeft > window.innerWidth - img.width) {
      img.style.left = "0px";
    }
  }

  // Call dogWalk function every 50 ms
  function startDogWalk() {
    dogTimer = window.setInterval(dogWalk, delayMs);
  }
</script>
```

- Move the above script from the HTML document into a separate file.
- Add an event on _Start_ button and create the function to start to dog's movement.
- Add an event on _Stop_ button and create the function to stop to dog's movement.
- Add an event on _Go Faster!_ button and create the function to increase the dog's movement speed.
- Display in the tag identified by _info_ id the movement speed calculated in pixels per second (Speed: 300px/second).
- Dynamically create the _Reset speed_ button with _reset-button_ id.
- Add an event on _Reset speed_ button and create the function to reset the speed.
- Simulate the session expiration functionality so that after 30 seconds of inactivity (no button was pressed), an alert is displayed with the following message: "Session expired!". Use the _setTimeout_ function.
- Disable the _Start_ button using the _disabled_ attribute when the dog is moving.

### 🎁 Exercise 7.4

#### Puppy dog eyes eXtreme

- Use _[Object literal pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)_ to rewrite the previous exercise.

## 🚀 Playground

[Elevator Saga](https://play.elevatorsaga.com/) helps us to get used to the JavaScript functions and events. Until next time, let's see who solves the most levels!

## 💗 Credits

Exercises 7.1, 7.2 and 7.3 are modified versions of [Events - Mad Libs
](https://www.teaching-materials.org/jsweb/exercises/events), [Events - Calculator
](https://www.teaching-materials.org/jsweb/exercises/events) and [Catwalk](https://www.teaching-materials.org/jsweb/exercises/catwalk) originally found on [teaching-materials.org](teaching-materials.org). For additional exercises similar to this, please visit [teaching-materials.org](teaching-materials.org).