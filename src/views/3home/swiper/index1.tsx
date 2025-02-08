import { useEffect,useState } from 'react';
const APP = () => {
   
    return (
        <div>
            <main>
                <div style={{width:'100vw',height:'cacl(100vh - 56px)'}}>
                    <video src="https://mc.kurogames.com/website-preface/video/bg/bg-video.mp4"
                    poster='https://mc.kurogames.com/website-preface/video/bg/bg-poster.png'
                    loop autoPlay muted playsInline></video>
                </div>
            </main>
        </div>
    )
}
export default APP;