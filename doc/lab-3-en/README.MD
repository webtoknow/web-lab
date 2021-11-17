# Lab 3 - [CSS] - Layout and Flexbox

## Content

- [🦉 Intro](#-Intro)
- [🚀 Playground](#-Playground)
- [🎢 Exercises](#-Exercises)

## 🦉 Intro

We can find a Flexbox full guide on [CSS tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

We can find more info about [responsive web design](https://web.dev/responsive-web-design-basics/) on [web.dev](https://web.dev/).

Also, Vojtech Ruzicka wrote a very good article about [CSS positioning](https://www.vojtechruzicka.com/css-position).

## 🚀 Playground

[Flexbox froggy](https://flexboxfroggy.com/) helps us to learn about [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp). Let's play!

## 🎢 Exercises

The following exercises will continue our journey to build a personal website.

### 💪 Exercise 3.1

Please use the following markup and styles in your exercises to create the webpages. Create a new HTML document (_template.html_) containing the markup and create a new CSS file (_style.css_) file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">

  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/portfolio-style.css">
  <title>Template</title>
</head>
<body>
  <header class="header">
    <h1 class="title">SUNNY LUTHRA</h1>
    <h2 class="subtitle">Animator / Photographer</h2>
  </header>
  <nav class="menu menu--light">
    <a class="menu-item" href="index.html"><i class="fa fa-user"></i> About me</a>
    <a class="menu-item" href="resume.html"><i class="fa fa-file-text"></i> Resume</a>
    <a class="menu-item menu-item-active" href="portfolio.html"><i class="fa fa-heart"></i> Portfolio</a>
    <a class="menu-item" href="contact.html"><i class="fa fa-envelope"></i> Contact</a>
  </nav>
  <div class="page-grid">
    <main class="container portfolio-container">
      <!-- Add your code here -->
    </main>
    <footer class="footer">
      <p class="copyright">Designed with lots of love at mRova. </p>
    </footer>
  </div>
</body>

</html>
```

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

p {
    font-family: 'Lato', sans-serif;
    line-height: 1.5em;
    margin: 0 0 1.5em 0;
}

.page-grid {
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 990px 1fr;
    grid-template-areas:
        ". container ."
        ". footer .";
}

.container {
    grid-area: container;
    background: white;
    padding: 30px 20px;
    border: 1px solid #f1f1f1;
    box-shadow: 0px 6px #c0392b;
    border-radius: 0px 0px 4px 4px;
}

.footer {
    grid-area: footer;
    margin-top: 30px;
    margin-bottom: 10px;
    background: white;
    text-align: center;
    padding: 15px;
    box-shadow: 0px 4px #ccc;
    border-radius: 4px;
}

.copyright {
    margin: 0;
}

.menu {
    width: 990px;
    margin: 80px auto 0 auto;
    text-align: center;
}

.menu--light {
    margin: 30px auto 0 auto;
}

.menu-item {
    display: inline-block;
    margin-right: 10px;
    margin-top: 20px;
    padding: 10px 40px 10px 40px;
    background: white;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
    outline: none;
    color: #888;
    vertical-align: bottom;
}
.menu-item-active {
    position: relative;
    bottom: -1px;
    color: #c0392b;
    padding: 15px 40px 15px 40px;
    margin-top: 0;
}

.title {
    margin: 0;
    font-size: 38px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
}

.subtitle {
    color: #999;
    font-size: 1.5em;
    line-height: 1em;
    margin: 0 0 1em 0;
    text-align: center;
}

.header {
    margin-top: 30px;
}

hr {
    margin: 25px 0;
    border: 1px solid #f1f1f1;
}

@media (max-width: 990px) {
    .menu {
        width: 100%;
    }
    .page-grid {
        display: block;
    }
    .footer {
        border-radius: 0;
    }
}

@media (max-width: 768px) {
    body {
        background: none;
    }
    .header {
        display: none;
    }
    .footer {
        margin-top: 3px;
    }
}
/*  Add your CSS here */
```

### 💪 Exercise 3.2

Update the template styles with new menu styles for tablet and mobile (below 990px), as in the image below, and don't forget to use [CSS media queries](https://web.dev/learn/design/media-queries/):

![Menu mobile](menu-mobile.PNG)

### 💪 Exercise 3.3

Use the template to create a new HTML document (_portfolio.html_) containing the pictures below. To get free images we can use [picsum.photos](https://picsum.photos/):

- https://picsum.photos/seed/a/400/400"
- https://picsum.photos/seed/b/400/400"
- https://picsum.photos/seed/c/400/400"
- https://picsum.photos/seed/d/400/400"
- https://picsum.photos/seed/e/400/400"
- https://picsum.photos/seed/f/400/400"

Use [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) to style the gallery as in the design below.

The number of columns used to display the images must be different based on resolution (please use [CSS media queries](https://web.dev/learn/design/media-queries/)):

- resolution smaller than 768px - 1 column (mobile)
- resolution between 768px and 990px - 2 columns (tablet)
- resolution bigger than 990px - 3 columns (desktop)

![Design website personal - portfolio](personal-website-portfolio.png)

### 💪 Exercise 3.4

Use the template to create a new HTML document (_contact.html_) and add the [Font Awesome](https://fontawesome.com/v4.7.0/get-started/) icon library. Test it by displaying an icon into the page.

### 💪 Exercise 3.5

Complete the markup and styles in _contact.html_ to look like below.

![Design website personal - contact](personal-website-contact.png)

### 💪 Exercise 3.6

Using [CSS position](https://www.vojtechruzicka.com/css-position) property, [Font Awesome](https://fontawesome.com/v4.7.0/icon/bell-o) and [background](https://raw.githubusercontent.com/WebToLearn/personal-page-css-workshop/master/img/background.jpg) image, create and style _position.html_ to look like below.

![Design website personal - contact](position.png)
