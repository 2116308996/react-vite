import Index1 from './1home-6/1useMemo'
import Index2 from './1home-6/2useCallback'
import Index1code from './1home-6/1useMemo?raw'
import Index2code from './1home-6/2useCallback?raw'
import Viewcode from '../../components/viewcode'
import Index3code from './1home-6/children1?raw'
import Index4code from './1home-6/apple?raw'
function home1to6() {
    return (
        <div>




            <h2>useMemo</h2>
            <h4>useMemo 是 React 提供的一个性能优化 Hook。它的主要功能是避免在每次渲染时执行复杂的计算和对象重建。通过记忆上一次的计算结果，仅当依赖项变化时才会重新计算，提高了性能，有点类似于Vue的computed</h4>

            <h3>React.memo</h3>
            <h4>首先明确 React 组件的渲染条件：
                &nbsp;&nbsp;&nbsp;1.组件的 props 发生变化
                &nbsp;&nbsp;&nbsp;2.组件的 state 发生变化
                &nbsp;&nbsp;&nbsp;3.useContext 发生变化</h4>

            <h4>React.memo 是一个 React API，用于优化性能。它通过记忆上一次的渲染结果，仅当 props 发生变化时才会重新渲染, 避免重新渲染。</h4>
            <Index1></Index1>
            <Viewcode el={Index1code} />
            <Viewcode el={Index3code} />
            <Viewcode el={Index4code} />

            <h2>useCallback</h2>
            <h4>useCallback useCallback 用于优化性能，返回一个记忆化的回调函数，可以减少不必要的重新渲染，也就是说它是用于缓存组件内的函数，避免函数的重复创建。</h4>
            <h4>在React中，函数组件的重新渲染会导致组件内的函数被重新创建，这可能会导致性能问题。useCallback 通过缓存函数，可以减少不必要的重新渲染，提高性能。</h4>
            <Index2></Index2>
            <Viewcode el={Index2code} />
        </div>
    )
}
export default home1to6;
