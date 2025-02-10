import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
//@ts-ignore
//import 'swiper/css/pagination';
//@ts-ignore
//import 'swiper/css/navigation';
import imgList from '../data/swiperNavigationImg'
import '../swiperCSS/index2.less'
import roleNavData from '../data/roleNavData'
import RoleNavItem from '../components/roleNavItem'
import { SoundLowIcon } from 'tdesign-icons-react';
import { useDebounce } from '../../../hooks/throttle';
import gasp from 'gsap'
const APP = () => {
    const swiperRef = useRef<SwiperType>()
    const [activeIndex, setActiveIndex] = useState(0)
    const [activeMoveIndex, setActiveMoveIndex] = useState(0)
    const onSlideChange = (swiper: SwiperType) => {
        switch (swiper.activeIndex) {
            case 0:
                break;
            case 1:
                break;
            default:
                break;
        }
    }

    const init = () => {
        //https://mc.kurogames.com/spine-file/role_changli/c_changli_1.atlas
        //https://mc.kurogames.com/spine-file/role_changli/c_changli_1.json
        //https://mc.kurogames.com/spine-file/role_changli/c_changli_1.png
    }
    const playAudio = () => {
        const myaudio = document.getElementById('roleAudio') as HTMLAudioElement

        if (myaudio.paused) {

            myaudio.play()
        } else {
            myaudio.pause()
        }

    }
    const swiperButtonPrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
        }
    }
    const swiperButtonNext = () => {
        if (activeIndex < roleNavData.length - 1) {
            setActiveIndex(activeIndex + 1)
        }
    }
    const onclickSwiperSlide = (index: number) => {
        setActiveIndex(index)
    }
    useEffect(() => {
        console.log(activeIndex)
        swiperRef.current?.slideTo(activeIndex)
        console.log("dsadsa")
        useDebounce(()=>{
            console.log("aaaa")
            gasp.to(['.role-box', '.role-camp', '.role-intr-box'], {
                opacity: 0,
                onComplete:()=>{
                    setActiveMoveIndex(activeIndex)
                    gasp.to(['.role-box', '.role-camp', '.role-intr-box'], {
                        opacity: 1
                    })
                }
            })
        },300,false)();
    }, [activeIndex])


    return (<>
        <div id='swiperItem2'>
            <div className='role-nav-item-bg'>
                <div className='bg-box'>
                    <img src="https://mc.kurogames.com/website-preface/assets/progress-bg-452c1851.webp" alt="" />
                    <div className='light'></div>
                    <div className='lightVideo'>
                        <video
                            loop autoPlay muted playsInline preload='auto'
                            src="https://mc.kurogames.com/website-preface/video/desktop/lizi-loop.mp4"></video>
                    </div>
                </div>
                <div className='page-title-box'>
                    <img src="https://mc.kurogames.com/website-preface/assets/page-title-1be9dc58.png" alt="" />
                </div>
                <div className='page-bg-title-box'>
                    <img className='title-bg-1' src={imgList[4]} alt="" />
                    <img className='title-bg-2' src="https://mc.kurogames.com/website-preface/assets/title-bg-2-9ee080e2.png" alt="" />
                </div>
                <div className='role-box'>
                    <img src={roleNavData[activeMoveIndex].roleBoxSrc} alt="" />
                </div>
                <div className='role-camp'>
                    <img src={roleNavData[activeMoveIndex].camp} alt="" />
                </div>
                <div className='role-intr-box'>
                    <div className='role-name'>
                        <img className='role-name-img1' src={roleNavData[activeMoveIndex].attr} alt="" />
                        <p>{roleNavData[activeMoveIndex].name}</p>
                        <img className='role-name-img2' src={roleNavData[activeMoveIndex].starSrc} alt="" />
                    </div>
                    <div className='attr-voice-box'>
                        <div className='voice-box'>
                            <span>{roleNavData[activeMoveIndex].cv}</span>
                            <SoundLowIcon style={{ fontSize: "1.1rem", color: '#dab67d', cursor: "pointer" }} onClick={playAudio}></SoundLowIcon>
                            <audio id='roleAudio' src={roleNavData[activeMoveIndex].audioSrc}></audio>
                        </div>
                        <div className='voice-text'>{roleNavData[activeMoveIndex].content}</div>
                    </div>
                </div>
            </div>

            <div className='role-nav-box'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={4}
                    slidesPerGroup={1}
                    initialSlide={0} // 初始化显示哪一个
                    loop={false} // 是否循环
                    autoplay={false}
                    onSlideChange={onSlideChange}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    centeredSlides={false}
                    direction='vertical'
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                >
                    {roleNavData.map((item, index) => {
                        return <SwiperSlide key={index} onClick={() => { onclickSwiperSlide(index) }}>
                            <RoleNavItem props={item} active={activeIndex == index ? true : false} ></RoleNavItem>
                        </SwiperSlide>
                    })}
                </Swiper>
                <div className="swiper-navigation">
                    <div style={{ opacity: activeIndex == 0 ? 0 : 1 }} className="swiper-button-prev" onClick={swiperButtonPrev}>
                        <img src={imgList[0]} alt="" />
                    </div>
                    <div style={{ opacity: activeIndex == roleNavData.length - 1 ? 0 : 1 }} className="swiper-button-next" onClick={swiperButtonNext}>
                        <img src={imgList[1]} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default APP