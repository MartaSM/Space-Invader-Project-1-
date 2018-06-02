function Bullet(ctx, x, y) {
    this.ctx = ctx;

    this.w = 5;
    this.h = 30;
  
    this.x = x;
    this.y = y;
  
    this.img = new Image();
    this.img.src = "./img/player.png";
  
    this.vy = -5;
  }
  
  Bullet.prototype.draw = function() {
    this.ctx.drawImage(
        this.img,
      0,
      0,
      this.img.width / 3,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  };
  
  Bullet.prototype.move = function() {
    this.y += this.vy;
  };

  