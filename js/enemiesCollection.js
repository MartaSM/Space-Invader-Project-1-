function EnemiesCollection(ctx) {
    this.ctx = ctx;
    this.x0 = (this.ctx.canvas.width / 25) * 2;
    this.x = this.x0;
    this.y = this.ctx.canvas.height * 0.3;

    this.w = (this.ctx.canvas.width / 25) * 8;
    this.h = this.w / 8;

    this.vx = 0.5;
    this.vy = 1;
    this.invaders = [];
    this.distX = 0;

    this.dx = this.ctx.canvas.width / 5;
    this.dy = this.ctx.canvas.height / 1;

    this.drawCount = 0;
    
};

EnemiesCollection.prototype.draw = function() {
    this.drawCount++;
    
    this.generateInvaders();

    for (i = 0; i < 8; i++) {
        this.invaders[i].draw();
    }
    this.cleanInvaders();

};

EnemiesCollection.prototype.move = function() {
    for(i = 0; i < 8; i++){
        this.invaders[i].x += this.vx;
            //   if (this.invaders[7].x + this.invaders[7].w > (this.ctx.canvas.width) ||
    //         this.invaders[0].x < this.x0) {
    //          this.invaders[i].y += this.dy;
            // this.vx *= -1;
    // }
      }
}


EnemiesCollection.prototype.generateInvaders = function() {
    for (i = 0; i < 8; i++) {
        this.invaders.push(new Enemies(this.ctx, this.x + this.distX, this.y));
        this.distX += 150;
    }
};

EnemiesCollection.prototype.cleanInvaders = function() {
        if(this.drawCount % 2 === 0){
            for (i = 0; i < 8; i++) {
          this.invaders.splice(8,8);
          this.drawCount = 0;
            }
        }
};


