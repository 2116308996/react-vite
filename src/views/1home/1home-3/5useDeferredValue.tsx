import { useDeferredValue,useState } from "react"
export default function useDeferredValueFun(){
    const [text,setText]=useState('a')
    const deferredText=useDeferredValue(text)
    const isStale = deferredText !== text // 检查是否为延迟状态
    return (
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <div>{text}</div>
            <div>{deferredText}</div>
            <div>{isStale ? '延迟状态' : '非延迟状态'}</div>
        </div>
    )
}
