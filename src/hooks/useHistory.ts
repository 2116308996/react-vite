import { useSyncExternalStore } from "react"
export const useHistory=()=>{
     const subscribe=(callback:()=>void)=>{
        //订阅浏览器api  监听history变化
        //vue 里面的路由有三种模式
        //hash 模式  hashchange #/
        //history 模式 popstate /
        //abstract 模式 
        window.addEventListener('popstate',callback);
        window.addEventListener('hashchange',callback);
        return ()=>{
            //取消订阅
            window.removeEventListener('popstate',callback);
            window.removeEventListener('hashchange',callback);
        }
        //popstae只能监听浏览器前进后退按钮
     }
     const getSnapeshot=()=>{
       return window.location.href
     }
     const url=useSyncExternalStore(subscribe,getSnapeshot)
     const push=(url:string)=>{
       window.history.pushState({},'',url)
       window.dispatchEvent(new PopStateEvent('popstate'))
     }

     const replace=(url:string)=>{
        window.history.replaceState({},'',url)
        window.dispatchEvent(new PopStateEvent('popstate'))
     }
     return [url,push,replace] as const//元组类型
}
