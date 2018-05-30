function Player(ctx) {
    this.ctx = ctx;
  
    this.w = this.ctx.canvas.width / 25;
    this.h = this.w * 1.5;
  
    this.x = this.w * 2;
    this.y = this.ctx.canvas.height * 0.98 - this.h;
  
    this.vx = 0;
    this.vy = 0;
    this.v = 20;
  
    this.img = new Image();
    this.img.src = "img/player.png";
  }
  
  Player.prototype.draw = function() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );
}


Player.prototype.move = function() {
this.x += this.vx;
};


Player.prototype.LEFT = 37;
Player.prototype.RIGHT = 39;
Player.prototype.SHOOT = 32;

Player.prototype.onKeyDown = function(code) {
  switch(code) {
    case this.RIGHT:
      this.vx = 10;
      break;
    case this.LEFT:
      this.vx = -10;
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