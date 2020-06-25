class Scenery {
  constructor(image, velocity) {
    this.image = image;
    this.velocity = velocity;
    this.firstImagePosition = 0;
    this.secondImagePosition = width;
  }
  
  show() {
    image(this.image, this.firstImagePosition, 0, width, height);
    image(this.image, this.secondImagePosition, 0, width, height);
  }
  
  move() {
    this.firstImagePosition -= this.velocity;
    this.secondImagePosition -= this.velocity;
    
    if (this.firstImagePosition < (- width)) {
      this.firstImagePosition = width;
    }
    
    if (this.secondImagePosition < (- width)) {
      this.secondImagePosition = width;
    }
  }
}