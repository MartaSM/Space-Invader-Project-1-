function Game(canvasElement) {
    this.ctx = canvasElement.getContext("2d");

    this.bg = new Background(this.ctx);
    
    this.player = new Player(this.ctx);

    this.enemiesCollection = new EnemiesCollection(this.ctx);

    this.score = new Score(this.ctx);

    this.elementPause = new Pause(this.ctx);
  
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

      console.log(this.player.shootControl)


    }.bind(this), 16);
  };
  
  Game.prototype.drawAll = function() {
    this.bg.draw();
    this.player.draw();
    this.enemiesCollection.draw();
    this.score.draw();
    this.player.playerLivesDraw();

  };
  

  Game.prototype.moveAll = function() {
    this.player.move();
    this.enemiesCollection.move();
    this.enemiesCollection.invaders.forEach(function(row) {
      row.forEach(function(enemy) {
        enemy.move();
      })
    })
  };

  Game.prototype.pause = function() {
    if(this.elementPause.inPause) {
      this.start();
      this.elementPause.inPause = false;
    } else {
      clearInterval(this.intervalId);
      this.elementPause.draw();
      this.elementPause.inPause = true;
    }
  }


  Game.prototype.checkCollitions = function() {
    this.enemiesCollection.invaders.forEach(function(row) {
      row.forEach(function(enemy, i) {
        this.player.bullets.forEach(function(bullet) {
          if (enemy.collide(bullet)) {
            row.splice(i, 1);
            this.score.increaseScore();
          }
        }.bind(this));
      }.bind(this));
      }.bind(this));
  }

  Game.prototype.checkEnd = function() {
    var check = false;
    this.enemiesCollection.invaders.forEach(function(row) {
      check = row.some(function(enemy, index, array) {
        return enemy.y >= (this.player.y - 110);
      }.bind(this));
    }.bind(this));
    return check;
}


  Game.prototype.checkGameOver = function() {
    this.enemiesCollection.invaders.forEach(function(row) {
      row.forEach(function(enemy) {
        enemy.bullets.forEach(function(bullet, i) {
          if (this.player.collide(bullet)) {
            enemy.bullets.splice(i, 1);
            this.player.audioDead.play();
            if(this.player.lives.length === 1) {
              this.gameOver();
            } else {
              this.player.lifeCounter -= 1;
              this.loseLife();
            }
          }
        }.bind(this));
      }.bind(this));
    }.bind(this));
  }


  Game.prototype.checkGameOver2 = function() {
    if(this.checkEnd()) {
      this.gameOver();
    }
  }

  Game.prototype.checkWin = function() {
    this.enemiesCollection.invaders.forEach(function(row, i) {
        if(row.length === 0) {
          this.enemiesCollection.invaders.splice(i, 1);
        }
        if (this.enemiesCollection.invaders.length === 0) {
          this.win();
        }
    }.bind(this));
   };


  Game.prototype.win = function() {
    clearInterval(this.intervalId);

    if (confirm("CONGRATULATION! You win")) {
      location.reload();
    }
  
    this.score.score = 0;
  };

  Game.prototype.loseLife = function() {
    this.player.lives.splice(0,1);
    clearInterval(this.intervalId);
    this.player.vx = 0;
    alert("You lose one life. Lifes: " + this.player.lifeCounter);
    
    this.start();
  };

  Game.prototype.gameOver = function() {
    clearInterval(this.intervalId);

  if (confirm("GAME OVER! Your score is: " + this.score.score + "\nPlay again?")) {
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

  Game.prototype.PAUSE = 27;

  Game.prototype.onKeyDown = function(code) {
    switch(code) {
      case this.PAUSE:
        this.pause();
        break;
    }
  };

  Game.prototype.setKeyboardListeners = function() {
    document.onkeydown = function(event) {
      this.player.onKeyDown(event.keyCode);
      this.onKeyDown(event.keyCode);
    }.bind(this);
  
    document.onkeyup = function(event) {
      this.player.onKeyUp(event.keyCode);
      // this.onKeyUp(event.keyCode);
    }.bind(this);
  };
