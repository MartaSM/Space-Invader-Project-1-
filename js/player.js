function Player(ctx) {
    this.ctx = ctx;
  
    this.w = this.ctx.canvas.width / 25;
    this.h = this.w * 1.5;
  
    this.x = this.ctx.canvas.width / 2;
    this.y = this.ctx.canvas.height * 0.98 - this.h;
  
    this.vx = 0;
    this.vy = 0;
  
    this.img = new Image();
    this.img.src = "img/player.png";

    this.bullets = [];

    this.lives = [];
    this.playerLives();

  }
  
  Player.prototype.draw = function() {
    this.ctx.drawImage(
      this.img,
      0,
      this.img.height / 2.8,
      this.img.width,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );

    this.bullets.forEach(function(b) {
      b.draw();
      b.move();
    });
}


Player.prototype.move = function() {
this.x += this.vx;

if (this.x <= 0) {
  this.x = 0;
}
if (this.x + this.w >= this.ctx.canvas.width){
  this.x = this.ctx.canvas.width - this.w;
}
};

Player.prototype.shoot = function() {
  this.bullets.push(new Bullet(this.ctx, this.x + this.w / 2 - 2, this.y - 20, -5))
};

Player.prototype.bulletsInCollision = function(invaders) {
  this.bullets.filter(function(b) {
   return (invaders.y + invaders.w > this.b.y)
  })   
};

Player.prototype.collide = function(object) {
  if (this.y <= object.y + object.h &&
      this.x <= object.x - object.w && 
      this.x + this.w >= object.x + object.w) {
    return true;
  } else {
    return false;
  }
 }

 Player.prototype.playerLives = function() {
   var distX = 0;
    for(i = 0; i < 3; i++) {
      this.lives.push(new Life(this.ctx, this.ctx.canvas.width * 0.5 + distX, this.ctx.canvas.height * 0.2));
      distX += 10;
  };
 };

 Player.prototype.playerLivesDraw = function() {

   this.lives.forEach(function(l) {
     l.draw();
   })
 }

Player.prototype.LEFT = 37;
Player.prototype.RIGHT = 39;
Player.prototype.SHOOT = 32;

Player.prototype.onKeyDown = function(code) {
  switch(code) {
    case this.RIGHT:
      this.vx = 5;
      break;
    case this.LEFT:
      this.vx = -5 ;
      break;
    case this.SHOOT:
      this.shoot();
      break;
  }
};

Player.prototype.onKeyUp = function(code) {
  switch(code) {
    case this.RIGHT:
    case this.LEFT:
      this.vx = 0;
      break;
  }
};