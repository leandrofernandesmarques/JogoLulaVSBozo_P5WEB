function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
  
}


function draw() {
  background(imagemEstrada);
  mostrarBozo();
  moverCarro();
  moverBozo();
  verificaColisaoBozo();
  mostrarCarros();
  voltarCarrosParaInicio();  
  mostrarPlacarBozo();
  bozoMarcaPonto();
  mostrarLula();
  moverLula();
  mostrarPlacarLula();
  lulaMarcaPonto();
  verificaColisaoLula();
  

}
