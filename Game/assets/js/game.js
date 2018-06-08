// Variables


// Game
class Game{
  constructor(level){

    var $this = this;
    this.level = level; // current level
    $this.points = 0; // Puntaje
    $this.powerUp = 0;
    $this.status = false; // Init false ---- True -> no quita puntos cuando finaliza el timer ~ False -> quita puntos cuando finaliza el timer
    $this.clickable = true; // Init true --- True-> Permite interactuar con los botones ~ False -> Bloquea interracción con los botones

    $this.color = this.generate(true); // Genera un color
    /* Detecta clic y verifica si el color es igual */
    $("[data-color]").on('click', function(){
      var color = $(this).data("color");
      if($this.color === color && $this.clickable === true){
        $this.points += 1;
        $this.status = true; // Estado true - evitar quitar punto por no contestar
        $this.clickable = false; // Estado false - Permite clic solo una vez
      }else if($this.color != color & $this.clickable === true){
        $this.status = true; // Estado true - evita quitar punto por no contestar
        $this.clickable = false; // Estado false - Permite clic solo una vez
        ($this.points <= 0) ? $this.points = 0 : $this.points -= 1;
      }
      $(".game .world span#color").html("Color: "); // ---> TEST: Quita el texto del color anterior
      $(".game .world span#score").html("Points = " + $this.points); // Texto -1 punto
    });

    // Función para iniciar a generar los colores
    var interval = Math.floor(Math.random() * (3000 - 2000) + 2000);
    setInterval(function(){
      interval = Math.floor(Math.random() * (3000 - 2000) + 2000);
      $this.color = $this.generate($this.status);
      $(".game .world span#color").html("Color: " + $this.color);
    }, interval / 2);

  }

  // PowerUp
  powerUps(currentPoints){
    if( ((currentPoints % 5) == 0) && currentPoints >  this.powerUp){
      this.powerUp = currentPoints;
      console.log("POWER UP ~ " + currentPoints);
    }
  }

  // Generar los colores
  generate(status){
    var colors = ['red', 'blue', 'green', 'yellow'];
    var rand = Math.floor(Math.random() * (colors.length - 1));
    if(status === false){ // Si no se contestó - quita puntos
      (this.points <= 0) ? this.points = 0 : this.points -= 1;
      $(".game .world span#score").html("Points = " + this.points); // Texto -1 punto
    }
    this.status = false;
    this.clickable = true; // Permite interactuar con los botones nuevamente
    this.powerUps(this.points);
    return colors[rand];
  }

}

var game = new Game();
game.generate();
