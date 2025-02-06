import Index1 from './1home-7/1useDebugValue'
import Index1code from './1home-7/1useDebugValue?raw'
import Index2 from './1home-7/2useId'
import Index2code from './1home-7/2useId?raw'
import Index3 from './1home-7/3useWaterMark'
import Index3code from './1home-7/3useWaterMark?raw'
import Viewcode from '../../components/viewcode'
function home1to7(){
    return (
        <div>
            <h2>useDebugValue</h2>
            <h4>useDebugValue 是一个专为开发者调试自定义 Hook 而设计的 React Hook。它允许你在 React 开发者工具中为自定义 Hook 添加自定义的调试值。</h4>
            <Index1></Index1>
            <Viewcode el={Index1code}></Viewcode>

            <h2>useId</h2>
            <h4>useId 是 React 18 新增的一个 Hook，用于生成稳定的唯一标识符，主要用于解决 SSR 场景下的 ID 不一致问题，或者需要为组件生成唯一 ID 的场景。</h4>
            <h4>使用场景：1.为组件生成唯一 ID    2.解决 SSR 场景下的 ID 不一致问题    3.无障碍交互唯一ID</h4>
            <Index2></Index2>
            <Viewcode el={Index2code}></Viewcode>

            <h2>自定义hooks</h2>
            <Index3></Index3>
            <Viewcode el={Index3code}></Viewcode>
        </div>
    )
}
export default home1to7;
