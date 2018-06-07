// Preload SFX & BGM
var sfx = new Howl({
  src: ['assets/sfx/intro.mp3'],
  loop: true
});

var preload = new Howl({
  src: ['assets/sfx/preload.mp3']
});

function changeScene(from, to, timeout = '500', audio){
  setTimeout(function(){
    if(typeof audio !== 'undefined'){
      $("[data-scene="+from+"]").fadeOut(500, function(){ $("[data-scene="+to+"]").fadeIn(500); });
      //sfx.stop(); // Stop all SFX
      //sfx.play();
    }else{
      $("[data-scene="+from+"]").fadeOut(500, function(){ $("[data-scene="+to+"]").fadeIn(500); });
    }
  }, timeout);
}

/* Onload document */
$(function(){
  // Init preload
  //setTimeout(function(){ preload.play() }, 1500);
  changeScene('preload', 'menu', 3000, 'intro');

  $(".buttons > span").on('mouseup mousedown', function(){
    $(this).toggleClass("active");
  });

  // Mute sound
  var playing = true;
  $(".mute").on('click', function(){
    $(this).toggleClass("off");
    if(playing){
      sfx.pause();
      playing = false;
    }else{
      sfx.play();
      playing = true;
    }
  });
});