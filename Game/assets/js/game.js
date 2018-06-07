// Variables


// Game
class Game{
  constructor(level){

    var $this = this;
    this.level = level; // current level
    $this.points = 0; // Puntaje
    $this.status = 0; // Inicializa estado en neutro ---- True (1) -> no quita puntos cuando finaliza el timer ~ False (-1) -> quita puntos cuando finaliza el timer ~ Neutro (0)

    $this.color = this.generate(); // Genera un color
    /* Detecta clic y verifica si el color es igual */
    $("[data-color]").on('click', function(){
      var color = $(this).data("color");
      if($this.color === color){
        $this.points += 1; // Suma 1 punto
        $(".game .world span#score").html("Points = " + $this.points); // Texto +1 punto
        //$this.status = 1; // Estado true
      }else{
        $this.points -= 1; // Quita 1 punto
        $(".game .world span#score").html("Points = " + $this.points); // Texto -1 punto
        //$this.status = -1; // Estado false
      }
      //$this.color = ""; // Empty current value
      $this.color = $this.generate();
      $(".game .world span#color").html("Color: " + $this.color);
    });

    // Función para iniciar a generar los colores
    var interval = Math.random() * (3000 - 2000) + 2000;
    setInterval(function(){
      interval = Math.random() * (3000 - 2000) + 2000;
      $this.color = $this.generate();

      setTimeout(function(){
        if($this.status == 0){
          $this.points -= 1;
          $(".game .world span#score").html("Points = " + $this.points);
          $(".game .world span#color").html("Color: ");
        }
      }, (interval / level));

    $this.status = 0; // Netro - para evitar quitar punto
    }, interval);
  }

  test(){
    if(this.state == "init"){
      console.log("Juego inicializado");
      //this.asdf();
    }else{
      console.log("Juego en espera");
    }
  }

  generate(){
    var colors = ['red', 'blue', 'green', 'yellow'];
    var rand = Math.floor(Math.random() * (colors.length - 1));
    $(".game .world span#color").html("Color: " + colors[rand]);
    return colors[rand];
  }

}

var game = new Game();
game.generate();
