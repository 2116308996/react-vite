import { createContext,useContext,useState } from "react"
import Parent from './3parent'

export default function useContentFun(){
    
    const [count,setCount]=useState(1)

    return <div>
          <Parent></Parent>
    </div>
}