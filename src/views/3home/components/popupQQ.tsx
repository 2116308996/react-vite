import { useState } from "react";
import { CloseIcon } from 'tdesign-icons-react'
import {MessagePlugin} from 'tdesign-react'
const list = [640667267, 102429533, 837018708, 102429533]
const APP = () => {
  const closePopupQQ = () => {
    const dom: HTMLElement = document.getElementsByClassName('popupQQ')[0] as HTMLElement
    dom.style.display = 'none'
  }
  const copyText = (num: number) => {
    navigator.clipboard.writeText(list[0].toString()).then(() => {
      MessagePlugin.info({
        content: '复制成功',
        placement: 'center',
        offset: [Number(0), Number(0)],
        icon:null
      });
    }).catch(err => {
      console.error('复制失败:', err);
    });
  }
  return (<>
    <div className="popupQQ" style={{
      backgroundColor: 'rgba(0,0,0,0.7)',
      width: '100%', height: 'calc(100vh - 56px)', position: 'absolute', display: 'none'
    }}>
      <div className="count" style={{
        background: "url(https://mc.kurogames.com/website-preface/assets/popup-qq-8c14af50.png) no-repeat center",
        margin: '0 auto', width: "26rem", height: '26rem', position: 'relative', backgroundSize: '100% 100%', top: "50%", transform: "translateY(-50%)"
      }}>
        <CloseIcon onClick={closePopupQQ} style={{ fontSize: '2rem', position: "absolute", right: '-50px', color: '#c9ac67' }} />
        <div>
          <h2 style={{ color: '#c9ac67', fontSize: '2rem', position: 'absolute', top: "0rem", left: '2rem' }}>官方QQ群</h2>
          <section style={{ fontSize: '1.5rem', color: 'white', paddingTop: '8rem' }}>
            <div style={{ width: '23rem', height: '4rem', margin: '0 auto', display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
              <div>官方3群</div>
              <div>640667267</div>
              <div>
                <button onClick={() => copyText(0)}>复制</button>
              </div>
            </div>
            <div style={{ width: '23rem', height: '4rem', margin: '0 auto', display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
              <div>官方5群</div>
              <div>102429533</div>
              <div>
                <button onClick={() => copyText(1)}>复制</button>
              </div>
            </div>
            <div style={{ width: '23rem', height: '4rem', margin: '0 auto', display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
              <div>官方52群</div>
              <div>837018708</div>
              <div>
                <button onClick={() => copyText(2)}>复制</button>
              </div>
            </div>
            <div style={{ width: '23rem', height: '4rem', margin: '0 auto', display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
              <div>官方54群</div>
              <div>102429533</div>
              <div>
                <button onClick={() => copyText(3)}>复制</button>
              </div>
            </div>
          </section>
        </div>
      </div>

    </div>
  </>)
}
export default APP