import { useEffect,useState } from "react"
export default function useEffectFun(){
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log('count',count)
    },[count])
    return <div>useEffectFun</div>
}

