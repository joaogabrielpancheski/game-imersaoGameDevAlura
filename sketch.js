let sceneryImage;
let characterImage;
let enemieImage;;

let scenery;
let character;
let enemie;

let gameSound;
let jumpSound;

function preload() {
  sceneryImage = loadImage('images/scenery/forest.png');
  characterImage = loadImage('images/character/running.png');
  enemieImage = loadImage('images/enemies/drop.png');

  gameSound = loadSound('sounds/gameSoundtrack.mp3');
  jumpSound = loadSound('sounds/jumpingSound.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  scenery = new Scenery(sceneryImage, 3);
  character = new Character(characterImage, 4, 4, 16, 110, 135, 50, 30, 220, 270);
  enemie = new Enemie(enemieImage, 4, 7, 28, 52, 52, width, 30, 104, 104);

  frameRate(40);

  gameSound.loop();
}

function keyPressed() {
  if (key === 'ArrowUp') {
    character.jump();
    jumpSound.play();
  }
}

function draw() {
  scenery.show();
  scenery.move();

  character.show();
  character.applyGravity();

  enemie.show();
  enemie.move();

  if (character.checkCollision(enemie)) {
    console.log('sim')
    noLoop()
  }
}
