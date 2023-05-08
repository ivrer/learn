const openFullscreen = () => {
    const full = document.getElementById("content")

    if(full.requestFullscreen){
        full.requestFullscreen()

    }else if(full.mozRequestFullScreen){
        full.mozRequestFullScreen()
    }else if(full.webkitRequestFullScreen){
        full.webkitRequestFullScreen()
    }else if(full.msRequestFullscreen){
        full.msRequestFullscreen()
    }
}

// 取消全屏api亦然