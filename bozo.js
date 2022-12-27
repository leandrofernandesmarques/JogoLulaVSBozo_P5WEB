let yBozo = 366;
let xBozo = 100;

let colisao = false;
let pontosBozo = 0;

function mostrarBozo() {
  image(imagemBozo,xBozo,yBozo,35,35)
}
function moverBozo(){
  if(keyIsDown (87)){//w
    if (yBozo < 400){
      yBozo -= 3;
    }
     
    
  } 
  if(keyIsDown (83)){
    if (bozoDentroDoLimiteInferiorDaTela()){//s
      yBozo += 3;
    }
    
  }
  if(keyIsDown (68)){//d
    if (xBozo < 570){
      xBozo +=3;
    }
    
  }
  if(keyIsDown (65)){//a
    if (xBozo > 0){
      xBozo -= 3;
    }
    
  }
}

function voltaBozoParaPosicaoInicial(){
  
  
  if (yBozo < 15){
    yBozo = 366
    xBozo = 100
  }
}


function verificaColisaoBozo(){
  for (let i = 0; i < imagemCarros.length; i++){    
    colisaoBozo = collideRectRect(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xBozo, yBozo,35,35);
    if (colisaoBozo){           
      bozoColidiu();  
      somColisaoBozo.play();
      if (pontosBozo > 0){
        pontosBozo --;
      }
      
    }
  }
  
}
function bozoMarcaPonto(){
  if (yBozo < 20){
    pontosBozo ++
    somPontoBozo.play();
    yBozo = 366
    xBozo = 100
  }
}

function bozoColidiu(){
  yBozo = 366
  xBozo = 100
}

function mostrarPlacarBozo(){
  fill(235,220,10)
  text(pontosBozo,150,27)
  textSize(26)
  
}
function bozoDentroDoLimiteInferiorDaTela(){
  return yBozo < 366;
}