# Lab 6 - [JS] - DOM

## Content

- [🦉 Intro](#-Intro)
- [🎢 Exercises](#-Exercises)

## 🦉 Intro

DOM ([Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)) is an Application Programming Interface (API) which defines a HTML, XHTML or XML document as a tree structure where each node is an object representing a part of the document. The objects can be programatically manipulated via [DOM functions](https://www.impressivewebs.com/10-essential-dom-methods-techniques-for-practical-javascript/), and any changes after executing them will be visible in the document display.

## 🎢 Exercises

### 💪 Exercise 6.1

#### Hack Google

- Open [google.com](https://www.google.com) in Chrome or Firefox browser and display the console.
- Find the Google logo and store it into a variable.
- Update the image source (the URL) to make the Yahoo logo to appear. You can search by the logo URL using a search engine.
- Find the Google search button and store it into a variable.
- Update the text of the button to be "Yahoo".

### 💪 Exercise 6.2

#### All the websites whould have a section named "About us"

- Create a HTML document (_aboutme.html_) with the below template being included into `<body>`:

```html
<h1>About Me</h1>
<ul>
  <li>Nickname: <span id="nickname"></span></li>
  <li>Favorites: <span id="favorites"></span></li>
  <li>Hometown: <span id="hometown"></span></li>
</ul>
```

- Create a new JavaScript file named `script.js` and link it to the HTML document using `<script>` tag at the end of it.
- Change the `<body>` style to have font-family: _Arial, sans-serif_.
- Replace every `<span>` (_nickname, favorites, hometown_) with your information.
- Iterate through each `<li>` and add the _list-item_ class.
- Create a CSS file (and link it to the document) with the styles needed for the _list-item_ class to have a red text.
- Create a new `<img>` element containing the `src` attribute which points to an image with you. Add this element to the page.

### 💪 Exercitiul 6.3

#### My IMDB

- Create a HTML document (_movies.html_) with "My favorite movies:" title, using the `<h1>` tag.
- Create a JavaScript file named `script.js` and link it to the HTML document using `<script>`tag at the end of it.
- Create an array of objects containing information about the favorite movies. The object should include the following properties: _title_ (string), _duration_ (number), _actors_ (array of strings) and a boolean property indicating if the movie was viewed or not.
- Iterate through the array and dinamically create in the page (using `document.createElement`) for each object a `<p>` element containing the title of the movie.

### 🎁 Exercise 6.4

- Use `<ul>` and `<li>` to display the movies, along with other information about them.
- For each object in the array, add a new property representing the image of the movie and display it to the page.
- Add CSS properties to diferentiate the seen vs. unseen movies from the list.
