$(document).ready(function(){
  console.log("the window is loaded")
        // All keyboard sound functions here

        var melodyOne = document.createElement('audio');
        melodyOne.setAttribute('src', 'media/melody1.wav');
        //audioElement.load()
        $.get();
        melodyOne.addEventListener("load", function() {
            melodyOne.play();
        }, true);
        $(".sample").click(function() {
            melodyOne.play();
        });

        var cAudioElement = document.createElement('audio');
        cAudioElement.setAttribute('src', 'media/c.wav');
        //audioElement.load()
        $.get();
        cAudioElement.addEventListener("load", function() {
            cAudioElement.play();
        }, true);
        $('.c').click(function() {
            cAudioElement.play();
        });
        // $('.d').click(function() {
        //     audioElement.pause();
        // });
        var dAudioElement = document.createElement('audio');
        dAudioElement.setAttribute('src', 'media/d.wav');
        //audioElement.load()
        $.get();
        dAudioElement.addEventListener("load", function() {
            dAudioElement.play();
        }, true);
        $('.d').click(function() {
            dAudioElement.play();
        });

        var eAudioElement = document.createElement('audio');
        eAudioElement.setAttribute('src', 'media/e.wav');
        //audioElement.load()
        $.get();
        eAudioElement.addEventListener("load", function() {
            eAudioElement.play();
        }, true);
        $('.e').click(function() {
            eAudioElement.play();
        });

        var fAudioElement = document.createElement('audio');
        fAudioElement.setAttribute('src', 'media/f.wav');
        //audioElement.load()
        $.get();
        fAudioElement.addEventListener("load", function() {
            fAudioElement.play();
        }, true);
        $('.f').click(function() {
            fAudioElement.play();
        });

        var gAudioElement = document.createElement('audio');
        gAudioElement.setAttribute('src', 'media/g.wav');
        //audioElement.load()
        $.get();
        gAudioElement.addEventListener("load", function() {
            gAudioElement.play();
        }, true);
        $('.g').click(function() {
            gAudioElement.play();
        });

        var aAudioElement = document.createElement('audio');
        aAudioElement.setAttribute('src', 'media/a.wav');
        //audioElement.load()
        $.get();
        aAudioElement.addEventListener("load", function() {
            aAudioElement.play();
        }, true);
        $('.a').click(function() {
            aAudioElement.play();
        });

        var bAudioElement = document.createElement('audio');
        bAudioElement.setAttribute('src', 'media/b.wav');
        //audioElement.load()
        $.get();
        bAudioElement.addEventListener("load", function() {
            bAudioElement.play();
        }, true);
        $('.b').click(function() {
            bAudioElement.play();
        });

        var c1AudioElement = document.createElement('audio');
        c1AudioElement.setAttribute('src', 'media/c1.wav');
        //audioElement.load()
        $.get();
        c1AudioElement.addEventListener("load", function() {
            c1AudioElement.play();
        }, true);
        $('.c1').click(function() {
            c1AudioElement.play();
        });
      });

var round1melody = ["c", "e", "g"];
var round2melody = ["g", "b", "c1"];
var round3melody = ["d", "f", "b"];
var round4melody = ["f", "a", "d"];
var round5melody = ["b", "c1", "f"];

var round1Answer = [];
var round2Answer = [];
var round3Answer = [];
var round4Answer = [];
var round5Answer = [];

var score        = 0;

  $("button[name = 'submitAnswer']").click(function(event){
    event.preventDefault(); //prevents form from submitting to hypothetical server

    var value1 = $("input[name = 'firstAnswer']").val().toLowerCase();
    var value2 = $("input[name = 'secondAnswer']").val().toLowerCase();
    var value3 = $("input[name = 'thirdAnswer']").val().toLowerCase();
    round1Answer.push(value1)
    round1Answer.push(value2)
    round1Answer.push(value3)
    console.log("round1Answer is: " + round1Answer)
    //compare user answer to answer key
    //compare round1Answer to round1melody
    if(JSON.stringify(round1melody) == JSON.stringify(round1Answer)){
      score += 1;
      $(".scorediv").html("Score is: " + score);
      $("button[name = 'submitAnswer']").hide();
      $("button[name = 'submitAnswer']").prop("disabled", true);
      console.log("Submit Answer button hidden and disabled")
      // inform user of result
      $(".result").html("That was correct!").css("color", "green").fadeIn();
      $(".scorediv").effect( "shake", {times:2}, 500 );
      //create next round button
      var buttonNext = $("<button type='button' id='next' name='next'>Next Round!</button>")
      $("body").append(buttonNext);
      console.log("next round button added")
      console.log("yes!");
    }
    else {
      $(".scorediv").html("Score is: " + score);
      $("button[name = 'submitAnswer']").hide();
      $("button[name = 'submitAnswer']").prop("disabled", true);
      console.log("Submit Answer button hidden and disabled")

      // inform user of result
      $(".result").html("Incorrect.").css("color", "red")
      $(".scorediv").effect( "shake", {times:3}, 500 );
      //create next round button
      var buttonNext = $("<button type='button' id='next' name='next'>Next Round!</button>")
      $("body").append(buttonNext);
      console.log("next round button added")
      console.log("sorry no")
    }

    // next round button functionality
    $("#next").click(function(event){
      event.preventDefault();
      // bring back the submit button
      console.log("submit answer button show and enable")
      $("button[name = 'submitAnswer']").fadeIn();
      $("button[name = 'submitAnswer']").prop("disabled", false);
      // hide the previous result. score will remain
      console.log("old result hidden")
      $(".result").fadeOut();
      // clear out input fields
      console.log("inputs cleared")
      $("input").val('');
      // hide the next button
      // disable here?? check later
      console.log("next round button faded out, not disabled")
      $("#next").fadeOut();
      // display the next round's melody button, this case, sample2
      console.log("change out sample playing button with new sample button")
      $(".sample").replaceWith("<button type='button' class='sample2'>Play Melody 2</button>")
      var melodyTwo = document.createElement('audio');
      melodyTwo.setAttribute('src', 'media/melody2.wav');
      //audioElement.load()
      $.get();
      melodyTwo.addEventListener("load", function() {
          melodyTwo.play();
      }, true);
      $(".sample2").click(function() {
          melodyTwo.play();
      });

      // shake the new melody button to alert the user of a next round starting.
      $(".sampleSpace").effect( "shake", {times:3}, 500 );

      // <button type="submit" name="submitAnswer">Submit Answer</button>
      // $("button[name = 'submitAnswer']").replaceWith("<button type='submit' name='submitAnswer2'>Submit Answer</button>")
    })




  });
//end of button click or round




//display round 1 elements
// audio player for melody


  // $(".jamSandwich").fadeIn(4000)
  //
  // $(".example").css("backgroundColor", "rgb(89, 115, 65)")
  //
  // $(".example").css({
  //   'color': "rgb(80, 159, 10)",
  //   "padding": "1%",
  //   "textAlign": "center"
  // })
