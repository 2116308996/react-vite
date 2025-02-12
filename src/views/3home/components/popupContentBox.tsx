import { useState } from "react";
import { CloseIcon } from 'tdesign-icons-react'
const list = [640667267, 102429533, 837018708, 102429533]
const APP = () => {
  const closePopupQQ = () => {
    const dom: HTMLElement = document.getElementsByClassName('popupContentBox')[0] as HTMLElement
    dom.style.display = 'none'
  }
  return (<>
    <div className="popupContentBox" style={{
      backgroundColor: 'rgba(0,0,0,0.7)',
      width: '100%', height: 'calc(100vh)', position: 'absolute', display: 'none'
    }}>
      <div className="count" style={{
        background: "url(https://mc.kurogames.com/website-preface/assets/popup-qq-8c14af50.png) no-repeat center",
        margin: '0 auto', width: "26rem", height: '26rem', position: 'relative', backgroundSize: '100% 100%', top: "50%", transform: "translateY(-50%)"
      }}>
        <CloseIcon onClick={closePopupQQ} style={{ fontSize: '2rem', position: "absolute", right: '-50px', color: '#c9ac67' }} />
        <div>
          <h2 style={{ color: '#c9ac67', fontSize: '2rem', position: 'absolute', top: "0rem", left: '2rem' }}>官方QQ群</h2>
          <section style={{ fontSize: '1.5rem', color: 'white', paddingTop: '8rem' }}>
            123
          </section>
        </div>
      </div>

    </div>
  </>)
}
export default APP