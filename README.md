# alexekim.github.io
Welcome to Alex's Page!
Project One: Musical Ear Training
===================


This is my _very first_ in-class project using **HTML, CSS, and JavaScript**. My assignment is to build a game.

----------
**Game Requirements**
 The app must:
 - Render a game in the browser
 - Switch turns between two players or more (or defend why you are not)
 - Design logic for winning & visually display which player won
 - Include separate HTML / CSS / JavaScript files
 - Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
 - Use Javascript or jQuery for DOM manipulation
 - Deploy your game online, where the rest of the world can access it
 - Use semantic markup for HTML and CSS (adhere to best practices)

 ![](https://cicsitecopy.wpengine.com/wp-content/uploads/2013/07/General-Assembly-logo.png)





The Game
------------
Synopsis:

Just like classical ear training, the game will present the user with a melody. The user must listen closely to the melody and decipher which notes were played. A keyboard, most likely built with **JavaScript**, will be available as either a tool to the user, or as the method of input.

At this stage, I would like a three note melody to be played, which will be paired with an ordered list, most likely in an ``array``. The inputted notes must match, and if they do, a points counter will track progress.

Technologies
------------
**HTML**

There will most likely be permanent text on the document like the title, instructions, points, and sections for layout purposes. This might include pictures, and places for Javascript elements to be appended.

**CSS**

CSS will be important for laying out the interface of the game. The layout will be static for the most part. The only time I can think of it changing is after a round is completed, to give way to a presentation of points.

**JavaScript and jQuery**

The keyboard will most likely be heavily written in the .js file. Sound will be produced based off of clicks on the keyboard. Event listeners! I can also imagine the clicked key being highlighted with a color. Any changing elements, like score, will be coded in JavaScript.

JavaScript scoring might look conceptually like this:

``var score = 0``


``if(input == true) {
    scoreDiv.html("correct!");
    score += 1;
  }``










Documents
------------

At the moment, the project involves a .js file,  .html file,  and a ``readme.md``. Pretty simple. Let's see where things go. **Woo!**
