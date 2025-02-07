import { useState } from "react";
const APP=()=>{
    return (
        <div>
            <h2>React 受控组件 </h2>
            <h4>受控组件一般是指表单元素，表单的数据由React的 State 管理，更新数据时，需要手动调用setState()方法，更新数据。因为React没有类似于Vue的v-model，所以需要自己实现绑定事件</h4>
        </div>
    )
}
export default APP;
