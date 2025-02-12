
import '../swiperCSS/index3.less'
import PopupContentBox from '../components/popupContentBox'
const APP=()=>{
    const showContentBox=(num:number)=>{
        const dom:HTMLElement=document.getElementsByClassName('popupContentBox')[0] as HTMLElement
        dom.style.display='block'
    }
    return(<>
        <div id='swiperItem3'>
            <div className='page-title'>
                <img src="https://mc.kurogames.com/website-preface/assets/page-title-eb12f588.png" alt="" />
            </div>
            <div className='nav-list'>
                <div className='nav-item' onClick={()=>{showContentBox(1)}}>
                    <div className='nav-item-img'>
                        <img className='default-img' src="https://mc.kurogames.com/website-preface/assets/avatar-1-8dea6a0c.png" alt="" />
                        <img className='hover-img' src="https://mc.kurogames.com/website-preface/assets/avatar-1-active-ddd19c2a.png" alt="" />               
                    </div>
                </div>
                <div className='nav-item' onClick={()=>{showContentBox(2)}}>
                <div className='nav-item-img'>
                        <img className='default-img' src="https://mc.kurogames.com/website-preface/assets/avatar-2-ba04389c.png" alt="" />
                        <img className='hover-img' src="https://mc.kurogames.com/website-preface/assets/avatar-2-active-b9323369.png" alt="" />
                    </div>
                </div>
                <div className='nav-item' onClick={()=>{showContentBox(3)}}>
                <div className='nav-item-img'>
                        <img className='default-img' src="https://mc.kurogames.com/website-preface/assets/avatar-3-4c9d5c98.png" alt="" />
                        <img className='hover-img' src="https://mc.kurogames.com/website-preface/assets/avatar-3-active-113a6e80.png" alt="" />
                    </div>
                </div>
            </div>
            <PopupContentBox></PopupContentBox>
        </div>
    </>)
}
export default APP