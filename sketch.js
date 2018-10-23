var myImage;
var mySong1;

function preload() {
  myImage = loadImage('./assets/sfondo.jpg');
  mySong1 = loadSound('./assets/Declan_DP-Sandcastle.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong1);

}

function draw() {

  //immagine sfondo

  imageMode(CENTER);
  image(myImage, width / 2, height / 2, myImage.width, myImage.height);

  var testo1 = width / 15;
  var testo2 = width / 60;

  //equalizzatore

  var volume = analyzer.getLevel();
  console.log(volume);
  volume = map(volume, 0, 1, 50, width / 2);

  var w40 = width / 40;
  var w43 = width / 43;
  var h3 = height / 3;

  push();
  if (mouseIsPressed == false) {
    fill(255, 187, 160, 150);
  } else {
    fill(150, 150, 150, 150);
  }
  for (var x = 0; x < width - (w40 / 2); x += w40) {
    rectMode(CENTER);
    rect(x + (w40 / 2), height / 2, w43, volume);
  }

  pop();

  //titolo canzone

  push()
  fill(35, 35, 35)
  textAlign(CENTER);
  textFont('Ultra');
  textStyle();
  textSize(testo1);
  text('Sandcastle - Declan DP', width / 2, height / 5);
  pop()

  //diritti

  push();
  fill(100, 100, 100);
  textFont('Zilla Slab');
  textAlign(CENTER);
  textSize(testo2);
  text('Sandcastle by Declan DP https://soundcloud.com/declandp', width / 2, height / 5 + testo2 * 2);
  text('Attribution 3.0 Unported https://creativecommons.org/licenses/by/3.0/', width / 2, height / 5 + testo2 * 3.5)
  pop();

  //tasto pausa

  noStroke();
  rectMode(CENTER);
  push();
  fill(163, 44, 29);
  ellipse(width / 2, height / 2, 150);
  pop();
  rect(width / 2 - 20, height / 2, 30, 70);
  rect(width / 2 + 20, height / 2, 30, 70);

  if (mouseIsPressed == true) {
    fill(200);
    mySong1.pause();
  } else {
    if (mySong1.isPlaying() == false) {
      mySong1.play()
      fill(255, 187, 160);
    }

    //tasto play

    ellipse(width / 2, height / 2, 150);
    push();
    fill(70);
    polygon(width / 2, height / 2, 50, 3);
    pop();
  }

}

//poligono regolare

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
