let sceneryImage;
let gameOverImage;
let characterImage;

let dropImage;
let trollImage;
let flyingDropImage;

let gameSound;
let jumpSound;
let score;

let scenery;
let character;

const enemies = [];

function preload() {
  sceneryImage = loadImage('images/scenery/forest.png');
  gameOverImage = loadImage('images/assets/gameOver.png');
  characterImage = loadImage('images/character/running.png');

  dropImage = loadImage('images/enemies/drop.png');
  flyingDropImage = loadImage('images/enemies/flyingDrop.png');
  trollImage = loadImage('images/enemies/troll.png');

  gameSound = loadSound('sounds/gameSoundtrack.mp3');
  jumpSound = loadSound('sounds/jumpingSound.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  scenery = new Scenery(sceneryImage, 3);
  character = new Character(characterImage, 4, 4, 16, 110, 135, 50, 30, 220, 270);

  const drop = new Enemie(dropImage, 4, 7, 28, 52, 52, width, 30, 104, 104, 10, 200);
  const flyingDrop = new Enemie(flyingDropImage, 3, 6, 16, 100, 75, width, 200, 200, 150, 10, 2500);
  const troll = new Enemie(trollImage, 5, 6, 28, 200, 200, width, 0, 400, 400, 10, 1500);

  enemies.push(drop);
  enemies.push(flyingDrop);
  enemies.push(troll);

  score = new Score();

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

  score.show();
  score.incrementScore();

  character.show();
  character.applyGravity();

  enemies.forEach(enemie => {
    enemie.show();
    enemie.move();

    if (character.checkCollision(enemie)) {
      // image(gameOverImage, (width / 2) - 200, height / 3);
      // noLoop();
    }
  })

}
