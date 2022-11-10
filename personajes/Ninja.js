import { ctx, MATRIZ } from "../escenas/NivelActual.js";
// import { Howl } from "../node_modules/@types/howler/index.d.ts";

//Clase ninja
class Ninja {
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
    rutaMúsica
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
    //Ponemos música y repetimos
    // this.music = new Howl({ src: [rutaMúsica], loop: true, volume: 0.5 });
    // this.music.play();
    this.music = document.getElementById("MusicaPr");
    this.reproducirMúsica();
    this.music.loop = true;
    this.music.playbackRate = 2;
  }

  reproducirMúsica() {
    //Creamos evento
    // this.music.oncanplaythrough = (ev) => {
    //Capturamos
    var playedPromise = this.music.play();
    if (playedPromise) {
      playedPromise
        .catch((e) => {
          console.log(e);
          if (e.name === "NotAllowedError" || e.name === "NotSupportedError") {
            console.log(e.name);
          }
        })
        .then(() => {
          this.music.muted = false;
          console.log("playing sound !!!");
        });
    }
    // };
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

  //Ir a la derecha
  getRight() {
    //Comprobamos que estemos en
    // un 0 en el arreglo del nivel

    //Obtenemos cordelada x/y
    this.coorX = parseInt(this.pX / 30);
    this.coorY = parseInt(this.pY / 32);

    this.comprobarXY();

    // //Si la posición es 0
    // if (MATRIZ[this.coorY][this.coorX] === 0) {
    //   //Nos movemos
    this.pX += 3;
    // }

    //Cambiamos el sprite
    this.counterX = 3;
    //Si y es menor a 4
    if (this.counterY < 4) {
      //Recorremos
      this.counterY += 1;
    } else {
      this.counterY = 0;
    }
  }

  //Ir a la izquierda
  getLeft() {
    //Comprobamos que estemos en
    // un 0 en el arreglo del nivel

    //Obtenemos cordelada x/y
    this.coorX = parseInt(this.pX / 34);
    this.coorY = parseInt(this.pY / 32);

    this.comprobarXY();

    // //Si la posición es 0
    // if (MATRIZ[this.coorY][this.coorX] === 0) {
    //   //Nos movemos
    this.pX -= 3;
    // }

    //Cambiamos el sprite
    this.counterX = 2;
    //Si y es menor a 4
    if (this.counterY < 4) {
      //Recorremos
      this.counterY += 1;
    } else {
      this.counterY = 0;
    }
  }

  //Ir abajo
  getDown() {
    //Comprobamos que estemos en
    // un 0 en el arreglo del nivel

    //Obtenemos cordelada x/y
    this.coorX = parseInt(this.pX / 32);
    this.coorY = parseInt(this.pY / 30);

    this.comprobarXY();

    // //Si la posición es 0
    // if (MATRIZ[this.coorY][this.coorX] === 0) {
    //   //Nos movemos
    this.pY += 3;
    // }

    //Cambiamos el sprite
    this.counterX = 0;
    //Si y es menor a 4
    if (this.counterY < 4) {
      //Recorremos
      this.counterY += 1;
    } else {
      this.counterY = 0;
    }
  }

  //Ir arriba
  getUp() {
    //Comprobamos que estemos en
    // un 0 en el arreglo del nivel

    //Obtenemos cordelada x/y
    this.coorX = parseInt(this.pX / 32);
    this.coorY = parseInt(this.pY / 32);

    this.comprobarXY();

    // //Si la posición es 0
    // if (MATRIZ[this.coorY][this.coorX] === 0) {
    //   //Nos movemos
    this.pY -= 3;
    // }

    //Cambiamos el sprite
    this.counterX = 1;
    //Si y es menor a 4
    if (this.counterY < 4) {
      //Recorremos
      this.counterY += 1;
    } else {
      this.counterY = 0;
    }
  }
}

//Creamos un ninja
export const ninja1 = new Ninja(
  100, //x
  500, //y
  0, //Pos x de la img
  0, //Pos y de la img
  16, //Ancho
  16, //Alto
  19, //Ancho total
  29, //Alto total
  "../personajes/ninja.png", //Ruta de la img
  "../musica/musica.ogg" //Música
);
