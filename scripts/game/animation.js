class Animation {
  constructor(
    image,
    frameQuantityX,
    frameQuantityY,
    characterWidth,
    characterHeight,
    positionX,
    spriteWidth,
    spriteHeight
  ) {
    this.image = image;
    this.frameQuantityX = frameQuantityX;
    this.frameQuantityY = frameQuantityY;
    this.characterWidth = characterWidth;
    this.characterHeight = characterHeight;
    this.positionX = positionX;
    this.positionY = height - this.characterHeight;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.currentFrame = 0;
  }

  show() {
    const frameX = (this.currentFrame % this.frameQuantityX) * this.spriteWidth;
    const frameY = Math.floor(this.currentFrame / this.frameQuantityX) * this.spriteHeight;

    image(
      this.image,
      this.positionX,
      this.positionY,
      this.characterWidth,
      this.characterHeight,
      frameX,
      frameY,
      this.spriteWidth,
      this.spriteHeight
    );
    
    this.animate();
  }

  animate() {
    if (this.currentFrame >= (this.frameQuantityX * this.frameQuantityY) - 1) {
      this.currentFrame = 0;
    } else {
      this.currentFrame++;
    }
  }
}