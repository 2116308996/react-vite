import { useStorage } from "../../../hooks/useStorage";
import { useHistory } from "../../../hooks/useHistory";
import { Button } from "tdesign-react";
function useSyncExternalStoreFun(){
    const [count,setCount]=useStorage('count','1')
    const [url,push,replace]=useHistory()
    return (
        <>
        <h2>value:{count}</h2>
        <Button onClick={()=>setCount(count+1)}>+1</Button>
        <Button onClick={()=>setCount(count-1)}>-1</Button>
        <h2>url:{url}</h2>
        <Button onClick={()=>push('/1home/1home')}>跳转push</Button>
        <Button onClick={()=>replace('/1home/2home')}>跳转replace</Button>
        </>

    )
}
export default useSyncExternalStoreFun;
    