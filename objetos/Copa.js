import { ctx, MATRIZ } from "../escenas/NivelActual.js";

//Copa
class Copa {
  //Constructor
  constructor(pX, pY, Ancho, Alto, ruta) {
    this.pX = pX;
    this.pY = pY;
    this.Ancho = Ancho;
    this.Alto = Alto;
    this.ruta = ruta;
    this.imgInstance = new Image(); //Imagen
    this.imgInstance.src = this.ruta;
  }
  //Dibujar
  draw() {
    //Dibujamos
    ctx.drawImage(this.imgInstance, this.pX, this.pY, this.Ancho, this.Alto);
  }
}

export const Copa1 = new Copa(590, 500, 64, 64, "../objetos/Coup.png");
