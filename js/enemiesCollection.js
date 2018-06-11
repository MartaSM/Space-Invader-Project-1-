function EnemiesCollection(ctx) {
    this.ctx = ctx;
    this.x0 = this.ctx.canvas.width / 4;
    this.x = this.x0;
    // this.y = this.ctx.canvas.height * 0.3;
    this.y = this.ctx.canvas.height / 5;

    this.w = (this.ctx.canvas.width / 25) * 8;
    this.h = this.w / 8;

    this.vx = 10;
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
    // if(this.drawCount % 60 === 0){
    //     this.invaders.forEach(function(row) {
    //         row.forEach(function(i) {
    //             i.x += this.vx
    //         }.bind(this));
    //     }.bind(this));
    // }
    // this.drawCount === 0;


    if(this.drawCount % 30 === 0){
        this.invaders.forEach(function(row) {
            row.forEach(function(i) {
                i.y += this.vy;
            }.bind(this));
        }.bind(this));
        this.drawCount === 0;
    }
}



EnemiesCollection.prototype.generateInvaders = function() {
    for (i = 0; i < 5; i++) {
        this.invaders[i] = [];
        if(i % 2 === 0){
            this.distX = 0;
        } else {
            this.distX = 40;
        }
            
            
        for(j = 0; j < 8; j++) {
            this.invaders[i][j] = new Enemy(this.ctx, this.x + this.distX, this.y + this.distY);
            this.distX += 80;
        }
        this.distY -= 150;
    }
};

