import React, { useMemo, useState } from 'react'
const useMemoFun = React.memo((props:any) => {
    const [count, setCount] = useState(0)
    console.log("修改count",props)
    const [name, setName] = useState('')
    const [list, setList] = useState([])
    return <div>
        <div>子count:{count}</div>
        <button onClick={()=>setCount(count + 1)}>修改子count</button>
        </div>
})
export default useMemoFun
