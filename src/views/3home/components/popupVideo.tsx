import { useState } from "react";
import { CloseIcon } from 'tdesign-icons-react'
const APP = () => {
    const closePopupVideo = () => {
        const dom: HTMLElement = document.getElementsByClassName('popupVideo')[0] as HTMLElement
        dom.style.display = 'none'
        const myVideo=document.getElementById('popupVideoPlay') as HTMLVideoElement
        myVideo.pause()
        myVideo.currentTime=0
    }
    return (<>
        <div className="popupVideo" style={{
            backgroundColor: 'rgba(0,0,0,0.7)',
            width: '100%', height: 'calc(100vh - 56px)', position: 'relative', display: 'none'
        }}>
            <div style={{
                width: '50rem',height:'30rem', position: 'absolute', top: "50%",left:'50%',
                transform: "translate(-50%,-50%)", margin: '0 auto'
            }}>
                <CloseIcon onClick={closePopupVideo} style={{ fontSize: '2rem', position: "absolute", right: '-3rem',top:'3rem', color: '#c9ac67' }} />
                <video
                    style={{
                        width: '100%',
                        position: 'absolute',
                        left: '0',
                        top: '50%',
                        transform: "translateY(-50%)"
                    }}
                    autoPlay={false} playsInline controls muted={false}
                    preload="auto" controlsList="nodowmload"
                    id="popupVideoPlay"
                    >
                        <source src="https://mc.kurogames.com/website-preface/video/common/cg_zh.mp4" type="video/mp4"></source>
                    </video>
            </div>
        </div>


    </>)
}
export default APP