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
const APP = () => {
    const swiperRef = useRef<SwiperType>()
    const [activeIndex, setActiveIndex] = useState(0)
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
    }, [activeIndex])


    return (<>
        <div id='swiperItem2'>
            <div className='role-nav-item-bg'>
                <div className='bg-box'>
                    <img src="https://mc.kurogames.com/website-preface/assets/progress-bg-452c1851.webp" alt="" />
                    <div className='light'></div>
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