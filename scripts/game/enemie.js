class Enemie extends Animation {
  constructor(
    image,
    frameQuantityX,
    frameQuantityY,
    frameQuantityTotal,
    characterWidth,
    characterHeight,
    positionX,
    yVariation,
    spriteWidth,
    spriteHeight
  ) {
    super(
      image,
      frameQuantityX,
      frameQuantityY,
      frameQuantityTotal,
      characterWidth,
      characterHeight,
      positionX,
      yVariation,
      spriteWidth,
      spriteHeight
    );

    this.speed = 10;
  }

  move() {
    this.positionX -= this.speed;

    if (this.positionX < (- this.characterWidth)) {
      this.positionX = width;
    }
  }
}