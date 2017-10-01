$("#mMenu").mousedown(function(event) {
  open();


});

$("#mBarExit").mousedown(function(event) {
  exit();
});



function open() {
  TweenMax.to("#mobileBar", 1, {
    x: "0%"
  });
}

function exit() {
  TweenMax.to("#mobileBar", 1, {
    x: "-100%"
  });
}
