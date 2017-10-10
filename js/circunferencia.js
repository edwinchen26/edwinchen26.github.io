function circunferencia(){
	// Limpia los valores anteriores de la tabla y de la grafica
	$("#contenido_tabla").html("");
	$(".grafica").html("");

	// Se almacena los valores de los puntos iniciales y el radio
	var xi = parseInt(document.getElementById('x_inicial').value);
	var yi = parseInt(document.getElementById('y_inicial').value);
	var r = parseInt(document.getElementById('radio').value);
	
	// Variables de control para el algoritmo
	var p = 1-r;
	var x = 0;
	var y = r;
	var i = 0; // Contador de las iteraciones
	
	// Inicio del ciclo de ejecución
	do{
		var xneg = parseInt((x)*(-1)); // Valor de X negativo
		var	yneg = parseInt((y)*(-1)); // Valor de Y negativo
		
		// Para los valores X y Y
		$("#contenido_tabla").append("<tr> <td>"+i+"</td> <td>"+(x+xi)+"</td> <td>"+(y+yi)+"</td> </tr>");
		$("#contenido_tabla").append("<tr> <td>"+(i+1)+"</td> <td>"+(y+xi)+"</td> <td>"+(x+yi)+"</td> </tr>");
		$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((y+yi)-1)))+'px; left:'+(400 + (16*((x+xi)-1)))+'px;" title="('+(x+xi)+','+(y+yi)+')"></div>');
		$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((x+yi)-1)))+'px; left:'+(400 + (16*((y+xi)-1)))+'px;" title="('+(y+xi)+','+(x+yi)+')"></div>');
		
		// Para los valores X y Y (ambos negativos)
		$("#contenido_tabla").append("<tr> <td>"+(i+2)+"</td> <td>"+(xneg+xi)+"</td> <td>"+(yneg+yi)+"</td> </tr>");
		$("#contenido_tabla").append("<tr> <td>"+(i+3)+"</td> <td>"+(yneg+xi)+"</td> <td>"+(xneg+yi)+"</td> </tr>");
		$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((yneg+yi)-1)))+'px; left:'+(400 + (16*((xneg+xi)-1)))+'px;" title="('+(x+xi)+','+(y+yi)+')"></div>');
		$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((xneg+yi)-1)))+'px; left:'+(400 + (16*((yneg+xi)-1)))+'px;" title="('+(y+xi)+','+(x+yi)+')"></div>');
		
		// Para valores de X positivo y Y negativo
		$("#contenido_tabla").append("<tr> <td>"+(i+4)+"</td> <td>"+(x+xi)+"</td> <td>"+(yneg+yi)+"</td> </tr>");
		$("#contenido_tabla").append("<tr> <td>"+(i+5)+"</td> <td>"+(yneg+xi)+"</td> <td>"+(x+yi)+"</td> </tr>");
		$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((yneg+yi)-1)))+'px; left:'+(400 + (16*((x+xi)-1)))+'px;" title="('+(x+xi)+','+(y+yi)+')"></div>');
		$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((x+yi)-1)))+'px; left:'+(400 + (16*((yneg+xi)-1)))+'px;" title="('+(y+xi)+','+(x+yi)+')"></div>');
	
		// Para valores de X negativo y Y positivo
		$("#contenido_tabla").append("<tr> <td>"+(i+6)+"</td> <td>"+(xneg+xi)+"</td> <td>"+(y+yi)+"</td> </tr>");
		$("#contenido_tabla").append("<tr> <td>"+(i+7)+"</td> <td>"+(y+xi)+"</td> <td>"+(xneg+yi)+"</td> </tr>");
		$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((y+yi)-1)))+'px; left:'+(400 + (16*((xneg+xi)-1)))+'px;" title="('+(x+xi)+','+(y+yi)+')"></div>');
		$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*((xneg+yi)-1)))+'px; left:'+(400 + (16*((y+xi)-1)))+'px;" title="('+(y+xi)+','+(x+yi)+')"></div>');
		
		x++; // Incremento en X
		i = i + 8; // Incremento en el contador de iteraciones
		
		// Verificación del parámetro
		if(p<0){
			p=p+(2*x)+1;
		}else{
			y--;
			p=p+(2*(x-y)) + 1;
		}
	}while(x<=y);
	
	// Animación para mostrar los puntos
	$(".punto").each(function(i) {
		$(this).delay(200 * i).fadeIn(200);
	});
	$('html,body').animate({ scrollTop: $("#grafica").offset().top}, 'slow');
}