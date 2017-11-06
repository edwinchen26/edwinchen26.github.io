/** ----------------
Preguntas del test (30)
-------------------- */
var questions = [{
    question: "Criar, cuidar y tratar animales domésticos y de campo.",
    areas: "Ciencias Naturales"
},
	{
    question: "Investigar sobre áreas verdes, medio ambiente y cambios climáticos.",
    areas: "Ciencias Naturales"
}, {
    question: "Ilustrar, dibujar y animar digitalmente.",
    areas: "Arte y Creatividad"
}, {
    question: "Seleccionar, capacitar y motivar al personal de una organización/empresa.",
    areas: "Economía"
	/*
}, {
    question: "Realizar excavaciones para descubrir restos del pasado.",
    areas: "Ciencias Sociales"
}, {
    question: "Diseñar programas de computación y explorar nuevas aplicaciones tecnológicas para uso del internet.",
    areas: "Ciencia y Tecnología"
}, {
    question: "Defender a clientes individuales o empresas en juicios de diferentes naturaleza.",
    areas: "Ciencias Sociales"
}, {
    question: "Controlar ingresos y egresos de fondos y presentar el balance final de una institución.",
    areas: "Economía"
}, {
    question: "Revisar y dar mantenimiento a artefactos eléctricos, electrónicos y computadoras.",
    areas: "Ciencia y Tecnología"
}, {
    question: "Investigar las causas y efectos de los trastornos emocionales.",
    areas: "Ciencias Sociales"
}, {
    question: "Supervisar las ventas de un centro comercial.",
    areas: "Economía"
}, {
    question: "Atender y realizar ejercicios a personas que tienen limitaciones físicas, problemas de lenguaje, etcétera.",
    areas: "Ciencias Naturales"
}, {
    question: "Prepararse para ser modelo profesional.",
    areas: "Arte y Creatividad"
}, {
    question: "Administrar y ordenar (planificar) adecuadamente la ocupación del espacio físico de ciudades, países, etc... utilizando imágenes de satélites y mapas.",
    areas: "Ciencia y Tecnología"
}, {
    question: "Tocar un instrumento y componer música.",
    areas: "Arte y Creatividad"
}, {
    question: "Organizar un plan de distribución y venta de un gran almacén.",
    areas: "Economía"
}, {
    question: "Dedicarse a fabricar productos alimenticios de consumo masivo.",
    areas: "Ciencia y Tecnología"
}, {
    question: "Aplicar métodos alternativos a la medicina tradicional para atender personas con dolencias de diversa índole.",
    areas: "Ciencias Naturales"
}, {
    question: "Manejar y/o dar mantenimiento a dispositivos/aparatos tecnológicos en aviones, barcos, radares, etcétera.",
    areas: "Ciencia y Tecnología"
}, {
    question: "Estudiar idiomas extranjeros –actuales y antiguos- para hacer traducción.",
    areas: "Ciencias Sociales"
}, {
    question: "Diseñar ropa para niños, jóvenes y adultos.",
    areas: "Arte y Creatividad"
}, {
    question: "Enseñar a niños de 0 a 5 años.",
    areas: "Ciencias Sociales"
}, {
    question: "Crear estrategias de promoción y venta de nuevos productos para el mercado internacional.",
    areas: "Economía"
}, {
    question: "Administrar una empresa (familiar, privada o pública).",
    areas: "Economía"
}, {
    question: "Explorar el espacio sideral, los planetas, características y componentes.",
    areas: "Ciencia y Tecnología"
}, {
    question: "Fotografiar hechos históricos, lugares significativos, rostros, paisajes para el área publicitaria, artística, periodística y social.",
    areas: "Arte y Creatividad"
}, {
    question: "Ser parte de un grupo de teatro.",
    areas: "Arte y Creatividad"
}, {
    question: "Estudiar la influencia entre las corrientes marinas y el clima y sus consecuencias ecológicas.",
    areas: "Ciencias Naturales"
}, {
    question: "Conocer las distintas religiones, su filosofía y transmitirlas a la comunidad en general",
    areas: "Ciencias Sociales"
}, {
    question: "Mejorar la imagen facial y corporal de las personas aplicando diferentes técnicas.",
    areas: "Ciencias Naturales"
	*/
}];

