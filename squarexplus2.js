var canvas, box, controller, loop, boxx;
var width, height;

canvas = document.querySelector("canvas").getContext("2d");

width = innerWidth - 20;
height = innerHeight - 20;

canvas.canvas.width = width;
canvas.canvas.height = height;

box = {
  x:width/2,
  y:height/2,
  width:27,
  height:27
};

boxx = {
  x:width/2,
  y:height,
  width:27,
  height:27
};
  
  
controller = {
  up:false,
  down:false,
  left:false,
  right:false,
  upx:false,
  downx:false,
  leftx:false,
  rightx:false,
  keyFunction:function(event) {
    var keyState = event.type == "keydown";
    switch(event.keyCode) {
      case 38:
        controller.up = keyState;
        break;
      case 40:
        controller.down = keyState;
        break;
      case 37:
        controller.left = keyState;
        break;
      case 39:
        controller.right = keyState;
        break;
      case 87:
        controller.upx = keyState;
        break;
      case 83:
        controller.downx = keyState;
        break;
      case 65:
        controller.leftx = keyState;
        break;
      case 68:
        controller.rightx = keyState;
        break;
    }
  }
};

loop = function() {

  if(controller.up) {
    box.y -= 10;
  }
  if(controller.down) {
    box.y += 10;
  }
  if(controller.left) {
    box.x -= 10;
  }
  if(controller.right) {
    box.x += 10;
  }
   if(controller.upx) {
    boxx.y -= 10;
  }
  if(controller.downx) {
    boxx.y += 10;
  }
  if(controller.leftx) {
    boxx.x -= 10;
  }
  if(controller.rightx) {
    boxx.x += 10;
    
  }
  if(box.y < 0) {
    box.y = 0;
  }
  if(box.y > height - 27) {
    box.y = height - 27;
  }
  if(box.x < -27) {
    box.x = width;
  }
  if(box.x > width) {
    box.x = -27;
  }
  if(boxx.y < 0) {
    boxx.y = 0;
  }
  if(boxx.y > height - 27) {
    boxx.y = height - 27;
  }
  if(boxx.x < -27) {
    boxx.x = width;
  }
  if(boxx.x > width) {
    boxx.x = -27;
  }
  if(box.x, box.y, box.x + 27, box.y + 27 === boxx.x, boxx.y, boxx.x + 27, boxx.y + 27) {
    canvas.fillStyle = "#8b0000";
    canvas.fillRect(0, 0, width, height);
  } else {
  canvas.fillStyle = "#293133";
  canvas.fillRect(0, 0, width, height);
  };
  
  canvas.fillStyle = "#000080";
  canvas.fillRect(box.x, box.y, box.width, box.height);
  canvas.fillStyle = "#ffffff";
  canvas.fillRect(boxx.x, boxx.y, boxx.width, boxx.height);
  
  window.requestAnimationFrame(loop);
};

window.addEventListener("keydown",controller.keyFunction);
window.addEventListener("keyup",controller.keyFunction);
window.requestAnimationFrame(loop);
