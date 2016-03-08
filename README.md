# alexekim.github.io
Welcome to Alex's Page!
Project One: Musical Ear Training
===================


This is my _very first_ in-class project using **HTML, CSS,  JavaScript, jQuery**, and possibly other technologies. My assignment is to build a game.

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











Pseudo Code
------------

- Set up the html structure, and type in permanent tag & content. This may include instructions, key, and a few images.

- CSS: style the page to make it aesthetically pleasing and also match the theme of the game. Set proper sizes and arrange the UI to be clean and simple. A few items will be stylized later on as the JavaScript elements are written and changed, especially ones that will be appended as messages in the game change.

- The keyboard might be styled divs. The different keys can have event listeners attached to them to produce a sound/pitch upon a click. I’d also like to have them be highlighted and labeled upon a hover. This may be possible using CSS.

1. A number indicating which round it is will be displayed.
	- this may be a variable that is added by one each round.
	- .html() to change the display of the round
2. The melody will be played to the user. Not sure if repeats will be allowed.
	-This might be a button that causes a soundbite to be played.
	- These notes might be one recorded file.
	- Or, they might be organized as one file per note in the scale (about 8 notes/files).
		- I could have them called in preset orders.
		- perhaps stored in arrays or objects.
3. The keyboard will play based off of event listeners.
	- I will have to have a media folder that will host all the sound files
4. I just realized that I don’t know if I want to build a full keyboard. Maybe just 8 Divs that will be labeled C D E F G A B C! :-D
	- Will the keyboard directly input answers? If so, the click functions will push() values to an 		array.
	- This array will have to be compared to another preset array.
		i. comparison using if values?
		ii. if x == x, then  score+=1, append score
