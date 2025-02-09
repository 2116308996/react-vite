import { useState,useDebugValue } from "react";
import {useWatermark} from '../../../hooks/useWatermark'
const App=()=>{
  const [updateWatermark, opts] = useWatermark({
    content: '水印水印水印',
 }) // 水印
 const update = () => {
    updateWatermark({
       content: '更新水印',
    })
 }
  return (<>
  <div>111</div>
  </>)
}
export default App