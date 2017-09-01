$("#mMenu").mousedown(function(event) {
  TweenMax.to("#mobileBar", 1, {
    x: 0
  });


});

$("#mBarExit").mousedown(function(event) {
  TweenMax.to("#mobileBar", 1, {
    x: 200
  });
});
