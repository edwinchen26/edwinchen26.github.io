function bresenham(){
	// Limpia los valores anteriores de la tabla y de la grafica
	$("#contenido_tabla").html("");
	$(".grafica").html("");
	
	// Se almacena los valores de los puntos iniciales y finales
	var xi = document.getElementById('x_inicial').value;
	var xf = document.getElementById('x_final').value;
	var yi = document.getElementById('y_inicial').value;
	var yf = document.getElementById('y_final').value;
	
	// Se almacena el valor de la diferencia de X y Y en las variables respectivas. Se saca el valor absolute del mismo.
	var dx = Math.abs(xf - xi);
	var dy = Math.abs(yf - yi);
	
	// Variable que almacena la pendiente.
	var pendiente = dy/dx;

	// Inciar los valores
	var x = parseInt(document.getElementById('x_inicial').value);
	var y = parseInt(document.getElementById('y_inicial').value);
	// Agrega la primera fila
	$("#contenido_tabla").append("<tr> <td>0</td> <td>"+x+"</td> <td>"+y+"</td> </tr>");
	$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*(y-1)))+'px; left:'+(400 + (16*(x-1)))+'px;" title="('+x+','+y+')"></div>');
	
	// Ejecución si la pendiente está entre 0 y 1.
	if(pendiente <= 1){
	var p = Math.abs((2*dy)-dx); // Parámetro de decisión
		for(i = 0; i <= (dx-1); i++){ // Ciclo de repetición para hacer la comparación del parámetro de decisión
			if(p < 0){
				p = p + (2*dy);
				x+=1;
			}else{
				p = p + (2*dy)-(2*dx);
				x+=1;
				y+=1;
			}
		// Agrega una nueva fila a la tabla de valores
		$("#contenido_tabla").append("<tr> <td>"+(i+1)+"</td> <td>"+x+"</td> <td>"+y+"</td> </tr>");
		// Agrega un nuevo punto a la gráfica
		$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*(y-1)))+'px; left:'+(400 + (16*(x-1)))+'px;" title="('+x+','+y+')"></div>');
		}
		
	// Ejecución si la pendiente es mayor a 1
	}else if(pendiente > 1){
	var p = ((2*dx)-dy); // Parámetro de decisión
		for(i = 0; i <= (dy-1); i++){ // Ciclo de repetición para hacer la comparación del parámetro de decisión
			if(p < 0){
				p = p + (2*dx);
				if(yf < 0){
					y-=1;
				}else{
					y+=1;
				}
			}else{
				p = p + ((2*dx)-(2*dy));				
				if(yf < 0){
					y-=1;
				}else{
					y+=1;
				}
				if(xf < 0){
					x-=1;
				}else{
					x+=1;
				}
			}
		// Agrega una nueva fila a la tabla de valores
		$("#contenido_tabla").append("<tr> <td>"+(i+1)+"</td> <td>"+x+"</td> <td>"+y+"</td> </tr>");
		// Agrega un nuevo punto a la gráfica
		$(".grafica").append('<div class="punto" style="bottom: '+(416 + (16*(y-1)))+'px; left:'+(400 + (16*(x-1)))+'px;" title="('+x+','+y+')"></div>');
		}
	}
	
	// Extra: Animación para mostrar los puntos
	$(".punto").each(function(i) {
		$(this).delay(300 * i).fadeIn(600);
	});
	$('html,body').animate({ scrollTop: $("#grafica").offset().top}, 'slow');
}