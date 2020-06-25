class Enemie extends Animation {
  constructor(
    image,
    frameQuantityX,
    frameQuantitY,
    characterWidth,
    characterHeight,
    positionX,
    spriteWidth,
    spriteHeight
  ) {
    super(
      image,
      frameQuantityX,
      frameQuantitY,
      characterWidth,
      characterHeight,
      positionX,
      spriteWidth,
      spriteHeight
    );

    this.speed = 10;
  }

  move() {
    this.positionX -= this.speed;

    if (this.positionX < -this.characterWidth) {
      this.positionX = width;
    }
  }
}