# Lab 6 - [JS] - DOM

## Content

- [🦉 Intro](#-Intro)
- [🎢 Exercises](#-Exercises)

## 🦉 Intro

DOM ([Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)) is an Application Programming Interface (API) which defines a HTML, XHTML or XML document as a tree structure where each node is an object representing a part of the document. The objects can be programmatically manipulated via [DOM functions](https://www.impressivewebs.com/10-essential-dom-methods-techniques-for-practical-javascript/), and any changes after executing them will be visible in the document display.

## 🎢 Exercises

### 💪 Exercise 6.1

#### Hack Google

- Navigate to [google.com](https://www.google.com) in Chrome or Firefox browser and open Dev Tools console: Cmd-Opt-I (Mac), Ctrl-Shift-I (Windows).
- Find the Google logo and store it into a variable using the [DOM access methods](https://www.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-access/a/summary-dom-access-methods).
- Update the image source (the URL) to make the Yahoo logo to appear. You can search by the logo URL using a search engine.
- Find the Google search button and store it into a variable.
- Update the text of the button to be "Yahoo".

### 💪 Exercise 6.2

#### All the websites should have a section named "About us"

- Create a HTML document (_aboutme.html_) with the below template being included into `<body>`:

```html
<h1>About Me</h1>
<dl>
  <dt>Nickname:</dt>
  <dd id="nickname"></dd>
  <dt>Age:</dt>
  <dd id="age"></dd>
  <dt>Hometown:</dt>
  <dd id="hometown"></dd>
</dl>
```

- Create a new JavaScript file named `script.js` and link it to the HTML document using `<script>` tag at the end of it.
- Change the `<body>` style to have font-family: _Arial, sans-serif_.
- Replace every `<dd>` (_nickname, age, hometown_) with your information.
- Iterate through each `<dt>` and add the _list-item_ class.
- Create a CSS file (and link it to the document) with the styles needed for the _list-item_ class to have a red text.
- Create a new `<img>` element containing the `src` attribute which points to an image with you. Add this element to the page.

### 💪 Exercise 6.3

#### My IMDB

- Create a HTML document (_movies.html_) with "My favorite movies:" title, using the `<h1>` tag.
- Create a JavaScript file named `script.js` and link it to the HTML document using `<script>`tag at the end of it.
- Create an array of objects containing information about the favorite movies. The object should include the following properties: _title_ (string), _duration_ (number), _actors_ (array of strings) and a boolean property indicating if the movie was viewed or not.
- Iterate through the array and dynamically create in the page (using `document.createElement`) for each object a `<p>` element containing the title of the movie.

### 🎁 Exercise 6.4

- Use `<ul>`, `<li>` and `<article>` to display the movies, along with other information about them.
- For each object in the array, add a new property representing the image of the movie and display it to the page.
- Add `Yes` or `No` to differentiate the seen vs. unseen movies from the list.

The markup should resemble this: 

```html
<ul>
  <li>
    <article>
      <h2>Title:</h2>
      <p>Movie Title 1</p>

      <h2>Duration:</h2>
      <p>120 minutes</p>

      <h2>Actors:</h2>
      <ul>
        <li>Actor 1</li>
        <li>Actor 2</li>
        <li>Actor 3</li>
      </ul>

      <figure>
        <img src="movie1.jpg" alt="Movie 1 Poster">
        <figcaption>Movie 1 Poster</figcaption>
      </figure>

      <h2>Viewed:</h2>
      <p>No</p>
    </article>
  </li>

  <!-- Repeat the structure for each movie object -->
</ul>
```

## 💗 Credits

Exercises 6.1, 6.2 and 6.3/6.4 are modified versions of [The Logo Hijack
](https://www.teaching-materials.org/jsweb/exercises/dom_manipulation), [About Me
](https://www.teaching-materials.org/jsweb/exercises/dom_manipulation_advanced) and [The Book List
](https://www.teaching-materials.org/jsweb/exercises/dom_manipulation_advanced) originally found on [teaching-materials.org](teaching-materials.org). For additional exercises similar to this, please visit [teaching-materials.org](teaching-materials.org).