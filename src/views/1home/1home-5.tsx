import Viewcode from '../../components/viewcode'
import Index1 from "./1home-5/1useRef";
import Index1code from "./1home-5/1useRef?raw";
import Index2 from "./1home-5/2useImperativeHandle";
import Index2code from "./1home-5/2useImperativeHandle?raw";
import Index3 from "./1home-5/3useContent";
import Index3code from "./1home-5/3useContent?raw";
import Index4code from './1home-5/3parent?raw'
import Index5code from './1home-5/3child1?raw'
import Index6code from './1home-5/3child2?raw'
import TScode from './1home-5/context?raw'
import { useRef } from 'react';

function home1to5(){
    interface ChildHandles {
        handleClick: () => void;
    }
    const divImpRef=useRef<ChildHandles>(null)
    const getChild=()=>{
        divImpRef.current?.handleClick();

          console.log(divImpRef.current)
    }
    return (
        <div>

            <h2>useRef</h2>
            <h4>等useState的 SetCount执行之后，组件会重新rerender</h4>
            <h4>当你在React中需要处理DOM元素或需要在组件渲染之间保持持久性数据时，便可以使用useRef。</h4>
            <Index1></Index1>
            <Viewcode el={Index1code}></Viewcode>

            <h2>useImperativeHandle</h2>
            <h4>可以在子组件内部暴露给父组件句柄，那么说人话就是，父组件可以调用子组件的方法，或者访问子组件的属性。 如果你学过Vue，就类似于Vue的defineExpose。</h4>
            <Index2 ref={divImpRef}></Index2>
            <div>
                <button onClick={getChild}>获取子组件</button>
            </div>
            <Viewcode el={Index2code}></Viewcode>

            <h2>useContent</h2>
            <h4>useContext 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。设计的目的就是解决组件树间数据传递的问题。</h4>
            <Index3></Index3>
            <Viewcode el={Index3code}></Viewcode>
            <Viewcode el={TScode}></Viewcode>
            <Viewcode el={Index4code}></Viewcode>
            <Viewcode el={Index5code}></Viewcode>
            <Viewcode el={Index6code}></Viewcode>
        </div>
    )
}

export default home1to5;
