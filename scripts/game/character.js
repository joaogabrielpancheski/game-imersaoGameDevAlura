class Character extends Animation {
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

    this.initialYPosition = height - this.characterHeight - yVariation;
    this.positionY = this.initialYPosition;
    this.jumpVelocity = 0;
    this.gravity = 6;
    this.jumpHeight = -50;
    this.jumps = 0;
  }

  jump() {
    if (this.jumps < 2) {
      this.jumpVelocity = this.jumpHeight;
      this.jumps++;
    }
  }

  applyGravity() {
    this.positionY += this.jumpVelocity;
    this.jumpVelocity += this.gravity;

    if (this.positionY > this.initialYPosition) {
      this.positionY = this.initialYPosition;
      this.jumps = 0;
    }
  }

  checkCollision(enemie) {
    const precisionX = 0.6;

    return collideRectRect(
      this.positionX,
      this.positionY,
      this.characterWidth * precisionX,
      this.characterHeight,
      enemie.positionX,
      enemie.positionY,
      enemie.characterWidth * precisionX,
      enemie.characterHeight,
    );
  }
}
