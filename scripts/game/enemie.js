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
    spriteHeight,
    velocity,
    delay
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

    this.velocity = velocity;
    this.delay = delay;
    this.positionX = width + this.delay;
  }

  move() {
    this.positionX -= this.velocity;

    if (this.positionX < (- this.characterWidth - this.delay)) {
      this.positionX = width;
    }
  }
}