function Enemies(ctx, x, y ) {
  // function Enemies(ctx) {
    this.ctx = ctx;
  
    this.w = this.ctx.canvas.width / 25;
    this.h = this.w;

    this.x = x;
    this.y = y;
  
    // this.x0 = x;
    // this.x = this.x0;
    // this.y = y;

    // this.x0 = this.w * 2;
    // this.x = this.x0;
    // this.y = this.ctx.canvas.height * 0.50 - this.h;
  
    this.dx = this.ctx.canvas.width / 5;
    this.dy = this.ctx.canvas.height / 15;


    // this.vx = 0.5;
    // this.vy = 1;
 
    
    this.img = new Image();
    this.img.src = "img/invaders.png";
    this.img.frames = 2;
    this.img.frameIndex = 0;
    this.img.animateEvery = 20;
   
    this.drawCount = 2;
   
    this.bullets = [];

  }
  
  Enemies.prototype.draw = function() {
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * this.img.width / this.img.frames,
      0,
      this.img.width / this.img.frames,
      this.img.height / 3,
      this.x,
      this.y,
      this.w,
      this.h
    );

    this.drawCount++;
};



// Enemies.prototype.deleteInvader = function() {
// if (isBulletCollision()){

// }
//   this.img = null;
// };

// Enemies.prototype.deleteInvader = function(invaderToDelete) {
//   this.invaders = this.obstacles.filter(function(o) {
//     return o !== obstacleToDelete; 
//   });
// }


Enemies.prototype.move = function() {
//   this.x += this.vx;
  // if (this.x + this.w/2 > this.dx ||
  //     this.x < this.x0) {
  //   this.y += this.dy;
  //   this.vx *= -1;
  // }
  

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

// Enemies.prototype.drawBullets = function() {
//   this.drawCount++;

//   this.generateBullets();

//   this.bullets.forEach(function(b) {
//     b.draw();
//   });

//   this.cleanBullets();
// };

// Enemies.prototype.generateBullets = function() {
// var max = 100,
//     min = 50;

// var random = Math.floor(Math.random() * (max - min + 1) + min);

// if (this.drawCount % random === 0) {
// this.drawCount = 0;

// this.bullets.push(
// new Bullet(this.ctx, this.x + this.w / 2, this.y - 20)
// );
// this.bullets.vx *= (-1);
// }
// };

// Enemies.prototype.cleanBullets = function() {
// this.bullets.forEach((b ,i) => {
//   if(b.y < 0){
//     this.bullets.splice(i,1);
//   }
// })
// };

Enemies.prototype.isBulletCollision = function(bullet) {
  return this.invader.find(function() {
    return this.invader.y > this.bullet.y + this.invader.h;
  })
};


