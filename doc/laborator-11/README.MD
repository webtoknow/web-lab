# Laborator 11 - Event loop

## Exercitiul 11.1

### Catelus cu parul cret

* Creati un document HTML (*index.html*) cu template-ul de mai jos inclus in `<body>`:

```html

<div id='buttons'>
  <button id="start-button">Start</button>
  <button id="speed-button">Go Faster!</button>
  <button id="stop-button">Stop</button>
</div>
<div id="info"></div>
<img style="position:absolute; left: 0px; top: 80px;" src="https://raw.githubusercontent.com/bmnicolae/laborator-tehnici-web/master/doc/laborator-11/dog.gif">

<script>
  var movePixels = 10; // number of pixels
  var delayMs = 50; // number of miliseconds
  var dogTimer = null;

  // Move the image on screen with 10px
  function dogWalk() {
    var img = document.getElementsByTagName('img')[0];
    var currentLeft = parseInt(img.style.left);
    img.style.left = (currentLeft + movePixels) + 'px';
    // reset image position to start
    if (currentLeft > (window.innerWidth-img.width)) {
      img.style.left = '0px';
    }
  }

  // Call dogWalk function every 50 ms
  function startDogWalk() {
    dogTimer = window.setInterval(dogWalk, delayMs);
  }
</script>
```

* Adaugati un eveniment pe butonul *Start* si creati functia pentru a porni miscarea catelului.
* Adaugati un eveniment pe butonul *Stop* si creati functia pentru a opri miscarea catelului.
* Adaugati un eveniment pe butonul *Go Faster!* si creati functia pentru a mari viteza de miscare a catelului.
* Afisati in tag-ul identificat prin id-ul *info* viteza de miscare, calculata in pixeli pe secunda (Viteza: 300px/secunda).
* Dezactivati butoanele in urmatoarele situatii:
  * Butonul *Start* atunci cand catelul este in miscare;
  * Butoanele *Stop*, *Go Faster!* si *Reset speed* atunci cand catelul este in repaos;

## Exercitiul 11.2

* Folositi *[Object literal pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)* pentru a rescrie exerciutul anterior.