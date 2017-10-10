/* Scroll function */
$("[data-scrollTo]").click(function(){
	var div = $(this).attr("data-scrollTo");
	$('html,body').animate({ scrollTop: $("#"+div).offset().top}, 'slow');
});

/* Función para cargar una sección */
function load(page){
	$("#algorithm").html("").load("pages/"+page+".html");
	$('html,body').animate({ scrollTop: $("#algorithm").offset().top}, 'slow');
}