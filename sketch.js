function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let Xjogador1 = 0;
let Xjogador2 = 0;
let gameOver = false;
let confetes = [];

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();

  if (!gameOver) {
    if (Xjogador1 > 350) {
      gameOver = true;
      vencedor = "Tecnologia venceu!";
      criaConfetes("#FA3461");
    } else if (Xjogador2 > 350) {
      gameOver = true;
      vencedor = "Campo venceu!";
      criaConfetes("#4B34FA");
    }
  } else {
    fill(0);
    textSize(36);
    text(vencedor, width / 2, height / 2);
    atualizaConfetes();
  }
}

function keyReleased() {
  if (!gameOver) {
    if (key === 'c') {
      Xjogador1 += random(25);
    }
    if (key === 'a') {
      Xjogador2 += random(25);
    }
  }
}

function ativaJogo() {
  background(focused ? "#34FA6A" : "#34C5FA");
}

function desenhaJogadores() {
  textSize(38);
  text("🛻", Xjogador1, 100);
  text("😺", Xjogador2, 300);
}

function desenhaLinhaDeChegada() {
  let s = 20;
  let startX = 350;
  let rows = height / s;

  let invert = frameCount % 30 < 15;

  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < rows; y++) {
      let isBlack = ((x + y) % 2 === 0);
      if (invert) isBlack = !isBlack;
      fill(isBlack ? 0 : 255);
      rect(startX + x * s, y * s, s, s);
    }
  }

  stroke(255, 0, 0);
  strokeWeight(4);
  line(startX + 4 * s, 0, startX + 4 * s, height);
}

function criaConfetes(cor) {
  for (let i = 0; i < 100; i++) {
    confetes.push({
      x: random(width),
      y: random(-height, 0),
      size: random(5, 10),
      speed: random(2, 5),
      color: cor,
      angle: random(TWO_PI),
      angularSpeed: random(-0.1, 0.1),
    });
  }
}

function atualizaConfetes() {
  noStroke();
  for (let c of confetes) {
    push();
    translate(c.x, c.y);
    rotate(c.angle);
    fill(c.color);
    rect(0, 0, c.size, c.size / 2);
    pop();

    c.y += c.speed;
    c.angle += c.angularSpeed;

    if (c.y > height) {
      c.y = random(-100, 0);
      c.x = random(width);
    }
  }
}
