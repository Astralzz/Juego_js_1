import { ctx, MATRIZ, Velocidad } from "../escenas/NivelActual.js";

//Clase ninja
class Enemigo {
  constructor(
    pX,
    pY,
    counterX,
    counterY,
    tileWidth,
    tileHeight,
    totalWidth,
    totalHeight,
    ruta,
    imgInstance,
    music
  ) {
    this.pX = pX; //Posición x
    this.pY = pY; //Posición y
    this.counterX = counterX; //Contador x
    this.counterY = counterY; //Contador y
    this.tileWidth = tileWidth; //Ancho
    this.tileHeight = tileHeight; //Alto
    this.totalWidth = totalWidth; //Ancho total
    this.totalHeight = totalHeight; //Alto total
    this.ruta = ruta; //Ruta de imagen
    this.imgInstance = new Image(); //Imagen
    this.imgInstance.src = this.ruta;
    // this.music = m;

    //Creamos variable
    this.horizontal = true;
    this.vertical = true;
  }

  //Comprobar pos
  comprobarXY() {
    //Comprobamos y
    this.coorY = this.coorY >= MATRIZ.length ? MATRIZ.length - 1 : this.coorY;
    this.coorY = this.coorY < 0 ? 0 : this.coorY;

    //Comprobamos x
    this.coorX =
      this.coorX >= MATRIZ[this.coorY].length
        ? MATRIZ[this.coorY].length - 1
        : this.coorX;
    this.coorX = this.coorX < 0 ? 0 : this.coorX;
  }

  //Dibujar
  draw() {
    ctx.drawImage(
      this.imgInstance,
      this.counterX * this.tileWidth,
      this.counterY * this.tileHeight,
      this.tileWidth,
      this.tileHeight,
      this.pX,
      this.pY,
      this.totalWidth,
      this.totalHeight
    );
  }

  //Mover de derecha a izquierda
  moverDerechaIzquierda() {
    //Comprobamos
    if (this.horizontal) {
      //Si es menor
      if (this.pX < 800) {
        //Avanza
        this.pX += Velocidad;
      } else {
        //Cancela
        this.horizontal = false;
      }
    } else {
      if (this.pX > 200) {
        this.pX -= Velocidad;
      } else {
        this.horizontal = true;
      }
    }
  }

  //Mover de derecha a izquierda
  moverArribaAbajo() {
    //Si es menor
    if (this.pY < 610) {
      //Avanza
      this.pY += Velocidad;
    } else {
      //Cambiamos
      this.pX = noAleatorio(0, 750);
      this.pY = -50;
    }
  }
}

//Numero aleatorio de Min a Max
function noAleatorio(min, max) {
  let posibilidades = max - min;
  let n = Math.random() * posibilidades;
  n = Math.round(n);
  return parseInt(min) + n;
}

//Arreglo de enemigos
export let EnemigosArray = [];

//No de enemigos
const NoEnemigos = noAleatorio(15, 20);
//Llenamos
for (let i = 0; i < NoEnemigos; i++) {
  //Tipo
  const Tipo = noAleatorio(1, 2);

  //Posiciones
  const pX = Tipo !== 1 ? -50 : noAleatorio(0, 750);
  const pY = Tipo !== 2 ? -50 : noAleatorio(0, 750);

  //Creamos enemigo
  const enemigo = new Enemigo(
    pX, //pos X
    pY, //Pos Y
    0,
    0,
    28,
    28,
    16,
    16,
    "../enemigos/Ball.png",
    null
  );

  //Agregamos
  EnemigosArray.push({
    tipo: Tipo, //1 arriba y abajo / 2 derecha a izquierda
    enm: enemigo,
  });
}
