window.onload = function() {
    var canvas = document.createElement("canvas");
  
    canvas.width = 1370;
    canvas.height = 680;
  
    document.body.prepend(canvas);
  
    new Game(canvas).start();
  };