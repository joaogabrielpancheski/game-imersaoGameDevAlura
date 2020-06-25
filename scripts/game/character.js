class Character extends Animation {
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

    this.initialYPosition = height - this.characterHeight;
    this.positionY = this.initialYPosition;
    this.jumpVelocity = 0;
    this.gravity = 3;
  }

  jump() {
    this.jumpVelocity = -30;
  }

  applyGravity() {
    this.positionY += this.jumpVelocity;
    this.jumpVelocity += this.gravity;

    if (this.positionY > this.initialYPosition) {
      this.positionY = this.initialYPosition;
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
