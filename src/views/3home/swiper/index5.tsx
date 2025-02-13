import '../swiperCSS/index5.less'
import { Swiper, SwiperSlide,SwiperRef } from 'swiper/react';
//@ts-ignore
import 'swiper/css';
//import 'swiper/css/pagination';
//import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import { useState,useRef } from 'react';
const APP = () => {
    const swiperRef = useRef<SwiperRef>(null)
    const onPrev = () => {
        console.log(swiperRef.current)
        swiperRef.current?.swiper.slidePrev()
    }
    const onNext = () => {
        swiperRef.current?.swiper.slideNext()
    }
    // const [swiper,setSwiper] = useState<SwiperType>(null)
    // const onSwipered = (swiper: SwiperType) => {
    //     setSwiper(swiper)
    // }
    return (<>
        <div id='swiperItem5'>
            <div className='page-title2'>
                <img src="https://mc.kurogames.com/website-preface/assets/page-title-8f1079a7.png" alt="" />
            </div>
            <div className='swiper-container'>
                <Swiper
                    ref={swiperRef}
                    effect='coverflow'
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 5,
                        stretch: 10,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: true
                    }}
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
                    spaceBetween={0}
                    slidesPerView={1.3}
                    initialSlide={0} // 初始化显示哪一个
                    loop={true} // 是否循环
                    autoplay={false}
                    threshold={40}
                    direction='horizontal'
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true
                    }}
                >
                    <SwiperSlide><img src="https://mc.kurogames.com/website-preface/assets/1-490df7c8.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://mc.kurogames.com/website-preface/assets/2-b8a0e94d.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://mc.kurogames.com/website-preface/assets/3-91ca4911.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://mc.kurogames.com/website-preface/assets/4-01e4628f.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://mc.kurogames.com/website-preface/assets/5-901213c4.jpg" alt="" /></SwiperSlide>
                </Swiper>
                <div className='swiper-pagination'></div>
                <div className='swiper-button-prev' onClick={onPrev}></div>
                <div className='swiper-button-next' onClick={onNext}></div>
            </div>

        </div>

    </>)
}
export default APP