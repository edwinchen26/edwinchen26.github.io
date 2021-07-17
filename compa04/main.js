const displayInstructions = () => {
  $(".overlay").fadeIn(400, function () {
    $(".overlay>.close").click(function () {
      $(".overlay").fadeOut(400);
    });
  });
};

const goHome = () => window.location = "main_room.html";

const setRoomTimeout = (settings) => {
  const rooms = JSON.parse(sessionStorage.getItem("completed_rooms"));
  const selected_room = rooms.findIndex(x => x.game == settings.game);

  if (!settings.clear) {
    rooms[selected_room].timeout = new Date(new Date().getTime() + settings.timeout);

    if (document.querySelectorAll(".invalid").length > 0)
      $(".questionnaire").scrollTop($(document.querySelectorAll(".invalid")[0]).offset().top);

    alert("ERROR 👎");
  }

  sessionStorage.setItem("completed_rooms", JSON.stringify(rooms));
};

const verifyTimeout = (game, refresh = false) => {
  const selected_room = JSON.parse(sessionStorage.getItem("completed_rooms")).filter(x => x.game == game)[0];
  const time_left = new Date(selected_room.timeout) - new Date();

  if (time_left >= 0) {
    $(".verify").addClass("blocked");
    let counter = Math.floor(time_left / 1000);

    const countdown = setInterval(() => {
      counter = counter - 1;
      $(".verify").text(`Quedan ${counter}s`);

      if (counter <= 0) {
        $(".verify").removeClass("blocked").text("Verificar respuestas");
        clearInterval(countdown);
        setRoomTimeout({
          game: game,
          clear: true
        });

        refresh ? window.location.reload() : null;
      }
    }, 1000);
  }
};

const markRoomAsCompleted = (game) => {
  const rooms = JSON.parse(sessionStorage.getItem("completed_rooms"));
  const selected_room = rooms.findIndex(x => x.game == game);

  alert(`Room ${rooms[selected_room].id} completado`);
  rooms[selected_room].isCompleted = true;
  rooms[selected_room].timeout = null;
  sessionStorage.setItem("completed_rooms", JSON.stringify(rooms));

  goHome();
}

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}