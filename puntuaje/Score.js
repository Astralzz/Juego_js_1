import { ctx, MATRIZ } from "../escenas/NivelActual.js";
import { EnemigosArray } from "../enemigos/Enemigo1.js";
import { ninja1 } from "../personajes/Ninja.js";
import { Copa1 } from "../objetos/Copa.js";

//Clase
class Marcador {
  constructor(
    pX,
    pY,
    Ancho,
    Alto,
    scoreColor,
    textColor,
    Vidas,
    puntos,
    nivel
  ) {
    this.pX = pX;
    this.pY = pY;
    this.Ancho = Ancho;
    this.Alto = Alto;
    this.scoreColor = scoreColor;
    this.textColor = textColor;
    this.Vidas = Vidas;
    this.puntos = puntos;
    this.nivel = nivel;
  }

  //Dibujar cuadro
  pintarCuadro() {
    //Color
    ctx.fillStyle = this.scoreColor;
    //Dibujamos cuadrado
    ctx.fillRect(this.pX, this.pY, this.Ancho, this.Alto);
  }

  //Vidas
  DibujarVidas() {
    //Fuente (negrita, tamaño, familia)
    ctx.font = "bold 20px verdana";
    //Color
    ctx.fillStyle = "white";
    //Escribimos
    ctx.fillText(`Vidas: ${this.Vidas}`, this.pX, this.pY);
  }

  //Puntos
  dibujarPuntuaje() {
    //Fuente (negrita, tamaño, familia)
    ctx.font = "bold 20px verdana";
    //Color
    ctx.fillStyle = "white";
    //Escribimos
    ctx.fillText(`Puntos: ${this.puntos}`, this.pX, this.pY);
  }

  //Colisión con copa
  colisiónConCopa() {
    //Raíz cuadrada de la resta de las posiciones x elevado al cuadrado
    // mas la resta de las posiciones y elevado al cuadrado
    let calculo = Math.sqrt(
      Math.pow(Copa1.pX - ninja1.pX, 2) + Math.pow(Copa1.pY - ninja1.pY, 2)
    );

    //redondeamos
    let round = Math.round(calculo);

    //Comprobamos
    if (round >= 0 && round < 32) {
      Copa1.pX = noAleatorio(Copa1.Ancho, 750);
      Copa1.pY = noAleatorio(Copa1.Alto, 550);

      this.puntos++;
      aumentarVidas();
    }
  }

  //Colisión con enemigos
  colisiónConEnemigos() {
    //Recorremos
    EnemigosArray.map((enemigo) => {
      //Raíz cuadrada de la resta de las posiciones x elevado al cuadrado
      // mas la resta de las posiciones y elevado al cuadrado
      let calculo = Math.sqrt(
        Math.pow(enemigo.enm.pX - ninja1.pX, 2) +
          Math.pow(enemigo.enm.pY - ninja1.pY, 2)
      );

      //redondeamos
      let round = Math.round(calculo);

      //Comprobamos
      if (round >= 0 && round < 15) {
        enemigo.enm.pX = -999;
        this.Vidas--;

        this.DibujarVidas();
      }
    });
  }
}

//Cuadro
export let Cuadro = new Marcador(250, 0, 300, 32, "red", "black", 3);
export let Vida = new Marcador(270, 22, 100, 80, "red", "black", 3);
export let Puntos = new Marcador(
  Vida.pX + Vida.Ancho + 10,
  22,
  300,
  80,
  "red",
  "black",
  3,
  0
);

function aumentarVidas() {
  Vida.Vidas = 3;
}

//Numero aleatorio de Min a Max
function noAleatorio(min, max) {
  let posibilidades = max - min;
  let n = Math.random() * posibilidades;
  n = Math.round(n);
  return parseInt(min) + n;
}
