
import './bgbox.less'
const APP = () => {
    return (<>
        <div>
            <div className='bg-box'>
                <img src="https://mc.kurogames.com/website-preface/assets/progress-bg-452c1851.webp" alt="" />
                <div className='light'></div>
                <div className='lightVideo'>
                    <video
                        loop autoPlay muted playsInline preload='auto'
                        src="https://mc.kurogames.com/website-preface/video/desktop/lizi-loop.mp4"></video>
                </div>
            </div>
        </div>
    </>)
}
export default APP