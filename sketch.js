let mic;
let olho;
let boca;
let y = 0 ;

function preload(){
  olho = loadImage('olhos01.gif');
  boca = loadImage('Boca6.png');
  myFont = loadFont('AmaticSC.ttf');
}
 function setup(){
  createCanvas(300, 300);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  background(249, 205, 151);
  noStroke();
  fill(112, 149, 225);
  textFont(myFont);
  textStyle(BOLD);
  textSize(36);
  text('ligue seu mic', width/2, 60);
    micLevel = mic.getLevel();
  imageMode(CENTER);
  image(olho, width/2,height/4 * 2, 170, 50);
  image(boca, width/2, height/3 * 2, 130, y)
  if (y < 70){
    y = 600 * micLevel
  } else {
    y = 69
  }

}