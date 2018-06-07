function Game(canvasElement) {
    this.ctx = canvasElement.getContext("2d");

    this.bg = new Background(this.ctx);
    
    this.player = new Player(this.ctx);

    this.enemiesCollection = new EnemiesCollection(this.ctx);

    this.setKeyboardListeners();

  };
  
  Game.prototype.start = function() {
    this.intervalId = setInterval(function() {
      this.clear();

      this.drawAll();
      this.moveAll();

      this.checkCollitions();

      this.checkWin();

      this.checkGameOver();

      this.checkGameOver2();

    }.bind(this), 16);
  };
  
  Game.prototype.drawAll = function() {
    this.bg.draw();
    this.player.draw();
    this.enemiesCollection.draw();
  };
  

  Game.prototype.moveAll = function() {
    this.player.move();
    this.enemiesCollection.move();
      for (i = 0; i < this.enemiesCollection.invaders.length; i++) {
      this.enemiesCollection.invaders[i].move();
    }
  
  };

  Game.prototype.checkCollitions = function() {
    this.enemiesCollection.invaders.forEach(function(enemy, i) {
      this.player.bullets.forEach(function(bullet) {
        if (enemy.collide(bullet)) {
          this.enemiesCollection.invaders.splice(i, 1);
        }
      }.bind(this));
    }.bind(this));
  }

  Game.prototype.checkEnd = function() {
    return this.enemiesCollection.invaders.some(function(enemy, index, array) {
      return enemy.y >= this.player.y - this.player.h;
    }.bind(this));
}

  Game.prototype.checkGameOver = function() {
    this.enemiesCollection.invaders.forEach(function(e) {
      e.bullets.forEach(function(bullet) {
        if (this.player.collide(bullet)) {
          this.gameOver();
        }
      }.bind(this));
    }.bind(this));
  }

  Game.prototype.checkGameOver2 = function() {
    if(this.checkEnd()) {
      this.gameOver();
    }
  }

  Game.prototype.checkWin = function() {
    if(this.enemiesCollection.invaders.length === 0){
      this.win();
    }
   };

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
    clearInterval(this.intervalId);

    if (confirm("CONGRATULATION! You win")) {
      location.reload();
    }
  
    this.score.score = 0;
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
      if(bullet.y > this.ctx.canvas.height){
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
