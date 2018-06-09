function Life(ctx, x, y) {
    this.ctx = ctx;
  
    this.w = this.ctx.canvas.width / 25;
    this.h = this.w * 1.5;
  
    this.x = this.x;
    this.y = this.y;

    this.img = new Image();
    this.img.src = "img/player.png";

  }
  
  Life.prototype.draw = function() {
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
  }