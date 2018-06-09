function EnemiesCollection(ctx) {
    this.ctx = ctx;
    this.x0 = (this.ctx.canvas.width / 25) * 2;
    this.x = this.x0;
    // this.y = this.ctx.canvas.height * 0.3;
    this.y = this.ctx.canvas.height /2;

    this.w = (this.ctx.canvas.width / 25) * 8;
    this.h = this.w / 8;

    this.vx = 0.5;
    this.vy = 10;
    this.invaders = [];
    this.distX = 0;
    this.distY = 0;

    this.dx = this.ctx.canvas.width / 5;
    this.dy = this.ctx.canvas.height / 1;

    this.drawCount = 0;

    this.generateInvaders();    
};

EnemiesCollection.prototype.draw = function() {
    this.drawCount++;
  
    this.invaders.forEach(function(row) {
        row.forEach(function(enemy) {
            enemy.draw();
        })   
    })  
};



EnemiesCollection.prototype.move = function() {
    // for(i = 0; i < this.invaders.length; i++){
    //     this.invaders[i].x += this.vx;
    // }
    if(this.drawCount % 60 === 0){
        for(i = 0; i < this.invaders.length; i++){
            var row = this.invaders[i];
            for(j = 0; j < row.length; j++) {
                this.invaders[i][j].y += this.vy;
            }
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
    for (i = 0; i < 2; i++) {
        this.invaders[i] = [];
        if(i % 2 === 0){
            this.distX = 0;
        } else {
            this.distX = 75;
        }
            this.distY -= 60;
            
        for(j = 0; j < 8; j++) {
            this.invaders[i][j] = new Enemy(this.ctx, this.x + this.distX, this.y + this.distY);
            this.distX += 150;
        }
    }
};

