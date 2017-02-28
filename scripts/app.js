$(document).ready(function() {
    $('#fullpage').fullpage({
      // anchors:['firstPage','secondPage','thirdPage','fourthPage']
    });
});

$("#firstPageDownArrow").on("click", function(){
  window.scrollBy(0,300);
});
