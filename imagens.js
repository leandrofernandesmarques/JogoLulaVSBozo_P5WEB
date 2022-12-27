//Imagens
let imagemDaEstrada;
let imagemLula;
let imagemBozo;
let imagemCarro0;
//Sons
let somPontoLula;
let somPontoBozo;
let somColisaoLula;
let somColisaoBozo;
let somTrilha;

function preload(){
  //Imagens
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemLula = loadImage("imagens/lula.png");
  imagemBozo = loadImage("imagens/Bozo.png");
  imagemCarro0 = loadImage("imagens/carro-0.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarros = [imagemCarro0,imagemCarro1,imagemCarro2,imagemCarro0,imagemCarro1,imagemCarro2];
  
  //Sons
  somTrilha = loadSound("sonsDoJogo/trilha.mp3");
  somColisaoBozo = loadSound("sonsDoJogo/colisaoBozo.mp3");
  somColisaoLula = loadSound("sonsDoJogo/colisaoLula.mp3");
  somPontoBozo = loadSound("sonsDoJogo/pontoBozo.mp3");
  somPontoLula = loadSound("sonsDoJogo/pontoLula.mp3");
  somColisaoLula = loadSound("sonsDoJogo/colisaoLula.mp3");
}
