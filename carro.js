//Código dos Carros

let yCarros = [40,100,150,210,265,320];
let xCarros = [700,700,700,700,700,700];
let velocidadeCarros = [5.5,3.5,4.5,3.3,5.0,2.9];
let comprimentoCarro = 50;
let alturaCarro = 40;

 
function mostrarCarros(){
  for (i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i],xCarros[i],yCarros[i],comprimentoCarro,alturaCarro);
  }
} 
  

function moverCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];   
  }  
}

function voltarCarrosParaInicio(){
  for (i = 0;i < imagemCarros.length;i++){
    if (passouTodaATela()){
    xCarros[i] = 700;    
    }
  }  
}

function passouTodaATela(){
  return xCarros[i] < -50
}

