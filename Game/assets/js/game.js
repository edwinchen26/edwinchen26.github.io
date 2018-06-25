// Game
class Game{
  constructor(level){
    var $this = this;
    this.level = level; // current level
    $this.points = 0; // Puntaje
    $this.status = false; // Init false ---- True -> no quita puntos cuando finaliza el timer ~ False -> quita puntos cuando finaliza el timer
    $this.clickable = true; // Init true --- True-> Permite interactuar con los botones ~ False -> Bloquea interracción con los botones
    $this.timer = 0; // Timer en segundos

    $this.color = this.generate(true); // Genera un color

    /* Keypress -> click */
    $(document).on('keydown', function(e){
      switch(e.keyCode){
        case 81:
          $("[data-color=red]").click();
          break;
        case 87:
          $("[data-color=blue]").click();
          break;
        case 69:
          $("[data-color=green]").click();
          break;
        case 82:
          $("[data-color=yellow]").click();
          break;
      }
    });

    /* Detecta CLIC y verifica si el color es igual */
    $("[data-color]").on('click', function(){
      var color = $(this).data("color");
      if($this.color === color && $this.clickable === true){
        $this.points += 500;
        $this.status = true; // Estado true - evitar quitar punto por no contestar
        $this.clickable = false; // Estado false - Permite clic solo una vez
      }else if($this.color != color & $this.clickable === true){
        $this.status = true; // Estado true - evita quitar punto por no contestar
        $this.clickable = false; // Estado false - Permite clic solo una vez
        ($this.points <= 0) ? $this.points = 0 : $this.points -= 300;
      }
      //$(".game .world span#color").html("Color: "); // ---> TEST: Quita el texto del color anterior
      $("[data-color]").removeClass("active"); // Quita 'active' de los botones
      $(".game .world span#score").html($this.points); // Texto -1 punto
    });

    // Función para iniciar a generar los colores
    var interval = Math.floor((Math.random() * 500) + 1000);
    var blocks = setInterval(function(){
      interval = Math.floor((Math.random() * 500) + 1000);
      $this.color = $this.generate($this.status);
      //$(".game .world span#color").html("Color: " + $this.color);
      $("[data-color="+$this.color+"]").addClass("active"); // Agrega 'active' al color actual
    }, interval / 2);

    // Timer -> +10pts cada .1s
    var timer = setInterval(function(){
      ($this.points <= 0) ? $this.points = 0 : $this.points += 10;
      $this.timer += 100;
      if($this.timer >= 60000){
        //onsole.log("JUEGO TERMINADO");
        //console.log("Puntaje: " + $this.points);
        alert("Puntuación: " + $this.points);
        clearInterval(timer);
        clearInterval(blocks);
        $("[data-color]").removeClass("active"); // Quita 'active' de los botones
        changeScene('game', 'menu');
      }
      $(".game .world span#score").html($this.points); // Texto -1 punto
    }, 100);
  }

  // Generar los colores
  generate(status){
    var colors = ['red', 'blue', 'green', 'yellow'];
    var rand = Math.floor(Math.random() * colors.length);
    if(status === false){ // Si no se contestó - quita puntos
      (this.points <= 0) ? this.points = 0 : this.points -= 300;
      //$(".game .world span#color").html("Color: "); // ---> TEST: Quita el texto del color anterior
      $("[data-color]").removeClass("active"); // Quita 'active' de los botones
      $(".game .world span#score").html(this.points); // Texto -1 punto
    }
    this.status = false;
    this.clickable = true; // Permite interactuar con los botones nuevamente
    return colors[rand];
  }

}
