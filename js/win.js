function Win(ctx) {
    this.ctx = ctx;
  
    this.w = this.ctx.canvas.width;
    this.h = this.ctx.canvas.height;

    this.x = 0;
    this.y = 0;
    
    this.img = new Image();
    this.img.src = "img/win.jpg";

  }
  
  Win.prototype.draw = function() {
    this.ctx.drawImage(
        this.img,
        0,
        0,
        this.img.width,
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h
    );
};
