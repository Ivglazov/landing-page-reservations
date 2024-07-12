    var canvas = document.querySelector("#myCanvas");
    var context = canvas.getContext("2d");
    var mouseX = 0;
    var mouseY = 0;
    
    function update() {
        context.beginPath();
        context.arc(mouseX, mouseY, 50, 0, 2 * Math.PI, true);
        context.fillStyle = "#FF6A6A";
        context.fill();
      
        requestAnimationFrame(update);
      }
    
    update();
    
    function setMousePosition(e) {
        mouseX = e.clientX - canvasPos.x;
        mouseY = e.clientY - canvasPos.y;
    }
    
      function getPosition(el) {
        var xPosition = 0;
        var yPosition = 0;
      
        while (el) {
          xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
          yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
          el = el.offsetParent;
        }
        return {
          x: xPosition,
          y: yPosition
        };
      }
    
      context.clearRect (0, 0, canvas.width, canvas.height);
      
    
      var canvasPos = getPosition(canvas);
    print(canvasPos)
    
