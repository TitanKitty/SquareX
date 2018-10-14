var canvas, box, controller, loop;
var width, height;

canvas = document.querySelector("canvas").getContext("2d");

width = innerWidth - 20;
height = innerHeight - 20;

canvas.canvas.width = width;
canvas.canvas.height = height;

box = {
  x:width/2,
  y:width/2,
  width:27,
  height:27
};

controller = {
  up:false,
  down:false,
  left:false,
  right:false,
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
  
  canvas.fillStyle = "#293133";
  canvas.fillRect(0, 0, width, height);
  canvas.fillStyle = "#000080";
  canvas.fillRect(box.x, box.y, box.width, box.height);
  
  window.requestAnimationFrame(loop);
};

window.addEventListener("keydown",controller.keyFunction);
window.addEventListener("keyup",controller.keyFunction);
window.requestAnimationFrame(loop);
