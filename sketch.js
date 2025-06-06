function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function setup() {
  createCanvas(400, 400);
}
let Xjogador1 = 0;
let Xjogador2 = 0;


    function draw() {
    ativaJogo();
    desenhaJogadores();
    desenhaLinhaDeChegada();
    
               

      
   if (Xjogador1 > 350){
    fill("#FA3461");
   text("Tecnologia venceu!", 20, 200);
  noLoop();
}
    
  if (Xjogador2 > 350) {
    fill("#4B34FA");
   text("Campo venceu!", 50, 200);
  noLoop();
}
    }   
      function keyReleased() {
  if (key === 'c') {
    Xjogador1 += random (25);
  }
  if(key == 'a'){
  Xjogador2 += random (25);
    }
        
  }

function ativaJogo (){
  if (focused==true){
  background("#34FA6A");
    }
    else{
  background("#34C5FA");
    }
}
function desenhaJogadores(){
  textSize(38);
  text("🛻", Xjogador1 ,100);
  text("😺", Xjogador2 ,300);
}
function desenhaLinhaDeChegada(){
  fill("#FA0010");
  rect(350,0,10,400);
  fill("black");
  for(let yAtual=0; yAtual< 400; yAtual += 20){
    rect(350, yAtual, 10,10);
    
    
      
}

}

    
