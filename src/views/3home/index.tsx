import { useEffect, useState,useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import SwiperItem1 from './swiper/index1'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
//@ts-ignore
import 'swiper/css';
//import 'swiper/css/pagination';
//import 'swiper/css/navigation';
import './swiper.less'
import { throttle } from '../../hooks/throttle';
import gasp from 'gsap'
const APP = () => {
    let speed:number=1000
    const swiperRef=useRef<SwiperType>()
    const gaspSwiperItem1Enter=()=>{
        setTimeout(()=>{
            gasp.to('.logo',{
                opacity:1,
                top:'4rem'
            })
            gasp.to('.top-bar',{
                opacity:1,
                top:'3rem'
            })
            gasp.to('.media-silde',{
                opacity:1,
                right:'1.5rem'
            })
        },speed/2)
    }


    const gaspSwiperItem1Out=()=>{
        gasp.to('.logo',{
            opacity:0,
            top:'-4rem'
        })
        gasp.to('.top-bar',{
            opacity:0,
            top:'-4rem'
        })
        gasp.to('.media-silde',{
            opacity:0,
            right:'-2rem'
        })

    }
    const onSlideChange = (swiper: SwiperType) => {
        console.log(swiper)
        switch(swiper.activeIndex){
            case 0:
                gaspSwiperItem1Enter()
                break;
            case 1:
                gaspSwiperItem1Out()
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        gaspSwiperItem1Enter()
        // 方法一：使用 wheel 事件
        const handleWheel = throttle((e: WheelEvent) => {
            if (!swiperRef.current) return;
            // deltaY > 0 表示向下滚动，< 0 表示向上滚动
            if (e.deltaY > 0) {
                // 向下滚动
                swiperRef.current.slideNext();
            } else {
                swiperRef.current.slidePrev();
            }
            // 阻止默认滚动
            e.preventDefault();
        }, 500);
        // 添加事件监听
        document.addEventListener('wheel', handleWheel, { passive: false });
        // 清理函数
        return () => {
            document.removeEventListener('wheel', handleWheel);
        };
    }, []);
    return (
        <>
            <main>
                <Swiper
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    initialSlide={0} // 初始化显示哪一个
                    loop={false} // 是否循环
                    speed={speed}//页面切换速度
                    autoplay={false}
                    onSlideChange={onSlideChange}
                    onSwiper={(swiper) => console.log(swiper)}
                    threshold={40}
                    direction='vertical'
                    navigation
                    pagination
                >
                    <SwiperSlide><SwiperItem1></SwiperItem1></SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>

                </Swiper>
            </main>
        </>
    )
}
export default APP;