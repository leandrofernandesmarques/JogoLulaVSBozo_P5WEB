let yLula = 366;
let xLula = 420;

let colisaoLula = false;
let pontosLula = 0;

function mostrarLula() {
  image(imagemLula,xLula,yLula,35,35)
}
function moverLula(){
  if(keyIsDown (UP_ARROW)){//w
    if (yLula < 400){
      yLula -= 3;
    }
     
    
  } 
  if(keyIsDown (DOWN_ARROW)){
    if (lulaDentroDoLimiteInferiorDaTela()){//s
      yLula += 3;
    }
    
  }
  if(keyIsDown (RIGHT_ARROW)){//d
    if (xLula < 570){
      xLula +=3;
    }
    
  }
  if(keyIsDown (LEFT_ARROW)){//a
    if (xLula > 0){
      xLula -= 3;
    }
    
  }
}

function voltaLulaParaPosicaoInicial(){
  
  
  if (yLula < 15){
    yLula = 366
    xLula = 420
  }
}


function verificaColisaoLula(){
  for (let i = 0; i < imagemCarros.length; i++){    
    colisaoLula = collideRectRect(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xLula, yLula,35,35);
    if (colisaoLula){
      lulaColidiu();
      somColisaoLula.play();
      if (pontosLula > 0){
        pontosLula --;
      }
      
    }
  }
  
}
function lulaMarcaPonto(){
  if (yLula < 20){
    pontosLula ++
    somPontoLula.play();
    yLula = 366
    xLula = 420
  }
}

function lulaColidiu(){
  yLula = 366
  xLula = 420
}

function mostrarPlacarLula(){
  fill(235,220,10)
  text(pontosLula,400,27)
  textSize(26)
  
}
function lulaDentroDoLimiteInferiorDaTela(){
  return yLula < 366;
}