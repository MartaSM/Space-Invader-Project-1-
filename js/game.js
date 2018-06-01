function Game(canvasElement) {
    this.ctx = canvasElement.getContext("2d");

    this.bg = new Background(this.ctx);
    this.player = new Player(this.ctx);

    this.enemies = new EnemiesCollection(this.ctx); 

    this.setKeyboardListeners();

  };
  
  Game.prototype.start = function() {
    this.intervalId = setInterval(function() {
      this.clear();

      this.drawAll();
      this.moveAll();
  
      // this.checkGameOver();

    }.bind(this), 16);
  };
  
  Game.prototype.drawAll = function() {
    this.bg.draw();
    this.player.draw();
    this.enemies.draw();
  };
  

  Game.prototype.moveAll = function() {
    this.player.move();
    // for (i = 0; i < 8; i++) {
    //   this.invaders[i].move();
    // };
    // this.invader.move();
  };
  

  // Game.prototype.checkGameOver = function() {
  //   // if (this.invader.y === this.ctx.canvas.height ) {
  //   //   this.gameOver();
  //   // }
  // };

  // Game.prototype.checkWin = function() {
    
  // };

  // Game.prototype.checkBulletCollision = function() {
    // this.invader = this.invader.filter(function(invader, i) {
    //   var targetInvader = this.invader.isBulletCollision(bullet);

    //   if(targetInvader) {
    //     this.invader.splice(i, 1);
    //   }
    // }.bind(this));
    
  //   if(this.invader.isBulletCollision()){
  //     return this invader
  //   }
  // };
  
  Game.prototype.pause = function() {

  };

  Game.prototype.win = function() {
   
  };

  Game.prototype.gameOver = function() {
    clearInterval(this.intervalId);

  if (confirm("GAME OVER! Play again?")) {
    location.reload();
  }

  this.score.score = 0;
   
  };
  
  Game.prototype.clear = function() {
    this.ctx.clearRect(
      0, 0, this.ctx.canvas.width, this.ctx.canvas.height
    );
  
    this.player.bullets.forEach((bullet ,i) => {
      if(bullet.x > this.ctx.canvas.height){
        this.player.bullets.splice(i,1);
      }
    });
  };
  
  Game.prototype.setKeyboardListeners = function() {
    document.onkeydown = function(event) {
      this.player.onKeyDown(event.keyCode);
    }.bind(this);
  
    document.onkeyup = function(event) {
      this.player.onKeyUp(event.keyCode);
    }.bind(this);
  };
