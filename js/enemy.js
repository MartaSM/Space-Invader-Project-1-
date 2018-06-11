function Enemy(ctx, x, y ) {
    this.ctx = ctx;
  
    this.w = this.ctx.canvas.width / 25;
    this.h = this.w;

    this.x = x;
    this.y = y;
    
    this.img = new Image();
    this.img.src = "img/invaders.png";
    this.img.frames = 2;
    this.img.frameIndex = 0;
    this.img.animateEvery = 25;
   
    this.drawCount = 0;
   
    this.bullets = [];
  }
  
  Enemy.prototype.draw = function() {
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

    this.drawBullets();
};




Enemy.prototype.move = function() {

if (this.drawCount % this.img.animateEvery === 0) {
  this.animate();
  this.drawCount = 0;
} 
this.bullets.forEach(function(b) {
  b.move();
})

};


Enemy.prototype.animate = function() {
  this.img.frameIndex++;
  
  if (this.img.frameIndex >= this.img.frames) {
    this.img.frameIndex = 0;
  }
};

Enemy.prototype.collide = function(object) {

  if ((this.y + this.h) > object.y &&
      this.x < object.x &&
      this.x + this.w > object.x + object.w) {
    return true;
  } else {
    return false;
  }
}


Enemy.prototype.drawBullets = function() {
  
  this.drawCount++;

  this.generateBullets();
  this.bullets.forEach(function(b) {
    b.draw();
  });

  this.cleanBullets();
};

Enemy.prototype.generateBullets = function() {
var max = 80,
    min = 40;

var random = Math.floor(Math.random() * (max - min + 1) + min);

if (this.drawCount % random === 0) {
this.drawCount = 0;

this.bullets.push(
new Bullet(this.ctx, this.x + this.w / 2, this.y + this.h / 2, 5)
);
}
};


Enemy.prototype.cleanBullets = function() {
  this.bullets.forEach((b ,i) => {
    if(b.y > 650){
      this.bullets.splice(i,1);
    }
  })
};




