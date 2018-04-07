$("button.buy").click(function(){
  var name = $(this).attr("data-name");
  var item = $('<div><i>'+name+'</i> se agregó al carrito.</div>');
  var audio = new Audio('assets/audio/alert.mp3');
  $('.modal').append(item.hide().fadeIn(1000));
  audio.volume = 0.2; 
  audio.play();
  setTimeout(function(){ item.fadeOut(500) }, 5000);
});
$(document).on('click', '.modal div', function(){ $(this).fadeOut(); });

$('.slider').slick({
  mobileFirst: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows: false
});

function change_view(view){
  if(view == "grid"){
	$(".products").addClass("grid").removeClass("list");
  }else if(view == "list"){
	$(".products").addClass("list").removeClass("grid");
  }
}

$(document).on("click", "ul.categories > li", function(){ $("ul.categories > li").removeClass("active").hide(); $(this).addClass("active"); $("ul.categories li#back").addClass("active").show(); });
$(document).on("click", "ul.categories > li.active + ul li", function(){ $("ul.categories > li.active + ul li").removeClass("active"); $(this).addClass("active"); });
$(document).on("click", "ul.categories li#back", function(){ $("ul.categories li").removeClass("active").show(); $(this).hide(); });