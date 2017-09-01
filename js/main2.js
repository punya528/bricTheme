$('div.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$(document).on('ready', function() {

  $(".regular").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    cssEase: 'linear',
    arrow: false,

  });
});

window.onload = function() {
  play();
}

function play() {
  var video = document.getElementsByTagName("video");
  console.log(video);
  for (i = 0; i < video.length; i++) {
    video[i].load();
    video[i].play();
    console.log(video[i]);
  }
}
