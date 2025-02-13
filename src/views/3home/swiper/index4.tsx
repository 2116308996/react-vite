
import '../swiperCSS/index4.less'

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
//@ts-ignore
import 'swiper/css';
//import 'swiper/css/pagination';
//import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useState } from 'react';
const APP = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const title=["下层金库"]
    const content=["下层金库"]
    const onSlideChange = (swiper: SwiperType) => {
        setActiveIndex(swiper.activeIndex)
    }
    return (<>
        <div id='swiperItem4'>
            <div className='page-title2'>
                <img src="https://mc.kurogames.com/website-preface/assets/page-title-7cfda421.png" alt="" />
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1.7}
                initialSlide={0} // 初始化显示哪一个
                loop={true} // 是否循环
                autoplay={false}
                onSlideChange={onSlideChange}
                onSwiper={(swiper) => console.log(swiper)}
                threshold={40}
                direction='horizontal'
                centeredSlides={true}
            // navigation
            // pagination
            >
                <SwiperSlide><img src="https://mc.kurogames.com/website-preface/assets/09-a6e93cc1.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://mc.kurogames.com/website-preface/assets/08-e45ef3ed.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://mc.kurogames.com/website-preface/assets/01-081e2381.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://mc.kurogames.com/website-preface/assets/02-dc32da3c.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://mc.kurogames.com/website-preface/assets/03-929d60ff.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://mc.kurogames.com/website-preface/assets/04-3174d302.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://mc.kurogames.com/website-preface/assets/05-8c20dcd5.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://mc.kurogames.com/website-preface/assets/06-b8503d26.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://mc.kurogames.com/website-preface/assets/07-8efa8dff.webp" alt="" /></SwiperSlide>
            </Swiper>
        </div>

    </>)
}
export default APP