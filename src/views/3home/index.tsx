import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import SwiperItem1 from './swiper/index1'
import SwiperItem2 from './swiper/index2'
import SwiperItem3 from './swiper/index3';
import SwiperItem4 from './swiper/index4';
import SwiperItem5 from './swiper/index5';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import BgBox from './components/bgBox'
//@ts-ignore
import 'swiper/css';
//import 'swiper/css/pagination';
//import 'swiper/css/navigation';
import './swiper.less'
import { useThrottle } from '../../hooks/throttle';
import gasp from 'gsap'
const APP = () => {
    let speed: number = 1000
    const swiperRef = useRef<SwiperClass>()
    const [swiperActiveIndex, setSwiperActiveIndex] = useState(0)
    const isRemoveFooter = useRef<boolean>(false)
    const gaspSwiperItem1Enter = () => {
        setTimeout(() => {
            gasp.to('.logo', {
                opacity: 1,
                top: '4rem'
            })
            gasp.to('.top-bar', {
                opacity: 1,
                top: '3rem'
            })
            gasp.to('.media-silde', {
                opacity: 1,
                right: '1.5rem'
            })
            gasp.to('.bottom-box', {
                bottom: '10rem',
                opacity: 1
            })
        }, speed / 2)
    }


    const gaspSwiperItem1Out = () => {
        gasp.to('.logo', {
            opacity: 0,
            top: '-4rem'
        })
        gasp.to('.top-bar', {
            opacity: 0,
            top: '-4rem'
        })
        gasp.to('.media-silde', {
            opacity: 0,
            right: '-2rem'
        })
        gasp.to('.bottom-box', {
            bottom: '0rem',
            opacity: 0
        })
    }
    const gaspSwiperItem2Enter = () => {
        gasp.fromTo(['.role-intr-box', '.page-title-box', '.page-bg-title-box'], {
            left: '-20rem',
            transform: 'scale(1.5)',

            opacity: 0
        }, {
            transform: 'scale(1)',
            left: '6rem',
            opacity: 1,
            duration: 1,
        })
        gasp.fromTo('.role-nav-box', {
            right: '-10rem',
            opacity: 0,
            transform: 'scale(1.5) translateY(-50%)'
        },
            {
                duration: 1,
                right: '8rem',
                transform: 'scale(1) translateY(-50%)',
                opacity: 1,

            })
    }
    const gaspSwiperItem3Enter = () => {
        gasp.fromTo('.page-title', {
            top: '-6rem',
            opacity: 0,
        }, {
            top: '6rem',
            opacity: 1,
            duration: 1,
        })
        gasp.fromTo('.nav-list', {
            top: '95%',
            opacity: 0,
        }, {
            top: '55%',
            opacity: 1,
            duration: 1,
        })
    }
    const pageTitle: HTMLDivElement = document.getElementById('swiperItem4')?.getElementsByClassName('page-title2')[0] as HTMLDivElement
    const swiper4: HTMLDivElement = document.getElementById('swiperItem4')?.getElementsByClassName('swiper')[0] as HTMLDivElement
    const gaspSwiperItem4Enter = () => {
        gasp.fromTo(pageTitle, {
            top: '-6rem',
            opacity: 0,
        }, {
            top: '4rem',
            opacity: 1,
            duration: 1,
        })
        gasp.fromTo(swiper4, {
            top: '95%',
            opacity: 0,
        }, {
            top: '50%',
            opacity: 1,
            duration: 1,
        })
    }
    const pageTitle5: HTMLDivElement = document.getElementById('swiperItem5')?.getElementsByClassName('page-title2')[0] as HTMLDivElement
    const swiper5: HTMLDivElement = document.getElementById('swiperItem5')?.getElementsByClassName('swiper-container')[0] as HTMLDivElement
    const gaspSwiperItem5Enter = () => {
        gasp.fromTo(pageTitle5, {
            top: '-6rem',
            opacity: 0,
        }, {
            top: '5rem',
            opacity: 1,
            duration: 1,
        })
        gasp.fromTo(swiper5, {
            top: '100%',
            opacity: 0,
        }, {
            top: '60%',
            opacity: 1,
            duration: 1,
        })
    }
    const onSlideChange = (swiper: SwiperType) => {
        setSwiperActiveIndex(swiper.activeIndex)
        switch (swiper.activeIndex) {
            case 0:
                gaspSwiperItem1Enter()
                break;
            case 1:
                gaspSwiperItem1Out()
                gaspSwiperItem2Enter()
                break;
            case 2:
                gaspSwiperItem3Enter()
                break;
            case 3:
                gaspSwiperItem4Enter()
                break;
            case 4:
                gaspSwiperItem5Enter()
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        gaspSwiperItem1Enter()
        const swiper: HTMLDivElement = document.getElementsByClassName('swiper')[0] as HTMLDivElement
        const footerText: HTMLDivElement = document.getElementsByClassName('footer-text')[0] as HTMLDivElement
        // gasp.to([swiper,footerText], {
        //     transform: 'translateY(130px)',
        // })
        // 方法一：使用 wheel 事件
        const handleWheel = useThrottle((e: WheelEvent) => {
            if (!swiperRef.current) return;
            // deltaY > 0 表示向下滚动，< 0 表示向上滚动
            if (swiperRef.current?.activeIndex == 4 && e.deltaY > 0 && isRemoveFooter.current == false) {
                isRemoveFooter.current = true
                gasp.to([swiper, footerText], {
                    transform: 'translateY(-130px)',
                })
                console.log("top", swiperRef.current?.activeIndex, isRemoveFooter)
            }
            else if (isRemoveFooter.current == true && e.deltaY < 0 && swiperRef.current?.activeIndex == 4) {
                isRemoveFooter.current = false
                gasp.to([swiper, footerText], {
                    transform: 'translateY(0px)',
                })
                console.log("bottom", swiperRef.current?.activeIndex, isRemoveFooter)
            } else if (e.deltaY > 0 && isRemoveFooter.current == false) {
                // 向下滚动
                swiperRef.current.slideNext();
            }
            else if (e.deltaY < 0 && isRemoveFooter.current == false) {
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
            <main className='swiper-container'>
                <BgBox></BgBox>
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
                    allowTouchMove={false}
                // navigation
                // pagination
                >
                    <SwiperSlide><SwiperItem1></SwiperItem1></SwiperSlide>
                    <SwiperSlide><SwiperItem2></SwiperItem2></SwiperSlide>
                    <SwiperSlide><SwiperItem3></SwiperItem3></SwiperSlide>
                    <SwiperSlide><SwiperItem4></SwiperItem4></SwiperSlide>
                    <SwiperSlide><SwiperItem5></SwiperItem5></SwiperSlide>

                </Swiper>
                <div className='footer' style={{ display: isRemoveFooter.current ? 'none' : 'block' }}>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAABcCAYAAACvKR3lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4MjI3ZDU4My0wZjkwLWY0NGMtOGIyNC0xZWYwOGFiZDBmOTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUMzNTE2MjJCNjE1MTFFRjg3RUM5RTg1NDI2QjdCN0UiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUMzNTE2MjFCNjE1MTFFRjg3RUM5RTg1NDI2QjdCN0UiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODIyN2Q1ODMtMGY5MC1mNDRjLThiMjQtMWVmMDhhYmQwZjk5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgyMjdkNTgzLTBmOTAtZjQ0Yy04YjI0LTFlZjA4YWJkMGY5OSIv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" alt="" />
                </div>
                <div className='footer-text'>
                    按照鸣潮官网进行还原
                    <div className='footer-text-developer'>开发者：朱荟</div>
                </div>
            </main>
        </>
    )
}
export default APP;