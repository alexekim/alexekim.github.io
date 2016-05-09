# alexekim.github.io
Project One: Musical Ear Training
[Playable here](alexekim.github.io/project1)
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

**How Requirements Were Met**
 - Game is functional in browser!
 - This is a one player game. In an aural skills course, you are not meant to compete against other students, it is more about individual development of learning scale structures.
 - There are 5 rounds in the game, and you gain a point for every melody you transcribe correctly. Your score is a reflection of where you are in your listening abilities. This is a 'high-score' mentality type of game.
 - HTML CSS JavaScript files separated and linked. Additional media folder stored music files
 - KISS: Kept the game on one HTML page that does not require linkage to other pages. No time is wasted waiting for a new round to load. Buttons that appear will indicate progress, and issue new content on the page.
 - KISS & DRY in code: Each "submit-answer" button has two, main tasks. The first is to evaluate the answer, and then second is to progress the game. Each "next" button presents a new melody and brings on the next submit-answer button that corresponds to the round. The JavaScript looks repetitive, but only because an event listener is assigned for each, round-specific button. More on this later.
 - JS/jQuery is heavily used to apply and replace new elements, text, and audio features to the DOM. This prevents the player from having to load a new page each round.
 - The game is available to the public at http://alexekim.github.io/project1/index.html
 - The HTML tags that I chose are different enough to manage styling. It is heavily class-based for both styling and JavaScript, which made different sections of HTML easy to manipulate.


The Game
------------
Synopsis:

Just like classical ear training, the game presents the player with a melody. The player must listen closely to the melody and decipher which notes were played. A keyboard, built with **JavaScript**, is available as either a tool to the player using clicks or the homerow of the keyboard.

A three note melody is played once via a button that disappears upon click. The player must playback the melody in their head, and is allowed to use the piano as a guide. In real life, a piano would not even be available, but the game is meant to be accessible to beginners as well as intermediate players.

The player then selects which notes they think are correct. The submit-answer button will push the notes into an array which is compared to a different array containing the correct answers. The player is then informed if they were correct or incorrect. A correct answer will increase the score by one point. There are 5 rounds. The score is a reflection of where the player is in their listening abilities. This is a 'high-score' mentality type of game.

The game ends after the final submission, and a new div will present the player with a final score and a reset button which reloads the page.


Technologies
------------
**HTML**

There is permanent text on the document like the title, instructions, points element, and sections for layout purposes. This leaves a lot of room for JavaScript manipulation.

**CSS**

CSS was important for laying out the interface of the game. The layout is static for the most part. The keyboard coloration was made using a CSS Hover feature, along with .effect() methods upon kepress events. Several new elements are appended to the DOM, which were styled using CSS. Additionally, there are a few grid system elements, but a few items stand outside of this. This was honestly due to a decision to work on the functionality of the game over styling/UI.

**JavaScript and jQuery**

The keyboard is built using divs that are tied to jQuery event listeners. This includes mouse clicks and .keydown() methods.

Audio elements were defined as variables. The variables were tied to event listeners that would .play() upon click or keypress.

For example:
``$('.c').click(function() {
    cAudioElement.play();
});``
'.c' is a div class. when the div is clicked, play this element which is tied to a media file.

The audio scripts were new to me. I understand them structurally, but do not completely understand the syntax, besides more obvious methods like ``.play()``. Thank you, StackOverflow.

**Other unfamiliar scripts:**

_Answer Input:_

Initially, answers were typed into ``<input>`` sections on the webpage. A submit button would push those values into an array using ``toLowerCase()`` ``.val()`` and ``.push()`` methods. The user-created array was then compared to an answer key array in an ``if, else`` statement. This was `` if(round1Answer == round1melody)``

However, this changed, when I decided a dropdown ``<select>`` element would be better to prevent user-error in an ``<input>`` box. I had to switch my array pushing into this:
``  $('select').each(function(){
    round1Answer.push($(this).val());
  })
`` which I also found on StackOverflow. I believe it pushes each 'select' item by ``.val()`` into a selected object, which was my empty array ``var round1Answer = [];``.

_Keyboard interference:_

When I first installed the keyboard/piano functionality, I was mighty-pleased. Until I realized I couldn't type into the input fields.

``  $('input').keydown(function(e) {
      e.stopPropagation();
  });``

  This was the solution. This means "when an input is selected, the .keydown() method will be cancelled out". However, using a ``<select>`` input later on may have made this unnecessary.





**DRY:**

The button event listeners seem repetitive. This was how I managed to create new rounds without refreshing the page. New buttons would be tied to different, round-specific arrays and event-listeners.

Each button removes items that were used for previous rounds. This usually meant that a button would remove itself, but produce a new button to progress the game.

This makes me wonder if the same button could have been used for different rounds, and connect to different arrays. Instead, creating new buttons was my final solution.

There are several ``console.log()`` progress checkers. This allowed me to keep track of the many, many functions that a button click would initiate. These would be removed in a final product, and replaced with comments.

** User Stories **

- I want a game that will give me audio feedback.
- I want a game that will allow me to interact with a piano
- I want to be able to listen to several different melodies and be tested on them
- I want to be graded on my performance


**Wish List:**

My original vision had a C-Major Scale play automatically upon document load. Automatically, the key would be visually highlighted when played during this scale.

Instead of the user being able to use the piano for reference, the user would have to use the piano as a method of input. Each click matters! If the "C" key was triggered, a "C", would be pushed into the array.

This would make the game significantly more difficult, and similar to real-life experiences. However, this game can be used as a beginner-friendly version of aural skills, with the ability to check notes on the piano.

I also would put several more levels, including 4, 5, 6-note melodies. I would add sheet music and different rhythm inputs.

Finally, the game still looks really archaic. I wish I had done more to style the interface. There are divs and messages all over the place, and it is not responsive in the least.

This came from a decision to concentrate on the functionality of the game. On day 3, Wednesday, I had a MVP. But I had time to either style it, or improve the gameplay. I went with gameplay. In this time, I succeeded in:
- Changing inputs to dropdown select elements
- Giving only one chance to listen to melodies
- Cleaning up lots of repeated code in event listeners
- Reordering the event listeners on the app.js file
- Adding background image and restyling text
