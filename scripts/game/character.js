class Character {
  constructor(image, characterWidth, characterHeight, frameQuantity) {
    this.image = image;
    this.currentFrame = 0;
    this.characterWidth = characterWidth;
    this.characterHeight = characterHeight;
    this.frameQuantity = frameQuantity;
  }

  show() {
    let marginLeft = 50;
    let marginBottom = height - (this.characterHeight / 2);
    let proportionalCharacterWidth = this.characterWidth / 2;
    let proportionalCharacterHeight = this.characterHeight / 2;
    let frameX = (this.currentFrame % 4) * this.characterWidth;
    let frameY = Math.floor(this.currentFrame / 4) * this.characterHeight;

    image(
      this.image,
      marginLeft,
      marginBottom,
      proportionalCharacterWidth,
      proportionalCharacterHeight,
      frameX,
      frameY,
      this.characterWidth,
      this.characterHeight
    );
    
    this.animate();
  }

  animate() {
    if (this.currentFrame >= this.frameQuantity - 1) {
      this.currentFrame = 0;
    } else {
      this.currentFrame++;
    }
  }
}