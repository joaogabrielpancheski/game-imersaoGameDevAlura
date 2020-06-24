let sceneryImage;
let characterImage;
let scenery;
let character;
let gameSound;

function preload() {
  sceneryImage = loadImage('images/scenery/forest.png');
  characterImage = loadImage('images/character/running.png');
  gameSound = loadSound('sounds/gameSoundtrack.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenery = new Scenery(sceneryImage, 3);
  character = new Character(characterImage, 220, 270, 16);
  frameRate(40);
  gameSound.loop();
}

function draw() {
  scenery.show();
  scenery.move();

  character.show();
}
