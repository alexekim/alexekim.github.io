$(document).ready(function(){
  console.log("the window is loaded")
        // All keyboard sound functions here


});
// END OF DOC READY
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


// melody 1 button is embedded in original HTML
var melody2Btn = $("<button class='sample2'>Play Melody 2</button>");
var melody3Btn = $("<button class='sample3'>Play Melody 3</button>")
var melody4Btn = $("<button class='sample4'>Play Melody 4</button>")
var melody5Btn = $("<button class='sample5'>Play Melody 5</button>")

// submit answer 1 button is embedded in original HTML
var submitAnswer2 = $("<button type='submit' name='submitAnswer2'>Submit Answer 2</button>").on("click", function(){
  var value1 = $("input[name = 'firstAnswer']").val().toLowerCase();
  var value2 = $("input[name = 'secondAnswer']").val().toLowerCase();
  var value3 = $("input[name = 'thirdAnswer']").val().toLowerCase();
  round2Answer.push(value1)
  round2Answer.push(value2)
  round2Answer.push(value3)
  console.log("round2Answer is: " + round2Answer)
  $("button[name = 'submitAnswer2']").hide();
  $("button[name = 'submitAnswer2']").prop("disabled", true);
  console.log("Submit Answer button hidden and disabled");
  if(JSON.stringify(round2melody) == JSON.stringify(round2Answer)){
    score += 1;
    $(".scorediv").html("Score is: " + score);
    console.log("Submit Answer 2 button hidden and disabled")
    $(".result").html("That was correct!").css("color", "green").fadeIn();
    $(".scorediv").effect( "shake", {times:2}, 500 );
    $("body").append(nextTwoToThreeBtn);
    console.log("next round button added")
  }
  else {
    $(".scorediv").html("Score is: " + score);
    console.log("Submit Answer 2 button hidden and disabled")
    $(".result").html("Incorrect").css("color", "red").fadeIn();
    $(".scorediv").effect( "shake", {times:2}, 500 );
    console.log("nope!!@#!@#");
    $("body").append(nextTwoToThreeBtn);
    console.log("next round button added");
  }
})

var submitAnswer3 = $("<button type='submit' name='submitAnswer3'>Submit Answer 3</button>").on("click", function(){
  var value1 = $("input[name = 'firstAnswer']").val().toLowerCase();
  var value2 = $("input[name = 'secondAnswer']").val().toLowerCase();
  var value3 = $("input[name = 'thirdAnswer']").val().toLowerCase();
  round3Answer.push(value1)
  round3Answer.push(value2)
  round3Answer.push(value3)
  console.log("round3Answer is: " + round3Answer)
  $("button[name = 'submitAnswer3']").hide();
  $("button[name = 'submitAnswer3']").prop("disabled", true);
  console.log("Submit Answer button hidden and disabled");
  if(JSON.stringify(round3melody) == JSON.stringify(round3Answer)){
    score += 1;
    $(".scorediv").html("Score is: " + score);
    console.log("Submit Answer 3 button hidden and disabled")
    $(".result").html("That was correct!").css("color", "green").fadeIn();
    $(".scorediv").effect( "shake", {times:2}, 500 );
    $("body").append(nextThreeToFourBtn);
    console.log("next round button added")
  }
  else {
    $(".scorediv").html("Score is: " + score);
    console.log("Submit Answer 3 button hidden and disabled")
    $(".result").html("Incorrect").css("color", "red").fadeIn();
    $(".scorediv").effect( "shake", {times:2}, 500 );
    console.log("nope!!@#!@#");
    $("body").append(nextThreeToFourBtn);
    console.log("next round button added");
  }
})


