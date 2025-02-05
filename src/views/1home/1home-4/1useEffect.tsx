import { useEffect, useState } from "react"
import { Button } from "tdesign-react"
export default function useEffectFun() {
    type objType = {
        name: string,
        age: number,
        sex: string
    }
    let obj:objType={
        name: '张三',
        age: 18,
        sex: '男'
    }
    //副作用函数   改变了外部obj
    const changeObj = (): objType => {
        obj.name = '李四'
        obj.age = 20
        obj.sex = '女'
        return obj
    }
    //无副作用函数
    const changeObj2 = (): objType => {
        //深拷贝
        const newObj = window.structuredClone(obj)
        newObj.name = '王五'
        return newObj
    }
   
    const [count, setCount] = useState(0)
    useEffect(() => {
        let timer=setTimeout(() => {
            fetch('https://message163.github.io/react-docs/hooks/useEffect.html').then(res => {
                console.log('res', res)
            })
        }, 1000);
        
        //在严格模式下，会输出两次
        // <React.StrictMode>  删除这行取消严格模式
        console.log('组件挂载,页面更新。')
        return ()=>{
            //实现防抖
            clearTimeout(timer)
            //当name值发生改变时，useEffect的副作用函数就会执行，并且会开启一个定时器，当name值再次发生改变时，useEffect的副作用函数就会执行清理函数，
            console.log('组件卸载,清理函数')
        }
    })
    
    return <div>
        <div>{'count:' + count}</div>

        <div>{'obj:' + JSON.stringify(obj)}</div>
        <Button style={{ marginRight: '10px' }} onClick={() => setCount(count + 1)}>点击</Button>
        <Button style={{ marginRight: '10px' }} onClick={() => changeObj()}>改变obj</Button>
        <Button style={{ marginRight: '10px' }} onClick={() => changeObj2()}>改变obj2</Button>
    </div>



}

