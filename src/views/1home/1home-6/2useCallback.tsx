import {useCallback,useState} from 'react'
const map=new Map()
let mapcount=1;
export default function useCallbackFun(){
    const [name,setName]=useState('')
    console.log("render")
    const handleChange=useCallback((e:any)=>{
        console.log("handleChange")
        setName(e.target.value)
    },[])
    if(!map.has(handleChange)){
        map.set(handleChange,mapcount++)
    }
    console.log(map.get(handleChange))
    return <div>
        <input type="text" value={name} onChange={handleChange} />
    </div>
}
