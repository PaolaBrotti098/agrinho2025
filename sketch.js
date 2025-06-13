
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
 let s=10; 
 for(let x=0;x<4;x++) 
 for(let y=0;y<400/s;y++)
  {fill((x+y)%2==0?0:255);
  rect(x*s+300,y*s,s,s);} 
  stroke(20,0,0); 
  strokeWeight(4);
  line(s*10+200,0,s*10+200,height);
    
      
}

}

    
