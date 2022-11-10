import { ninja1 } from "../personajes/Ninja.js";
import { isPause } from "../escenas/NivelActual.js";

//Eventos de teclado en toda la ventana
window.addEventListener("keydown", (ev) => {
  //derecha
  if (ev.key === "d" || ev.key === "D" || ev.key === "ArrowRight") {
    //Evento
    ninja1.getRight();
  }

  //izquierda
  if (ev.key === "a" || ev.key === "A" || ev.key === "ArrowLeft") {
    //Evento
    ninja1.getLeft();
  }

  //Abajo
  if (ev.key === "s" || ev.key === "S" || ev.key === "ArrowDown") {
    //Evento
    ninja1.getDown();
  }

  //Arriba
  if (ev.key === "w" || ev.key === "W" || ev.key === "ArrowUp") {
    //Evento
    ninja1.getUp();
  }

  //Pause
  if (ev.key === "Enter") {
    //Cambiamos
    isPause();
  }
});
