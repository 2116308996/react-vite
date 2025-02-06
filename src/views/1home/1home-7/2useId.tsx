import { useState,useDebugValue,useId } from "react";
const App=()=>{
    const id = useId()
  return (<>
  <div>111</div>
  <div><label htmlFor={id}>请输入：</label><input id={id} type="text" aria-describedby={id}/></div>
  <p id={id}>请输入有效的电子邮件地址，例如：xiaoman@example.com</p>
  </>)

}
export default App