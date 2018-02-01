$(document).ready(function() {
    $('#fullpage').fullpage({
      // anchors:['firstPage','secondPage','thirdPage','fourthPage']
    });
});

$("#firstPageDownArrow").on("click", function(){
  console.log("arrow clicked");
  // window.scrollBy(0,300);
  $('html, body').animate({ scrollTop: 1000 }, 'fast');
});
