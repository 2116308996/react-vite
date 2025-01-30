import { Navigate } from "react-router-dom";
const getToken=()=>{
    //判断token是否正确
    return true
}
function RouterAuth(el:any){
  const token=getToken()
  if(token){
    return (<>{el.children}</>)
  }else{
    return <Navigate to="/login"></Navigate>
  }
}
export default RouterAuth