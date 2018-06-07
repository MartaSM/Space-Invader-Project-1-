function EnemiesCollection(ctx) {
    this.ctx = ctx;
    this.x0 = (this.ctx.canvas.width / 25) * 2;
    this.x = this.x0;
    this.y = this.ctx.canvas.height * 0.3;

    this.w = (this.ctx.canvas.width / 25) * 8;
    this.h = this.w / 8;

    this.vx = 0.5;
    this.vy = 10;
    this.invaders = [];
    this.distX = 0;

    this.dx = this.ctx.canvas.width / 5;
    this.dy = this.ctx.canvas.height / 1;

    this.drawCount = 0;

    this.generateInvaders();
    
};

EnemiesCollection.prototype.draw = function() {
    this.drawCount++;
    
    this.invaders.forEach(function(i) {
        i.draw();
    })
};

EnemiesCollection.prototype.move = function() {
    // for(i = 0; i < this.invaders.length; i++){
    //     this.invaders[i].x += this.vx;
    // }
    if(this.drawCount % 20 === 0){
        for(i = 0; i < this.invaders.length; i++){
            this.invaders[i].y += this.vy;
        }
        this.drawCount === 0;
    }
   

    // this.invaders.forEach(function(i) {
    //     i.x += this.vx;
    // })
            //   if (this.invaders[7].x + this.invaders[7].w > (this.ctx.canvas.width) ||
    //         this.invaders[0].x < this.x0) {
    //          this.invaders[i].y += this.dy;
            // this.vx *= -1;
    // }
}


EnemiesCollection.prototype.generateInvaders = function() {
    for (i = 0; i < 8; i++) {
        this.invaders.push(new Enemy(this.ctx, this.x + this.distX, this.y));
        this.distX += 150;
    }
};


