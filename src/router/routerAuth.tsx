import { Navigate } from "react-router-dom";
const getToken=()=>{
    //判断token是否正确
    return true
}
function RouterAuth(el:any){
  const token=getToken()
  if(token){
    return (<div style={{  paddingLeft: '10px',paddingRight:'10px',width:'60%',margin:'0 auto',backgroundColor:'white' }}>{el.children}</div>)
  }else{
    return <Navigate to="/login"></Navigate>
  }
}
export default RouterAuth