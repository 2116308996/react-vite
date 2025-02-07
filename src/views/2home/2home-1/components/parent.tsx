import { useState,useCallback } from "react";
import './parent.css'
interface CardProps{
    title?:string,
    subTitle?:string,
    content?:string,
    callback?:(value:string)=>void,
    children?:React.ReactNode
}
const APP=(props:CardProps)=>{
    //@ts-ignore
    const data:typeof props=Object.assign({},{
        content:'内容区域',
        title:'标题',
        subTitle:'副标题'
    },props)
    const [content,setContent]=useState("请输入")
    const change=(e:any)=>{
        setContent(e.target.value)
        props.callback&&props.callback(e.target.value)
    }
    //兄弟组件通讯
    const e= new Event('on-card')
    const clickTap=()=>{
        e.params={value:content}
        window.dispatchEvent(e)
    }
    //.................................

    return (
        <div className="card">


            <header>
                <div>{data.title}</div>
                <div>{data.subTitle}</div>
            </header>
            <main>
                {data.content}
                {props.children}
                <input type="text" value={content} onChange={change}/>
            </main>
            <footer>

                <button onClick={()=>{window.MessagePlugin.info('确认成功');clickTap()}}>确认</button>
                <button onClick={()=>{window.MessagePlugin.info('取消成功')}}>取消</button>
            </footer>
        </div>

    )
}
export default APP;
declare global{
    interface Event{
        params:{value:string}
    }
}
