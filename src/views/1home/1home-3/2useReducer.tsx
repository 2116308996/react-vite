import { useReducer,useState } from "react";

function useReducerFun(){
    const initialState = {count: -1};
    type State=typeof initialState;
    const initFun=(state:State)=>{
        return {count:Math.abs(state.count)};
    }
    //处理函数默认是不走的
    const reducer = (state:State,action:{type:'add'|'sub'})=>{
        switch(action.type){
            case 'add':
                return {count:state.count+1};
            case 'sub':
                return {count:state.count-1};
            default:
                return state;
        }
    }
    const [count,setcount] = useState(0);
    //第一个参数是reducer函数
    //第二个参数是初始化状态
    //第三个参数是初始化函数
    const [count2,dispatch] = useReducer(reducer,initialState,initFun);
    return <div>
        <div>{count}</div>
        <button onClick={()=>setcount(count+1)}>增加</button>
        <button onClick={()=>setcount(count-1)}>减少</button>
        <div>{count2.count}</div>
        <button onClick={()=>dispatch({type:'add'})}>增加</button>
        <button onClick={()=>dispatch({type:'sub'})}>减少</button>
    </div>
}
export default useReducerFun;