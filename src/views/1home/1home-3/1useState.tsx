import { useState } from "react";
import { Button } from "tdesign-react";
function home() {
  const [str, setstr] = useState<string>("test");
  const [bool, setbool] = useState<boolean>(true);
  const [list, setlist] = useState<any[]>([1,2,3,4,5]);

  const [data,setData] = useState<any>(()=>{
    //数据初始化函数，只执行一次
    const date = new Date();
    //获取年月日
    var date2=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    return date2;
  });
  function change() {
    setbool(!bool)
    list.push(5);
    setlist(list);
    setstr(str+"1");//test13
    setstr(str+"12");//test13
    setstr(str+"13");//test13
    setstr(str=>str+"1");//test11
    setstr(str=>str+"1");//test111
  }
  return (
    <>
    <div>{str}</div>
      <div>{bool?"true":"false"}</div>
      <div>{list}</div>
      <div>{data}</div>
      <div><Button shape="rectangle"
        size="medium"
        type="button"
        variant="base" onClick={change}>更改值</Button></div>
    </>
  );
}
export default home