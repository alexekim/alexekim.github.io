$(document).ready(function(){
  console.log("the window is loaded")
        // All keyboard sound functions here
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
var round2melody = [1,3,7,5];
var round3melody = [5,3,8,6];
var round5melody = [1,8,7,3];

var userAnswer = [];

  $("button").click(function(event){
    event.preventDefault(); //prevents form from submitting to hypothetical server

    var value1 = $("input[name = 'firstAnswer']").val().toLowerCase();
    var value2 = $("input[name = 'secondAnswer']").val().toLowerCase();
    var value3 = $("input[name = 'thirdAnswer']").val().toLowerCase();

    // var value2  = $("secondAnswer").val();
    // var value3  = $("thirdAnswer").val();

    userAnswer.push(value1)
    userAnswer.push(value2)
    userAnswer.push(value3)
    console.log("userAnswer is: " + userAnswer)

    //compare user answer to answer key
    if(JSON.stringify(round1melody) == JSON.stringify(userAnswer)){
      console.log("yes!");
      var score1 = $("<div id='asdf'>You got it!!</div>");
      $("#asdf").append(score1);
    }
    else {
      console.log("sorry no")
    }


  });
//end of button click or round

//display score
  var currentscore = 0;

// correct answers
  var round1melody = ["c", "e", "g"];
  var round2melody = [1,3,7,5];
  var round3melody = [5,3,8,6];
  var round5melody = [1,8,7,3];

var  input = [];

// var checkanswer = function(){
//   input.push(prompt("first note") );
//   input.push(prompt("second note") );
//   input.push(prompt("third note") );
//   console.log("input is " + input);
//   if(JSON.stringify(round1melody) == JSON.stringify(input)){
//     console.log("yes!");
//   }
//   else {
//     console.log("sorry no")
//   }
// }



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
