import { useEffect, useState } from 'react';
import { Swiper } from 'tdesign-react';
const { SwiperItem } = Swiper;
const APP = () => {
    return (
        <>
            <main>
                <div className='tdesgin-demo-block--swiper'>
                    <Swiper direction={'vertical'} navigation={{ showSlideBtn: 'never' }} height={280}>
                        <SwiperItem>
                            <div className="demo-item">1</div>
                        </SwiperItem>
                        <SwiperItem>
                            <div className="demo-item">2</div>
                        </SwiperItem>
                        <SwiperItem>
                            <div className="demo-item">3</div>
                        </SwiperItem>
                        <SwiperItem>
                            <div className="demo-item">4</div>
                        </SwiperItem>
                        <SwiperItem>
                            <div className="demo-item">5</div>
                        </SwiperItem>
                        <SwiperItem>
                            <div className="demo-item">6</div>
                        </SwiperItem>
                    </Swiper>
                </div>
            </main>
        </>
    )
}
export default APP;