import Index1 from './1home-3/1useState';
import Indexcode1 from './1home-3/1useState?raw';
import Index2 from './1home-3/2useReducer';
import Indexcode2 from './1home-3/2useReducer?raw';
import Viewcode from '../../cmpontents/viewcode';   
import Index3 from './1home-3/3useSyncExternalStore';
import Indexcode3 from './1home-3/3useSyncExternalStore?raw';
import  useHistory  from '../../hooks/useHistory?raw';
import  useStorage  from '../../hooks/useStorage?raw';
import Index4 from './1home-3/4useTransition';
import Indexcode4 from './1home-3/4useTransition?raw';
import Index5 from './1home-3/5useDeferredValue';
import Indexcode5 from './1home-3/5useDeferredValue?raw';

function home1to3(){
    return (
        <>
        <h2>useState</h2>
        <h3>调用 set 函数更新 state 将会重新渲染组件</h3>
        <h3>当我们多次以相同的操作更新状态时，React 会进行比较，如果值相同，则会屏蔽后续的更新行为。自带防抖的功能，防止频繁的更新。</h3>
        <Index1></Index1>
        <Viewcode el={Indexcode1}></Viewcode>

        <h2>useReducer</h2>
        <h3>useReducer 是 useState 的替代方案，用于管理复杂的状态逻辑。</h3>
        <Index2></Index2>
        <Viewcode el={Indexcode2}></Viewcode>

        <h2>useSyncExternalStore</h2>
        <h3>用于从外部存储（例如状态管理库、浏览器 API 等）获取状态并在组件中同步显示。</h3>
        <Index3></Index3>
        <Viewcode el={useHistory}></Viewcode>
        <Viewcode el={useStorage}></Viewcode>
        <Viewcode el={Indexcode3}></Viewcode>

        <h2>useTransition</h2>
        <h4>useTransition 是 React 18 中引入的一个 Hook，用于管理 UI 中的过渡状态，特别是在处理长时间运行的状态更新时。它允许你将某些更新标记为“过渡”状态，这样 React 可以优先处理更重要的更新，比如用户输入，同时延迟处理过渡更新。</h4>
        <Index4></Index4>
        <Viewcode el={Indexcode4}></Viewcode>

        <h2>useDeferredValue</h2>
        <h4>useDeferredValue 用于延迟某些状态的更新，直到主渲染任务完成。这对于高频更新的内容（如输入框、滚动等）非常有用，可以让 UI 更加流畅，避免由于频繁更新而导致的性能问题。</h4>
        <Index5></Index5>
        <Viewcode el={Indexcode5}></Viewcode>
        </>

    )
}
export default home1to3