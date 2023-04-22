function animation(){
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const canvas = document.querySelector('#time')
    const ctx = canvas.getContext('2d')
    let secondsRotate = (Math.PI/30)*seconds
    let minutesRotate = (Math.PI/30)*minutes + seconds/60*(Math.PI/30)
    let housrRotate = (Math.PI/6)*hours + minutes/60*(Math.PI/6)

    ctx.save()
   
  
    ctx.clearRect(0,0,600,600)  
    ctx.translate(300,300)
    ctx.rotate(-Math.PI/2)
    ctx.strokeStyle="black"
    ctx.lineWidth = 2
    ctx.lineCap = "round"
    ctx.save()

    //绘制秒针
    ctx.rotate(secondsRotate)
    ctx.beginPath()
    ctx.moveTo(-20,0)
    ctx.lineTo(90,0) 
    ctx.strokeStyle='black'
    ctx.stroke()
    ctx.restore()

      //绘制分针
    ctx.save()
    ctx.rotate(minutesRotate)
    ctx.beginPath()
    ctx.moveTo(-10,0)
    ctx.lineTo(60,0) 
    ctx.strokeStyle='green'
    ctx.stroke()
    ctx.restore()

    //绘制时针
    ctx.save()
    ctx.rotate(housrRotate)
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(40,0)
    ctx.strokeStyle='red'
    ctx.stroke()
    ctx.restore()

    //绘制表盘
    ctx.save()
      for (let i = 0; i <= 12;i++) { 
        ctx.beginPath()
        ctx.rotate(Math.PI/6)
        ctx.moveTo(100,0)
        ctx.lineTo(120,0)
        ctx.stroke()
    }
    ctx.restore()


    ctx.restore()

    window.requestAnimationFrame(animation)
}
// setInterval(animation,1000)
window.requestAnimationFrame(animation)