var submitAnswer4 = $("<button type='submit' name='submitAnswer4'>Submit Answer 4</button>").on("click", function(){
  var value1 = $("input[name = 'firstAnswer']").val().toLowerCase();
  var value2 = $("input[name = 'secondAnswer']").val().toLowerCase();
  var value3 = $("input[name = 'thirdAnswer']").val().toLowerCase();
  round4Answer.push(value1)
  round4Answer.push(value2)
  round4Answer.push(value3)
  console.log("round4Answer is: " + round4Answer)
  $("button[name = 'submitAnswer4']").hide();
  $("button[name = 'submitAnswer4']").prop("disabled", true);
  console.log("Submit Answer button hidden and disabled");
  if(JSON.stringify(round4melody) == JSON.stringify(round4Answer)){
    score += 1;
    $(".scorediv").html("Score is: " + score);
    console.log("Submit Answer 4 button hidden and disabled")
    $(".result").html("That was correct!").css("color", "green").fadeIn();
    $(".scorediv").effect( "shake", {times:2}, 500 );
    $("body").append(nextFourToFiveBtn);
    console.log("next round button added")
  }
  else {
    $(".scorediv").html("Score is: " + score);
    console.log("Submit Answer 4 button hidden and disabled")
    $(".result").html("Incorrect").css("color", "red").fadeIn();
    $(".scorediv").effect( "shake", {times:2}, 500 );
    console.log("nope!!@#!@#");
    $("body").append(nextFourToFiveBtn);
    console.log("next round button added");
  }
})

var submitAnswer5 = $("<button type='submit' name='submitAnswer5'>Submit Answer 5</button>").on("click", function(){
  var value1 = $("input[name = 'firstAnswer']").val().toLowerCase();
  var value2 = $("input[name = 'secondAnswer']").val().toLowerCase();
  var value3 = $("input[name = 'thirdAnswer']").val().toLowerCase();
  round5Answer.push(value1)
  round5Answer.push(value2)
  round5Answer.push(value3)
  console.log("round5Answer is: " + round5Answer)
  $("button[name = 'submitAnswer5']").hide();
  $("button[name = 'submitAnswer5']").prop("disabled", true);
  console.log("Submit Answer button hidden and disabled");
  var refreshBtn = $("<button type='button' value='Refresh Page' onClick='window.location.reload()'>Play Again!</button>")
  $(".row-result").append(refreshBtn)
    if(JSON.stringify(round5melody) == JSON.stringify(round5Answer)){
    score += 1;
      $(".scorediv").html("Score is: " + score);
    console.log("Submit Answer 5 button hidden and disabled")
    $(".result").html("That was correct!").css("color", "green").fadeIn();
    $(".scorediv").effect( "shake", {times:2}, 500 );
    var finalDiv = "<div class='thanks'>Thank you for playing!</div>"
    $(".result").append(finalDiv)
    var finalScoreDiv = "<div class='endscore'>Final Score is : " + score +"</div>"
    $(".result").append(finalScoreDiv)
    // $("body").append(nextFourToFiveBtn);
    // console.log("next round button added")
  }
  else {
    $(".scorediv").html("Score is: " + score);
    console.log("Submit Answer 5 button hidden and disabled")
    $(".result").html("Incorrect").css("color", "red").fadeIn();
    $(".scorediv").effect( "shake", {times:2}, 500 );
    console.log("nope!!@#!@#");

    var finalDiv = "<div class='thanks'>Thank you for playing!</div>"
    $(".result").append(finalDiv)
    var finalScoreDiv = "<div class='endscore'>Final Score is : " + score +"</div>"
    $(".result").append(finalScoreDiv)


    // $("body").append(nextFourToFiveBtn);
    // console.log("next round button added");
  }
})







var nextOneToTwoBtn = $("<button type='button' id='next' name='next'>Next Round!</button>").on('click', function(){
  $("button[name='submitAnswer']").replaceWith(submitAnswer2).fadeIn();
  console.log("old result hidden");
  $(".result").fadeOut();
  console.log("inputs cleared")
  $("input").val('');
  console.log("next round button faded out,")
  $("#next").fadeOut();
  console.log("change out sample playing button with new sample button")
  $(".sample").replaceWith(melody2Btn);

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
})

var nextTwoToThreeBtn = $("<button type='button' id='next' name='next'>Next Round!</button>").on('click', function(){
  $("button[name='submitAnswer2']").replaceWith(submitAnswer3).fadeIn();
  console.log("old result hidden");
  $(".result").fadeOut();
  console.log("inputs cleared")
  $("input").val('');
  console.log("next round button faded out,")
  $(nextTwoToThreeBtn).fadeOut();
  console.log("change out sample playing button with new sample button")
  $(melody2Btn).replaceWith(melody3Btn);
  var melodyThree = document.createElement('audio');
  melodyThree.setAttribute('src', 'media/melody3.wav');
  //audioElement.load()
  $.get();
  melodyThree.addEventListener("load", function() {
      melodyThree.play();
      }, true);
  $(".sample3").click(function() {
      melodyThree.play();
  });
  // shake the new melody button to alert the user of a next round starting.
  $(".sampleSpace").effect( "shake", {times:3}, 500 );
})

