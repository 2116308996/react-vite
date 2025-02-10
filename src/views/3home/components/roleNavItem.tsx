
import swiperNavigationImg from "../data/swiperNavigationImg";
interface PropsType {
    name?: string,
    headSrc?: string,
    englishName?: string,
    cv?:string,
    audioSrc?:string,
    roleVideoSrc?:string,
    attr?:string,
    content?:string
}


const RoleNavItem = ({props,active}: {props:PropsType,active:boolean}) => {
  //  console.log(swiperNavigationImg)
    return (
        <div className={'role-nav-item '+(active ? 'active' : '')}>
            <img src={props.headSrc} alt="" style={{position:'absolute',top:'0',left:'0',transform:'translate(3rem,-1rem)',width:'16rem',height:'16rem'}}/>
            <div className="nav-name-box">
                <div className="left">
                    <img src={swiperNavigationImg[2]} alt="" />
                </div>
                <div className="center">
                    <div>{props.name}</div>
                    <div>{props.englishName}</div>
                </div>
                <div className="right">
                    <img src={swiperNavigationImg[3]} alt="" />
                </div>
            </div>
        </div>
    )

}
export default RoleNavItem
