import React, { useMemo, useState } from 'react'
import Children from './children1'
import Apple from './apple'
const useMemoFun = React.memo(() => {
    const [count, setCount] = useState(0)
    const [name,setName]=useState('zhuhui')
    const newName=useMemo(()=>{
        return name.toLocaleLowerCase()
    },[name])
    console.log("修改count")
    return <div>
        <div>父count:{count}</div>

        <Children name={name}></Children>
        <button onClick={()=>setCount(count + 1)}>修改父count</button>

        <Apple></Apple>
        </div>
})
export default useMemoFun
