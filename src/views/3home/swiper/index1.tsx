import { useEffect, useState } from 'react';
import gasp from 'gsap'
import LinkItem from './linkItem'
import PopupQQ from '../components/popupQQ'
const APP = () => {
    const openPopupQQ = () => {
        const dom:HTMLElement=document.getElementsByClassName('popupQQ')[0] as HTMLElement
        dom.style.display = 'block'
    }
    const onMouseEnterWX = () => {
        gasp.to('.qrCode', {
            opacity: 1,
            transform: 'scale(1)'
        })
    }
    const onMouseOutWX = () => {
        gasp.to('.qrCode', {
            opacity: 0,
            transform: 'scale(0.1)'
        })
    }
    return (
        <div className='swiperItem1' style={{ width: '100vw', height: '100%', overflow: 'hidden' }}>

            <div className='mask-bg'></div>
            <div className='logo'></div>
            <div className='top-bar'>
                <a href="https://mc.kurogames.com/main">
                    <img src="https://mc.kurogames.com/website-preface/assets/btn-enter-d5639ced.png" alt="" />
                </a>
            </div>
            <div className='media-silde'>
                <div className='media-box'>
                    <div className='link-item'>
                        <a href="https://www.kurobbs.com/mc/home/9" target='_blank'>
                            <img src={LinkItem[0]} alt="库街区" />
                        </a>
                    </div>
                    <div className='link-item'>
                        <img src={LinkItem[1]} alt="微信" onMouseEnter={onMouseEnterWX}
                            onMouseOut={onMouseOutWX} />
                        <img className='qrCode' src="https://mc.kurogames.com/website-preface/assets/qrcode_wechat-c652e36d.jpg" alt="微信" />
                    </div>
                    <div className='link-item'>
                        <a href="https://weibo.com/u/7730797357" target='_blank'>
                            <img src={LinkItem[2]} alt="微博" />
                        </a>
                    </div>
                    <div className='link-item'>
                        <a href="https://space.bilibili.com/1955897084" target='_blank'>
                            <img src={LinkItem[3]} alt="哔哩哔哩" />
                        </a>
                    </div>
                    <div className='link-item'>
                        <a href="https://www.douyin.com/user/MS4wLjABAAAARuTyGXitt4QGTdl87TYlMXkxVva40jhbk9S1p4zrBrEQ9BD9nCbF61XItUl564wC" target='_blank'>
                            <img src={LinkItem[4]} alt="抖音" />
                        </a>
                    </div>
                    <div className='link-item'>
                        <a href="https://tap.cn/mJjQTYqZ?channel=rep-rep_ssywxpjcny3" target='_blank'>
                            <img src={LinkItem[5]} alt="TapTap" />
                        </a>
                    </div>
                    <div className='link-item'>
                        <a href="https://www.3839.com/a/143964.htm" target='_blank'>
                            <img src={LinkItem[6]} alt="好游快爆" />
                        </a>
                    </div>
                    <div className='link-item' onClick={() => openPopupQQ()}>
                        <img src={LinkItem[7]} alt="QQ" />
                    </div>
                </div>
            </div>
            <div className='bottom-box'>

            </div>
            <video
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',  // 保持比例填充
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    zIndex: '-99'
                }}
                src="https://mc.kurogames.com/website-preface/video/bg/bg-video.mp4"
                poster='https://mc.kurogames.com/website-preface/video/bg/bg-poster.png'
                loop autoPlay muted playsInline></video>
            <PopupQQ></PopupQQ>
        </div>
    )
}
export default APP;