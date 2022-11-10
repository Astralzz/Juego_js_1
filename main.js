//variables de electron
const { app, BrowserWindow } = require("electron");

//modulo de note para gestionar las rutas
const path = require("path");

//Crear una ventana
function crearVentana() {
  //Creamos
  const win = new BrowserWindow({
    width: 800, //Ancho
    height: 600, //Alto

    //Preferencias de web
    webPreferences: {
      //Unimos preload con el main
      preload: path.join(__dirname, "preload.js"),
    },
  });

  //Cargar arch html
  win.loadFile("index.html");
}

//Cuando todo este cargado
app.whenReady().then(() => {
  //Crea la ventana
  crearVentana();

  //Para windows y linux
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

//Para mac link -> https://www.electronjs.org/es/docs/latest/tutorial/quick-start
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
