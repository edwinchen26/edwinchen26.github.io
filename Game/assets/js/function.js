
function setAudio(audio, timeout){
  setTimeout(function(){
    new Audio('assets/sfx/'+audio+'.wav').play();
  }, timeout);
}

function changeScene(from, to, timeout){
  setTimeout(function(){
    $("[data-scene="+from+"]").fadeOut(500, function(){ $("[data-scene="+to+"]").fadeIn(500); });
  }, timeout);
}

/* Onload document */
$(function(){
  //setAudio('preload', 1500);
  changeScene('preload', 'menu', 3000);

  $(".buttons > span").on('mouseup mousedown', function(){
    $(this).toggleClass("active");
  });
});
