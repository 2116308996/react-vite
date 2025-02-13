import { useState } from "react";
import { CloseIcon } from 'tdesign-icons-react'
const list = [640667267, 102429533, 837018708, 102429533]
interface propsType {
  index: number
}
const APP = (props: propsType) => {
  const title = ["老人与海", "极限拉古那", "冥歌海墟"]
  const content = [
    "拉古那城北方海域上的黎乔利群岛是黎那汐塔最大的渔场，在那片碧海蓝天之间，还有一段奇妙的冒险故事在等待着你......准备好了就出发吧，船长!",
    "在暌违十年的盛大狂欢节氛围笼罩下，人们被点燃的热情久久未熄。/这座神秘的水上之城方才掀开面纱一角，此刻正适合驾船而行，乘风而上，向着这片士地未被发掘的角落，进发一一/当世界的帷幕在眼前缓缓揭开，崭新的探索之路，已然向你发出邀约!",
    "暗潮中不断涌现着新的残象，编织着死亡陷阱，以引诱过往之人…..又到了该肃清海域的时刻。"]
  const src = ["https://mc.kurogames.com/website-preface/assets/01-84582932.webp", "https://mc.kurogames.com/website-preface/assets/02-4cc36b18.webp", "https://mc.kurogames.com/website-preface/assets/03-a4289a42.webp"]
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
        margin: '0 auto', width: "60rem", height: '50rem', position: 'absolute', backgroundSize: '100% 100%', top: "50%", left: "50%", transform: "translate(-50%,-50%)"
      }}>
        <CloseIcon onClick={closePopupQQ} style={{ fontSize: '2rem', position: "absolute", right: '-50px', color: '#c9ac67' }} />
        <div>
          <p style={{ color: '#c9ac67', fontWeight: "bold", height: "5rem", margin: "0", fontSize: '4rem', width: "100%", textAlign: "center" }}>{title[props.index]}</p>
          <section style={{ fontSize: '1.5rem', color: 'white', paddingTop: '0rem' }}>
            <img src={src[props.index]} alt="" />
            <div className="content" style={{ fontSize: "0.9rem",position:"relative", color: "#eec88c", paddingTop: "0rem", textAlign: "left", paddingLeft: "6rem", paddingRight: "6rem" }}>
              <img style={{ width: "0.8rem",height:"0.8rem",objectFit:"cover",display: "block",position:"absolute",top:"0.2rem",left:"4.8rem" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAARCAYAAAACCvahAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTEyLTAyVDExOjQyOjQyKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0xMi0wMlQxMzo1Njo1MiswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0xMi0wMlQxMzo1Njo1MiswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0EzM0I5QTZCMDcyMTFFRjg2Nzg4NzAwNzZDNDJCM0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0EzM0I5QTdCMDcyMTFFRjg2Nzg4NzAwNzZDNDJCM0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozQTMzQjlBNEIwNzIxMUVGODY3ODg3MDA3NkM0MkIzQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQTMzQjlBNUIwNzIxMUVGODY3ODg3MDA3NkM0MkIzQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkMp3OoAAADRSURBVHjaYjy2NnsZAwPDdCA+zEAiYALiSCA+BMT9QCxCquaHUHYBEN8B4nxSNLMg8fmBeAIQXwHiQGI0YwPaQLwOiHcBsTGpmmHAFYjPAPFkIBYnVTMM5ADxbSAuIUczCPACcTcQ3wLicCDmZGEgHagC8QpQwJKj+SMQdwHxUlI1gwKuEYjfMqDFMT6wEYjrgfgisiAhzWeBuAmIN2GTxKX5HdR5k/CZDNL8F02sD4hboQYwENIsB2WvAeJmIL5EbOiBNO8B4vlAvIzUOAMIMABr+iPhfS857AAAAABJRU5ErkJggg==" alt="" />
              {content[props.index].split("/").map((title,index)=>{
                return <span key={index}>{title}<br></br></span>
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  </>)
}
export default APP