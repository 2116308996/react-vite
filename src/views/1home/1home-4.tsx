import Index1 from "./1home-4/1useEffect";
import Indexcode1 from "./1home-4/1useEffect?raw";
import Viewcode from "../../cmpontents/viewcode";
import Eg from './1home-4/1eg'
import Egcode from './1home-4/1eg?raw'
import Index2 from './1home-4/2useLayoutEffect'
import Indexcode2 from './1home-4/2useLayoutEffect?raw'
function home1to4() {
    return (
        <div>

            <h2>useDeferredValue</h2>
            <h3>页面挂载时执行,组件更新时执行</h3>
            <Index1></Index1>
            <Viewcode el={Indexcode1}></Viewcode>

            <Eg></Eg>
            <Viewcode el={Egcode}></Viewcode>

            <h2>useLayoutEffect</h2>
            <h3>useLayoutEffect 是 React 中的一个 Hook，用于在浏览器重新绘制屏幕之前触发。与 useEffect 类似。</h3>
            <h4>useLayoutEffect:浏览器完成布局和绘制之前执行副作用,同步执行,阻塞DOM渲染</h4>
            <h4>useEffect:浏览器完成布局和绘制之后执行副作用,异步执行,不阻塞DOM渲染</h4>
            <Index2></Index2>
            <Viewcode el={Indexcode2}></Viewcode>
        </div>
    )
}
export default home1to4;
