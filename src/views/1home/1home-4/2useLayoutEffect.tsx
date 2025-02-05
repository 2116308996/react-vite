import React, { useLayoutEffect, useEffect, useState } from 'react';
import './index.css'
function App() {
    const [count, setCount] = useState(0)
    //不阻塞DOM
    //    useEffect(() => {
    //       for (let i = 0; i < 50000; i++) {
    //          //console.log(i);
    //          setCount(count => count + 1)
    //       }
    //    }, []);
    //阻塞DOM
    // useLayoutEffect(() => {
    //    for (let i = 0; i < 50000; i++) {
    //       //console.log(i);
    //       setCount(count => count + 1)
    //    }
    // }, []);
    // 使用 useEffect 实现动画效果
    useEffect(() => {
        const app1 = document.getElementById('app1') as HTMLDivElement;
        app1.style.transition = 'opacity 3s';
        app1.style.opacity = '1';
    }, []);

    // 使用 useLayoutEffect 实现动画效果
    useLayoutEffect(() => {
        const app2 = document.getElementById('app2') as HTMLDivElement;
        app2.style.transition = 'opacity 3s';
        app2.style.opacity = '1';

    }, []);
    const scorllHandler=(e:React.UIEvent<HTMLDivElement>)=>{
        const scrolltop=e.currentTarget.scrollTop
        window.history.replaceState({},"",`?top=${scrolltop}`)
    }
    useLayoutEffect(()=>{
        const container=document.getElementById('container') as HTMLDivElement
        const top=window.location.search.split('=')[1]
        container.scrollTop=parseInt(top)
    })
    return (
        <div>
            <div>app </div>
            <div id="app1"  style={{ opacity: 0 }}>app1</div>
            <div id="app2"  style={{ opacity: 0 }}>app2</div>
            {
                Array.from({ length: count }).map((_, index) => (
                    <div key={index}>{index}</div>
                ))
            }
            <div id='container' onScroll={scorllHandler} style={{height:'300px',overflow:'auto',width:'100px'}}>
                {Array.from({length:500}).map((item,index)=>{
                    return <div key={index}>{index+1}</div>
                })}
            </div>
        </div>
    );
}

export default App;