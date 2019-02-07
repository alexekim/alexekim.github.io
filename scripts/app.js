// document.getElementById('header').addEventListener("mouseover", function(){
//   console.log("hovered");
//   document.getElementById('headerEmoji').innerHTML = "😎";
// })
//
// document.getElementById('header').addEventListener("mouseleave", function(){
//   console.log("hovered");
//   document.getElementById('headerEmoji').innerHTML = "🤓";
// })
//
// document.addEventListener("DOMContentLoaded", function(event) {
//   // console.log("asdf");
//   document.getElementById("app").style.display = "block";
// });
//
// document.getElementById("bg").addEventListener("load", function(event){
//   document.getElementById("app").style.display = "block";
//   console.log("image loaded");
// })

// var x = $('#bg').attr('background-image')
//
// $('#bg').attr('src', 'http://alexekim.github.io/images/plane.jpg').on('load', function() {
//    $(this).remove(); // prevent memory leaks as @benweet suggested
//    alert("asdf");
//    // $('body').css('background-image', 'url(http://alexekim.github.io/images/plane.jpg)');
// });

var $div = $('#bg');
var bg = $div.css('background-image');
  if (bg) {
    var src = bg.replace(/(^url\()|(\)$|[\"\'])/g, ''),
      $img = $('<img>').attr('src', src).on('load', function() {
        // do something, maybe:
        // alert();
        document.getElementById("app").style.display = "block";
      });
  }
