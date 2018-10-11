var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

autoSetCanvasSize(canvas)
listenToUser()






var eraserEnable =false 

pen.onclick = function(){
  eraserEnable =false 
  pen.classList.add('active')
  eraser.classList.remove('active')
}

eraser.onclick = function(){
  eraserEnable =true
  eraser.classList.add('active')
  pen.classList.remove('active')
}

red.onclick = function(){
  context.fillStyle = 'red'
  context.strokeStyle = 'red'
  red.classList.add('active')
  green.classList.remove('active')
  yellow.classList.remove('active')
  blue.classList.remove('active')
  black.classList.remove('active')
}

green.onclick = function(){
  context.fillStyle = 'green'
  context.strokeStyle = 'green'
  green.classList.add('active')
  red.classList.remove('active')
  yellow.classList.remove('active')
  blue.classList.remove('active')
  black.classList.remove('active')
}

yellow.onclick = function(){
  context.fillStyle = 'yellow'
  context.strokeStyle = 'yellow'
  yellow.classList.add('active')
  red.classList.remove('active')
  green.classList.remove('active')
  blue.classList.remove('active')
  black.classList.remove('active')
}

blue.onclick = function(){
  context.fillStyle = 'blue'
  context.strokeStyle = 'blue'
  blue.classList.add('active')
  red.classList.remove('active')
  green.classList.remove('active')
  yellow.classList.remove('active')
  black.classList.remove('active')
}

black.onclick = function(){
  context.fillStyle = 'black'
  context.strokeStyle = 'black'
  yellow.classList.add('active')
  red.classList.remove('active')
  green.classList.remove('active')
  yellow.classList.remove('active')
  blue.classList.remove('active')
}

function autoSetCanvasSize(canvas){
  setCanvasSize()
  window.onresize = function(){
    setCanvasSize()
  }
}

function setCanvasSize(){
  var pageWidth = document.documentElement.clientWidth
  var pageHeight = document.documentElement.clientHeight
  canvas.width = pageWidth
  canvas.height = pageHeight
}

function drawCircle(x,y,radius){
  context.beginPath()
  context.arc(x,y,radius,0,Math.PI*2)
  context.fill()
}

function drawLine(x1,y1,x2,y2,width){
  context.beginPath()
  context.lineWidth = width
  context.moveTo(x1,y1)
  context.lineTo(x2,y2)
  context.stroke()
  context.closePath()
}

function listenToUser(){
  var using =false
  var lastPoint = {x:undefined, y:undefined}
  //特性检测
  if(document.body.ontouchstart !== undefined){
    //触屏设备
    canvas.ontouchstart = function(aaa){
      var x = aaa.touches[0].clientX
      var y = aaa.touches[0].clientY
      using = true
      if(eraserEnable){
        context.clearRect(x-5,y-5,10,10)
      }
      else{
        lastPoint= {"x": x,"y":y}
      }
    }
    canvas.ontouchmove = function(aaa){
      var x = aaa.touches[0].clientX
      var y = aaa.touches[0].clientY
      if(!using){return}
  
      if(eraserEnable){
        context.clearRect(x-5,y-5,10,10)
      }
      else{
        var newPoint={"x":x,"y":y}
        drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y,5)
        lastPoint = newPoint
      }
    }
    canvas.ontouchend = function(aaa){
      using = false
    }
  }
  else{
    //非触屏设备
    canvas.onmousedown = function(aaa){
      var x = aaa.clientX
      var y = aaa.clientY
      using = true
      if(eraserEnable){
        context.clearRect(x-5,y-5,10,10)
      }
      else{
        lastPoint= {"x": x,"y":y}
      }
    }
    canvas.onmousemove = function(aaa){
      var x = aaa.clientX
      var y = aaa.clientY
      if(!using){return}
  
      if(eraserEnable){
        context.clearRect(x-5,y-5,10,10)
      }
      else{
        var newPoint={"x":x,"y":y}
        drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y,5)
        lastPoint = newPoint
      }
    }
    
    canvas.onmouseup = function(aaa){
      using = false
    }
  }
  
}