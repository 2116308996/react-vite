import {useRef,useState} from 'react'
export default function useRefFun(){
    console.log('render')
    const div=useRef<HTMLDivElement>(null)
    const [count,setCount]=useState(0)
    let num=useRef(0)
    //ReturnType<typeof setInterval> 
    let timer=useRef<ReturnType<typeof setInterval> | null>(null)
    const start=()=>{
        timer.current=setInterval(()=>{
            setCount(count=>count+1)
        },100)
    }

    const end=()=>{
        if(timer.current) clearInterval(timer.current)
    }
    const handleClick=()=>{


        console.log(div.current)
    }
    return <div>
        <div ref={div}>dom元素</div>
        <button onClick={handleClick}>获取dom元素</button>
        <div>{count}</div>
        <button onClick={start}>开始</button>
        <button onClick={end}>停止</button>
    </div>
}