function EnemiesCollection(ctx) {
    this.ctx = ctx;
    
    this.x0 = (this.ctx.canvas.width / 25) * 2;
    this.x = this.x0;
    this.y = this.ctx.canvas.height * 0.3;


    this.vx = 0.5;
    this.vy = 1;
 
    this.invaders = [];
    this.distX = 0;
    
}

EnemiesCollection.prototype.draw = function() {
    this.generateInvaders();

    this.invaders.forEach(function(i){
      i.draw();
    });
}

EnemiesCollection.prototype.generateInvaders = function() {
    for (i = 0; i < 8; i++) {
        this.invaders.push(new Enemies(this.ctx, this.x + this.distX, this.y));
        this.distX += 150;
    }
};