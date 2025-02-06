import Index1 from './1home-6/1useMemo'
import Index2 from './1home-6/2useCallback'
import Index1code from './1home-6/1useMemo?raw'
import Index2code from './1home-6/2useCallback?raw'
import Viewcode from '../../components/viewcode'

function home1to6(){
    return (
        <div>


            <h2>useDeferredValue</h2>
            <h4>useMemo 是 React 提供的一个性能优化 Hook。它的主要功能是避免在每次渲染时执行复杂的计算和对象重建。通过记忆上一次的计算结果，仅当依赖项变化时才会重新计算，提高了性能，有点类似于Vue的computed</h4>
            <Index1></Index1>
            <Viewcode el={Index1code}/>
        </div>
    )
}
export default home1to6;
