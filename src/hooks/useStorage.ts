import { useSyncExternalStore } from "react";
export const useStorage = (key: string, initialValue: any) => {

    //订阅者
    const subscribe = (callback: () => void) => {
        //订阅浏览器API
        window.addEventListener('storage', callback)
        return ()=>{
            window.removeEventListener('storage',callback)
        }
    }
    const getSnapeshot=()=>{
        return localStorage.getItem(key)?JSON.parse(localStorage.getItem(key) as string):initialValue
    }
    const res = useSyncExternalStore(subscribe,getSnapeshot);
    const updateStorage = (value: any) => {
        localStorage.setItem(key, JSON.stringify(value))
        //触发storage事件
        window.dispatchEvent(new StorageEvent('storage'))
    }
    return [res, updateStorage]

}