var nextThreeToFourBtn = $("<button type='button' id='next' name='next'>Next Round!</button>").on('click', function(){
  $("button[name='submitAnswer3']").replaceWith(submitAnswer4).fadeIn();
  console.log("old result hidden");
  $(".result").fadeOut();
  console.log("inputs cleared")
  $("input").val('');
  console.log("next round button faded out,")
  $(nextThreeToFourBtn).fadeOut();
  console.log("change out sample playing button with new sample button")
  $(melody3Btn).replaceWith(melody4Btn);
  var melodyFour = document.createElement('audio');
  melodyFour.setAttribute('src', 'media/melody4.wav');
  //audioElement.load()
  $.get();
  melodyFour.addEventListener("load", function() {
      melodyFour.play();
      }, true);
  $(".sample4").click(function() {
      melodyFour.play();
  });
  // shake the new melody button to alert the user of a next round starting.
  $(".sampleSpace").effect( "shake", {times:3}, 500 );
})

var nextFourToFiveBtn = $("<button type='button' id='next' name='next'>Next Round!</button>").on('click', function(){
  $("button[name='submitAnswer4']").replaceWith(submitAnswer5).fadeIn();
  console.log("old result hidden");
  $(".result").fadeOut();
  console.log("inputs cleared")
  $("input").val('');
  console.log("next round button faded out,")
  $(nextFourToFiveBtn).fadeOut();
  console.log("change out sample playing button with new sample button")
  $(melody4Btn).replaceWith(melody5Btn);
  var melodyFive = document.createElement('audio');
  melodyFive.setAttribute('src', 'media/melody5.wav');
  //audioElement.load()
  $.get();
  melodyFive.addEventListener("load", function() {
      melodyFive.play();
      }, true);
  $(".sample5").click(function() {
      melodyFive.play();
  });
  // shake the new melody button to alert the user of a next round starting.
  $(".sampleSpace").effect( "shake", {times:3}, 500 );
})








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
      // var nextOneToTwoBtn = $("<button type='button' id='next' name='next'>Next Round!</button>")

      $("body").append(nextOneToTwoBtn);
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
      // var nextOneToTwoBtn = $("<button type='button' id='next' name='next'>Next Round!</button>")
      $("body").append(nextOneToTwoBtn);
      console.log("next round button added")
      console.log("sorry no")
    }
  });


//prevents .keyCode method from interfering with the inputs!
  $('input').keydown(function(e) {
      e.stopPropagation();
  });


  $(document).keydown(function(e){
      var target = (e.target) ? e.target : e.srcElement;
      if(e.target.nodeName != "input"){
        if (e.keyCode == 65) {
           cAudioElement.play()
           $('.c').effect("highlight", {color:"red"}, 500);
           return false;
      }
      }
  });

  $(document).keydown(function(e){
      if (e.keyCode == 83) {
         dAudioElement.play()
         $('.d').effect("highlight", {color:"orange"}, 500);
         return false;
      }
  });
  $(document).keydown(function(e){
      if (e.keyCode == 68) {
         eAudioElement.play()
         $('.e').effect("highlight", {color:"yellow"}, 500);
         return false;
      }
  });
  $(document).keydown(function(e){
      if (e.keyCode == 70) {
         fAudioElement.play()
         $('.f').effect("highlight", {color:"green"}, 500);
         return false;
      }
  });
  $(document).keydown(function(e){
      if (e.keyCode == 71) {
         gAudioElement.play()
         $('.g').effect("highlight", {color:"blue"}, 500);
         return false;
      }
  });
  $(document).keydown(function(e){
      if (e.keyCode == 72) {
         aAudioElement.play()
         $('.a').effect("highlight", {color:"purple"}, 500);
         return false;
      }
  });
  $(document).keydown(function(e){
      if (e.keyCode == 74) {
         bAudioElement.play()
         $('.b').effect("highlight", {color:"rgb(227, 0, 255)"}, 500);
         return false;
      }
  });
  $(document).keydown(function(e){
      if (e.keyCode == 75) {
         c1AudioElement.play()
         $('.c1').effect("highlight", {color:"rgb(0, 255, 33)"}, 500);
         return false;
      }
  });
