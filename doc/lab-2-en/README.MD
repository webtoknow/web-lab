# Lab 2 - [CSS] - Intro

## Content

- [🦉 Intro](#-Intro)
- [🚀 Playground](#-Playground)
- [🎢 Exercises](#-Exercises)

## 🦉 Intro

CSS or `Cascading Style Sheets` is the descriptive language used for styling the HTML document (the webpage:

![CSS Rules](https://www.teaching-materials.org/css/img/cssrule.png)

```CSS
body {
  color: #333333;
}

nav {
  background-color: #ddd;
}

.container {
  margin: 0 auto;
}

.container .medium  {
  padding: 0 30px 25px 5px;
}

h1, h2, h3 {
  color: #000;
}

nav > a {
  background-color: #fff;
}
```

Here is how we add styles to the webpages:

```HTML
<!-- Inline Style -->
<tag style="property: value;">
```

```HTML
<!-- Embedded Style -->
<head>
  <style type="text/css">
    selector { property: value; }
  </style>
</head>
```

```HTML
<!-- External Style Sheet -->
<head>
  <link rel="stylesheet" type="text/css" href="style.css" />
</head>
```

To easily learn the CSS properties, we can use a [Cheat Sheet](css-cheat-sheet.pdf).

Also, [developer.mozilla.org](developer.mozilla.org) will help us to exercise [the selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors).

## 🚀 Playground

[CSS Diner](https://flukeout.github.io/) helps us to have a better understanding of CSS selectors. Let's play!

## 🎢 Exercises

### 💪 Exercise 2.1

Create a HTML document (_cv.html_) with the following markup and 2 CSS files (_style.css_ and _resume-style.css_) with its styles.

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="resume-style.css">
  <title>Resume</title>
</head>

<body>
  <header class="header">
    <h1 class="title">SUNNY LUTHRA</h1>
    <h2 class="subtitle">Animator / Photographer</h2>
  </header>
  <nav class="menu">
    <a class="menu-item" href="index.html"><i class="fa fa-user"></i> About me</a>
    <a class="menu-item menu-item-active" href="resume.html"><i class="fa fa-file-text"></i> Resume</a>
    <a class="menu-item" href="portfolio.html"><i class="fa fa-heart"></i> Portfolio</a>
    <a class="menu-item" href="contact.html"><i class="fa fa-envelope"></i> Contact</a>
  </nav>
  <div class="resume-container">
    <main class="resume-content">
      <!-- Work Experience -->
      <section>
        <h2 class="resume-title">Work Experience</h2>
        <div class="resume-info">
          <h3 class="resume-subtitle">Freelance web designer</h3>
          <div class="resume-date">
            <time datetime="2009">2009</time> - <time datetime="2010">2010</time>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc
          vel vehicula ante.</p>
        <hr>
        <div class="resume-info">
          <h3 class="resume-subtitle">Python Programmer</h3>
          <div class="resume-date">
            <time datetime="2010">2010</time> - <time datetime="2011">2011</time>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc
          vel vehicula ante.</p>
        <hr>
        <div class="resume-info">
          <h3 class="resume-subtitle">Social Media Lunatic</h3>
          <div class="resume-date">
            <time datetime="2011">2011</time> - <time datetime="2012">2012</time>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc
          vel vehicula ante.</p>
        <hr>
        <div class="resume-info">
          <h3 class="resume-subtitle">Being Awesome</h3>
          <div class="resume-date">
            <time datetime="2011">2011</time> - <time datetime="2019">2019</time>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc
          vel vehicula ante.</p>
        <hr>
      </section>
      <!-- Education -->
      <section>
        <h2 class="resume-title">Education</h2>
        <div class="resume-info">
          <h3 class="resume-subtitle">NoUse School</h3>
          <div class="resume-date resume-date--green">
            <time datetime="2001">2001</time> - <time datetime="2002">2002</time>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc
          vel vehicula ante.</p>
        <hr>
        <div class="resume-info">
          <h3 class="resume-subtitle">Super Useless College</h3>
          <div class="resume-date resume-date--green">
            <time datetime="2002">2002</time> - <time datetime="2008">2008</time>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc
          vel vehicula ante.</p>
        <hr>
      </section>
    </main>
    <aside class="resume-aside">
      <h2 class="resume-title">Skills</h2>
      <h3 class="resume-subtitle">Software</h3>
      <ul class="skills">
        <li class="skills-item"><span class="skills-bg photoshop">Photoshop</span></li>
        <li class="skills-item"><span class="skills-bg ilustrator">Ilustrator</span></li>
        <li class="skills-item"><span class="skills-bg indesign">InDesign</span></li>
        <li class="skills-item"><span class="skills-bg xd">Xd</span></li>
        <li class="skills-item"><span class="skills-bg sketch">Sketch</span></li>
        <li class="skills-item"><span class="skills-bg office">Microsoft Office</span></li>
        <li class="skills-item"><span class="skills-bg linux">Linux</span></li>
      </ul>
      <h3 class="resume-subtitle">Design</h3>
      <ul class="skills">
        <li class="skills-item"><span class="skills-bg user">User</span></li>
        <li class="skills-item"><span class="skills-bg typography">Typography</span></li>
        <li class="skills-item"><span class="skills-bg web">Web Applications</span></li>
      </ul>
      <h3 class="resume-subtitle">Programming Language</h3>
      <ul class="skills">
        <li class="skills-item"><span class="skills-bg html">HTML/CSS</span></li>
        <li class="skills-item"><span class="skills-bg php">PHP/MySql</span></li>
        <li class="skills-item"><span class="skills-bg javascript">jQuery/JavaScript</span></li>
        <li class="skills-item"><span class="skills-bg ruby">Ruby</span></li>
        <li class="skills-item"><span class="skills-bg python">Python</span></li>
      </ul>
    </aside>
  </div>
</body>

</html>
```

For the beginning, let's add the styles below in _style.css_ file:

```CSS
* {
    box-sizing: border-box;
}

html {
    font-family: 'Open Sans', sans-serif;
    color: #555;
}

body {
    background: url('https://raw.githubusercontent.com/WebToLearn/personal-page-css-workshop/master/img/background.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
}

.header {
    margin-top: 30px;
}

.resume-container {
  background: white;
  width: 990px;
  margin: 0 auto 30px auto;
  padding: 30px 20px;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 6px #c0392b;
  border-radius: 0px 0px 4px 4px;
  display: flex;
}

```

At the end of all the exercises, the page should look like this image:

![Design personal website - resume](personal-website-resume.png)

## 💪 Exercise 2.2

Let's apply in our page the `Open Sans` and `Lato` fonts with a thickness of 400, 700 and 900, using [Google Fonts](https://fonts.google.com/).

### 💪 Exercise 2.3

Style the title of the page to have the following properties:

- its margin to be `0`
- the font to be `Lato`
- the size of the font to be `38px`
- the font thickness to be `900`
- the text to be written in block letters
- the text to be aligned to the centre

### 💪 Exercise 2.4

Style the subtitle of the page to have the properties below:

- the text color to be `#999`
- its bottom margin to be `1em`
- the font to be `Lato`
- the size of the font to be `1.5em`
- the distance between rows to be `1em`
- the text to be written in block letters
- the text to be aligned to the centre

### 💪 Exercise 2.5

Style the navigation menu to have the following properties:

The menu container:

- the width to be `990px`
- the margins to be `80px auto 0 auto`
- the text to be aligned to the centre

The menu options:

- the element to be of `inline-block` type
- the right margin to be `10px`
- the left margin to be `20px`
- the padding to be `10px 40px 10px 40px`
- the background to be white
- remove _text-decoration_
- the font thickness to be `bold`
- the text to be written in block letters
- the type of the font to be `Lato`
- the size of the font to be `14px`
- the color to be `#999`
- the vertical alignment to be at baseline

The active menu option:

- the position to be relative
- the element to be lower by `1px` (_bottom_: `-1px`)
- the color to be `#c0392b`
- the padding to be `15px 40px 15px 40px;`
- the top margin to be `0`

### 💪 Exercise 2.6

Style the `<hr>` tag to have the properties below:

- the top margin to be `25px`
- the border to be `1px`, `solid` and to have the `#f1f1f1` color

### 💪 Exercise 2.7

Style the _Work experience_ and _Education_ sections according to the specifications:

![Specs for Work experience and Education sections](work-experience-specs.png)

### 💪 Exercise 2.8

Style the _Skills_ section according to the specifications:

![Specs for Skills section](skills-specs.png)

> You can improve the design of the Skills bar using `background` and `linear-gradient`, like in the example below:

```CSS
.skills-bg:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(135deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent); 
  background-size: 5rem 5rem;
  z-index: 1;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;
}
```
