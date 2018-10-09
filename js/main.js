var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

function drawCircle(x,y,radius){
  context.beginPath()
  context.fillStyle = 'black'
  context.arc(x,y,radius,0,Math.PI*2)
  context.fill()
}

function drawLine(x1,y1,x2,y2,width){
  context.beginPath()
  context.lineWidth = width
  context.strokeStyle = 'black'
  context.moveTo(x1,y1)
  context.lineTo(x2,y2)
  context.stroke()
  context.closePath()
}


var painting =false
var lastPoint = {x:undefined, y:undefined}
canvas.onmousedown = function(aaa){
  painting = true
  var x = aaa.clientX
  var y = aaa.clientY
  lastPoint= {"x": x,"y":y}
  drawCircle(x,y,1)
}

canvas.onmousemove = function(aaa){
  if(painting){
    var x = aaa.clientX
    var y = aaa.clientY
    var newPoint={"x":x,"y":y}
    drawCircle(x,y,1)
    drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y,5)
    lastPoint = newPoint
  }
}

canvas.onmouseup = function(aaa){
  painting = false
}

