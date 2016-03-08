$(document).ready(function(){
  console.log("the window is loaded")

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



  // $(".jamSandwich").fadeIn(4000)
  //
  // $(".example").css("backgroundColor", "rgb(89, 115, 65)")
  //
  // $(".example").css({
  //   'color': "rgb(80, 159, 10)",
  //   "padding": "1%",
  //   "textAlign": "center"
  })
