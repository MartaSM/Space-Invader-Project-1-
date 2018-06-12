function Score(ctx) {
    this.ctx = ctx;
    this.x = 40;
    this.y = 80;
  
    this.score = 0;
  }
  
  Score.prototype.draw = function() {
    this.ctx.font = "50px Verdana";
    this.ctx.fillText("Score " + Math.floor(this.score), this.x, this.y);
    this.ctx.fillStyle = "white";
  };

  Score.prototype.increaseScore = function() {
      this.score +=10;
  }