function do_dda(){
	// Limpia los valores anteriores de la tabla y de la grafica
	$("#contenido_tabla").html("");
	$(".grafica").html("");

	// Se almacena el valor de la diferencia de X y Y en las variables respectivas
	var dx = document.getElementById('x_final').value - document.getElementById('x_inicial').value;
	var dy = document.getElementById('y_final').value - document.getElementById('y_inicial').value;
	// Variable para indicar la cantidad de iteracion a realizar
	var p = 0;
	
	// Comparación entre la diferencia de X y Y
	if((Math.abs(dx)) >= (Math.abs(dy))){
		p = Math.abs(dx);
	}else{
		p = Math.abs(dy);
	}
	
	// Se asigna el valor de incremento en X y en Y.
	var incremento_x = dx/p;
	var incremento_y = dy/p;
	
	// Se captura el valor de las coordenadas del punto inicial
	var y = parseInt(document.getElementById('y_inicial').value);
	var x = parseInt(document.getElementById('x_inicial').value);

	// Ciclo de repetición para hacer las iteraciones respectivas.
	for(var i = 0; i <= p; i++){
		// Agrega una nueva fila a la tabla de valores
		$("#contenido_tabla").append("<tr> <td>"+i+"</td> <td>"+(Math.round(x))+"</td> <td>"+(Math.round(y))+"</td> </tr>");
		// Agrega un nuevo punto a la gráfica
		$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((Math.round(y))-1)))+'px; left:'+(400 + (16*((Math.round(x))-1)))+'px;" title="('+(Math.round(x))+','+(Math.round(y))+')"></div>');
		// Ajuste del valor actual en X y en Y.
		y = y + incremento_y;
		x = x + incremento_x;
	}
	
	// Extra: Animación para mostrar los puntos
	$(".punto").each(function(i) {
		$(this).delay(500 * i).fadeIn(1000);
	});
	$('html,body').animate({ scrollTop: $("#grafica").offset().top}, 'slow');
}