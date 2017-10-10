function elipse(){
	// Limpia los valores anteriores de la tabla y de la grafica
	$("#contenido_tabla").html("");
	$(".grafica").html("");
	
	// Se almacena los valores de las coordenadas del centro y coordenadas del radio
	var rx = parseInt(document.getElementById('rx').value);
	var ry = parseInt(document.getElementById('ry').value);
	var xi = parseInt(document.getElementById('x_inicial').value);
	var yi = parseInt(document.getElementById('y_inicial').value);
	
	// Variables de control para el algoritmo
	var p = 0;
	var ry2 = Math.pow(ry,2);
	var rx2 = Math.pow(rx,2);
	var x = 0;
	var y = ry;
	var xneg=x*-1; // Valor de X negativo
	var yneg=y*-1; // Valor de Y negativo
	var i = 3; // Contador para las iteraciones
	
	/* Región 1 */
	// Se agrega los resultados a la tabla
	$("#contenido_tabla").append("<tr> <td>0</td> <td>"+(x+xi)+"</td> <td>"+(y+yi)+"</td> </tr>");
	$("#contenido_tabla").append("<tr> <td>1</td> <td>"+(xneg+xi)+"</td> <td>"+(yneg+yi)+"</td> </tr>");
	$("#contenido_tabla").append("<tr> <td>2</td> <td>"+(x+xi)+"</td> <td>"+(yneg+yi)+"</td> </tr>");
	$("#contenido_tabla").append("<tr> <td>3</td> <td>"+(xneg+xi)+"</td> <td>"+(y+yi)+"</td> </tr>");
	// Se traza los puntos iniciales de la region 1
	$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((y+yi)-1)))+'px; left:'+(400 + (16*((x+xi)-1)))+'px;" title="('+(x+xi)+','+(y+yi)+')"></div>');
	$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((yneg+yi)-1)))+'px; left:'+(400 + (16*((xneg+xi)-1)))+'px;" title="('+(xneg+xi)+','+(yneg+yi)+')"></div>');
	$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((yneg+yi)-1)))+'px; left:'+(400 + (16*((x+xi)-1)))+'px;" title="('+(x+xi)+','+(yneg+yi)+')"></div>');
	$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((y+yi)-1)))+'px; left:'+(400 + (16*((xneg+xi)-1)))+'px;" title="('+(xneg+xi)+','+(y+yi)+')"></div>');
	
	p = ry2-(rx2*ry)+(0.25*rx2); // Parámetro de control
	// Ciclo de ejecución
	while((ry2*x)<(rx2*y)){
	x = x + 1;
	if (p < 0){
	 p = p +(2*ry2*x)+ry2;
	}else{
	 y = y - 1;
	 p = p+(2*ry2*x)-(2*rx2*y)+ry2;
	}
	// Se declara X y Y negativos con sus nuevos valores
	xneg=x*-1;
	yneg=y*-1;

	// Se agrega los resultados a la tabla
	$("#contenido_tabla").append("<tr> <td>"+(i+1)+"</td> <td>"+(x+xi)+"</td> <td>"+(y+yi)+"</td> </tr>");
	$("#contenido_tabla").append("<tr> <td>"+(i+2)+"</td> <td>"+(xneg+xi)+"</td> <td>"+(yneg+yi)+"</td> </tr>");
	$("#contenido_tabla").append("<tr> <td>"+(i+3)+"</td> <td>"+(x+xi)+"</td> <td>"+(yneg+yi)+"</td> </tr>");
	$("#contenido_tabla").append("<tr> <td>"+(i+4)+"</td> <td>"+(xneg+xi)+"</td> <td>"+(y+yi)+"</td> </tr>");
	// Se traza los puntos luego de cada verificación
	$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((y+yi)-1)))+'px; left:'+(400 + (16*((x+xi)-1)))+'px;" title="('+(x+xi)+','+(y+yi)+')"></div>');
	$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((yneg+yi)-1)))+'px; left:'+(400 + (16*((xneg+xi)-1)))+'px;" title="('+(xneg+xi)+','+(yneg+yi)+')"></div>');
	$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((yneg+yi)-1)))+'px; left:'+(400 + (16*((x+xi)-1)))+'px;" title="('+(x+xi)+','+(yneg+yi)+')"></div>');
	$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((y+yi)-1)))+'px; left:'+(400 + (16*((xneg+xi)-1)))+'px;" title="('+(xneg+xi)+','+(y+yi)+')"></div>');
	i = i + 4; // Incremento en el contador de iteraciones
	}
	
	/* Región 2 */
	p = (ry2)*Math.pow((x+0.5),2)+(rx2)*Math.pow((y-1),2)-(rx2*ry2); // Parámetro de control
	// Ciclo de ejecución
	while (y > 0){
	y = y - 1;
	if (p > 0){
	 p = p-(2*rx2*y) +rx2;;
	}else{
	 x = x + 1;
	 p = p + (2*ry2*x)-(2*rx2*y)+rx2;
	}
	// Se declara X y Y negativos con sus nuevos valores
	xneg=x*-1;
	yneg=y*-1;
	
	// Se agrega los resultados a la tabla
	$("#contenido_tabla").append("<tr> <td>"+(i+1)+"</td> <td>"+(x+xi)+"</td> <td>"+(y+yi)+"</td> </tr>");
	$("#contenido_tabla").append("<tr> <td>"+(i+2)+"</td> <td>"+(xneg+xi)+"</td> <td>"+(yneg+yi)+"</td> </tr>");
	$("#contenido_tabla").append("<tr> <td>"+(i+3)+"</td> <td>"+(x+xi)+"</td> <td>"+(yneg+yi)+"</td> </tr>");
	$("#contenido_tabla").append("<tr> <td>"+(i+4)+"</td> <td>"+(xneg+xi)+"</td> <td>"+(y+yi)+"</td> </tr>");
	// Se traza los puntos de la región 2, luego de cada verificación
	$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((y+yi)-1)))+'px; left:'+(400 + (16*((x+xi)-1)))+'px;" title="('+(x+xi)+','+(y+yi)+')"></div>');
	$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((yneg+yi)-1)))+'px; left:'+(400 + (16*((xneg+xi)-1)))+'px;" title="('+(xneg+xi)+','+(yneg+yi)+')"></div>');
	$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((yneg+yi)-1)))+'px; left:'+(400 + (16*((x+xi)-1)))+'px;" title="('+(x+xi)+','+(yneg+yi)+')"></div>');
	$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((y+yi)-1)))+'px; left:'+(400 + (16*((xneg+xi)-1)))+'px;" title="('+(xneg+xi)+','+(y+yi)+')"></div>');
	i = i + 4;
	}
	
	// Animación para mostrar los puntos
	$(".punto").each(function(i) {
		$(this).delay(200 * i).fadeIn(200);
	});
	$('html,body').animate({ scrollTop: $("#grafica").offset().top}, 'slow');
}