var currentQuestion = 0;
var isOver = false;
// Areas a medir
var areas = [0, 0, 0, 0, 0];

$(document).ready(function(){
	// Muestra las preguntas	
	$(this).find(".next").click(function(){
		if(!isOver){
			value = $("input[type=radio]:checked").val();
			
			if(value === undefined){
				alert("Seleccione una opción");
			}else{
				if(value == "true"){
					if(questions[currentQuestion].areas == "Arte y Creatividad"){
						areas[0]++;
					}else if(questions[currentQuestion].areas == "Ciencias Sociales"){
						areas[1]++;
					}else if(questions[currentQuestion].areas == "Economía"){
						areas[2]++;
					}else if(questions[currentQuestion].areas == "Ciencia y Tecnología"){
						areas[3]++;
					}else if(questions[currentQuestion].areas == "Ciencias Naturales"){
						areas[4]++;
					}
				}
			// Muestra la siguiente pregunta
				currentQuestion++;
				if(currentQuestion < questions.length){
					$(".container.questions").fadeOut('fast', function(){
						showQuestion();
					});
				}else{
					isOver = true;
					showResult();
				}
			}
		}else{
			isOver = false;
			alert("Vamos de nuevo!");
			resetQuiz();
			showQuestion();
		}
	});
});

function startQuiz(){
	$(".container.introduction").fadeOut(function(){
		$(".container.questions").fadeIn('slow');
	});
	showQuestion();
}

function showQuestion(){
	var question = questions[currentQuestion].question;
	$("#showQuestion").text((currentQuestion+1)+") "+question);
	$("#questionOptions").find("p").remove();
	$('<p><input type="radio" id="YesAnswer" name="question" value="true"><label for="YesAnswer">Me interesa</label></p>').appendTo("#questionOptions");
	$('<p><input type="radio" id="NoAnswer" name="question" value="false"><label for="NoAnswer">No me interesa</label></p>').appendTo("#questionOptions");
	$(".container.questions").fadeIn('slow');
}

function resetQuiz(){
	currentQuestion = 0;
}

function showResult(){
	$(".container.questions").fadeOut(function(){
		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(drawChart);
		$(".result").fadeIn(1000);
	});
	
	var totalScore = 0;
	for(var i = 0; i < areas.length; i++){
		totalScore += areas[i];
	}
	$("#tabla_datos").append('<tr><td style="text-align: left">Área 1: Arte y Creatividad</td><td>'+Math.round((areas[0]/totalScore)*100)+'%</td></tr>');
	$("#tabla_datos").append('<tr><td style="text-align: left">Área 2: Ciencias Sociales</td><td>'+Math.round((areas[1]/totalScore)*100)+'%</td></tr>');
	$("#tabla_datos").append('<tr><td style="text-align: left">Área 3: Economía, Administración y Financiero</td><td>'+Math.round((areas[2]/totalScore)*100)+'%</td></tr>');
	$("#tabla_datos").append('<tr><td style="text-align: left">Área 4: Ciencia y Tecnología</td><td>'+Math.round((areas[3]/totalScore)*100)+'%</td></tr>');
	$("#tabla_datos").append('<tr><td style="text-align: left">Área 5: Ciencias Naturales, Biología y Medio Ambiente</td><td>'+Math.round((areas[4]/totalScore)*100)+'%</td></tr>');
}

function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Area', 'Puntaje', {role: 'style'}],
  ['Área 1', areas[0], '#4b4b4b'],
  ['Área 2', areas[1], '#4b4b4b'],
  ['Área 3', areas[2], '#4b4b4b'],
  ['Área 4', areas[3], '#4b4b4b'],
  ['Área 5', areas[4], '#4b4b4b']
]);

  var options = {
  'legend': 'left',
  'title': 'Puntación obtenida en el test',
  'fontName': 'Cabin',
  'fontSize': 20,
  'backgroundColor': { fill: 'transparent' },
  // 'titleTextStyle': { color: '#ffffff' },
  // 'hAxis': { textStyle: { color: '#ffffff' }, titleTextStyle: { color: '#ffffff' } },
  // 'vAxis': { textStyle: { color: '#ffffff' }, titleTextStyle: { color: '#ffffff' } }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('scoreChart'));
  chart.draw(data, options);
}