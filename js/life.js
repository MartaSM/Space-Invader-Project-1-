function Life(ctx, x) {
    this.ctx = ctx;
  
    this.w = this.ctx.canvas.width / 40;
    this.h = this.w * 1.5;
  
    this.x = x;
    this.y = this.ctx.canvas.height * 0.08;

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