var deltaX = 0;
$(document).ready(function() {
  $("#header").mousedown(function() {
    Move(this);
  }).mouseup(function() {
    $(this).off('mousemove');
    setImg();
  }).mouseleave(function() {
    $(this).off('mousemove');
    //returnPosition();
  });
});

function Move(obj) {
  var tempX = event.pageX;
  $(obj).mousemove(function() {
    var pageX = event.pageX;
    deltaX = pageX - tempX;
    var head = document.getElementsByClassName("head");
    for (i = 0; i < head.length; i++) {
      head[i].style.left = deltaX + 'px';
    }
  });
}

function setImg() {
  console.log(deltaX);
  if (Math.abs(deltaX) < screen.width / 2) {
    var head = document.getElementsByClassName("head");

    for (i = 0; i < head.length; i++) {
      var tempX = head[i].style.left;
      var l = tempX.length;
      var tempX = parseInt(tempX.substr(0, l - 2));
      head[i].style.left = (tempX - tempX) + 'px';
    }
  } else {
    if (deltaX > 0) {
      var head = document.getElementsByClassName("head");
      for (i = 0; i < head.length; i++) {
        head[i].style.left = 0 + 'px';
      }
    } else {
      var head = document.getElementsByClassName("head");
      for (i = 0; i < head.length; i++) {
        head[i].style.left = -window.innerWidth + 'px';

      }
    }
  }
}

window.onload = function() {


}
