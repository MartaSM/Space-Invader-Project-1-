function Enemies(ctx) {
    this.ctx = ctx;
  
    this.w = this.ctx.canvas.width / 25;
    this.h = this.w;
  
    this.x0 = this.w * 2;
    this.x = this.x0;
    this.y = this.ctx.canvas.height * 0.50 - this.h;
  
    this.dx = this.ctx.canvas.width / 5;
    this.dy = this.ctx.canvas.height / 15;


    this.vx = 0.5;
    this.vy = 1;
 

    this.img = new Image();
    this.img.src = "img/invaders.png";
    this.img.frames = 2;
    this.img.frameIndex = 0;
    this.img.animateEvery = 20;

    this.drawCount = 0;
  }
  
  Enemies.prototype.draw = function() {
    
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * this.img.width / this.img.frames,
      0,
      this.img.width / this.img.frames,
      this.img.height/3,
      this.x,
      this.y,
      this.w,
      this.h
    );


    this.drawCount++;
}

// Enemies.prototype.matrix = function() {
//   for(i=0; i<5; i++) {
//     this.ctx.drawImage(
//       this.img,
//       this.img.frameIndex * this.img.width / this.img.frames,
//       0,
//       this.img.width / this.img.frames,
//       this.img.height/3,
//       this.x + this.dx,
//       this.y,
//       this.w,
//       this.h
//     );
//     this.dx += 100;
    
//   }

// }

Enemies.prototype.move = function() {
  this.x += this.vx;

  if (this.x + this.w/2 > this.dx ||
      this.x < this.x0) {
    this.y += this.dy;
    this.vx *= -1;
  }
  


if (this.drawCount % this.img.animateEvery === 0) {
  this.animate();
  this.drawCount = 0;
} 
};


Enemies.prototype.animate = function() {
  this.img.frameIndex++;
  
  if (this.img.frameIndex >= this.img.frames) {
    this.img.frameIndex = 0;
  }
};