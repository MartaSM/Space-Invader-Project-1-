function Game(canvasElement) {
    this.ctx = canvasElement.getContext("2d");

    this.bg = new Background(this.ctx);
    this.player = new Player(this.ctx);
    this.setKeyboardListeners();

  };
  
  Game.prototype.start = function() {
    this.intervalId = setInterval(function() {
      this.clear();

      this.drawAll();
      this.moveAll();
  

    }.bind(this), 16);
  };
  
  
  Game.prototype.drawAll = function() {
    this.bg.draw();
    this.player.draw();
  };
  
  Game.prototype.moveAll = function() {
    this.player.move();
  };
  
  Game.prototype.checkGameOver = function() {
    
  };

  Game.prototype.checkWin = function() {
    
  };

  Game.prototype.checkBulletCollision = function() {
    
  };
  
  Game.prototype.pause = function() {

  };

  Game.prototype.win = function() {
   
  };

  Game.prototype.gameOver = function() {
   
  };
  
  Game.prototype.clear = function() {
    this.ctx.clearRect(
      0, 0, this.ctx.canvas.width, this.ctx.canvas.height
    );
  };
  
  Game.prototype.setKeyboardListeners = function() {
    document.onkeydown = function(event) {
      this.player.onKeyDown(event.keyCode);
    }.bind(this);
  
    document.onkeyup = function(event) {
      this.player.onKeyUp(event.keyCode);
    }.bind(this);
  };
