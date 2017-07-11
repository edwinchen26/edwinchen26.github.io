/* Scroll function */
$("[data-scrollTo]").click(function(){
	var div = $(this).attr("data-scrollTo");
	$('html,body').animate({ scrollTop: $("#"+div).offset().top}, 'slow');
});