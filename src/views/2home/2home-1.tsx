import { useState } from "react";
import Index1 from './2home-1/index'
import Indexcode1 from './2home-1/index?raw'
import Index1com1 from './2home-1/components/parent?raw'
import Index1com2 from './2home-1/components/parent2?raw'
import Viewcode from '../../components/viewcode'
const APP=()=>{
    return (
        <div>
            <h2>组件通讯</h2>
            <Index1></Index1>
            <Viewcode el={Indexcode1}></Viewcode>
            <Viewcode el={Index1com1}></Viewcode>
            <Viewcode el={Index1com2}></Viewcode>
        </div>
    )
}
export default APP;
