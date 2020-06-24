class Scenery {
  constructor(image, velocity) {
    this.image = image;
    this.velocity = velocity;
    this.image1Position = 0;
    this.image2Position = width;
  }
  
  show() {
    image(this.image, this.image1Position, 0, width, height);
    image(this.image, this.image2Position, 0, width, height);
  }
  
  move() {
    this.image1Position -= this.velocity;
    this.image2Position -= this.velocity;
    
    if (this.image1Position < -width) {
      this.image1Position = width;
    }
    
    if (this.image2Position < -width) {
      this.image2Position = width;
    }
  }
}