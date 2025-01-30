import { Fragment, useState } from 'react';
import { Menu, Button, Switch } from 'tdesign-react';
import { SearchIcon, MailIcon, UserIcon, EllipsisIcon, Icon } from 'tdesign-icons-react';
import type { MenuValue } from 'tdesign-react';
import { Routes, Route,useNavigate,useLocation,createBrowserRouter,RouterProvider } from "react-router-dom";
import { dynamicsRouters,foldRoutes, routes } from '../router/router';
const { HeadMenu, SubMenu, MenuItem } = Menu;

function Double() {
  
  const [active, setActive] = useState<MenuValue>('/1home/1home');
  const [checked, setChecked] = useState(false);
  const navigate=useNavigate();
  const onChange = (value: boolean) => {
    console.log('value', value);
    setChecked(value);
    value ? document.documentElement.setAttribute('theme-mode', 'dark') :
      document.documentElement.removeAttribute('theme-mode');
  };
  console.log(useLocation())
  function onclick(v:any){
    console.log(v)
    setActive(v)
    navigate(v)
  }
  //brightness-1 brightness
  const operations = () => (
    <div className="tdesign-demo-menu__operations">
      <Button variant="text" shape="square" icon={<SearchIcon />} />
      <Button variant="text" shape="square" icon={<MailIcon />} />
      <Button variant="text" shape="square" icon={<UserIcon />} />
      <Button variant="text" shape="square" icon={<EllipsisIcon />} />
      <Switch size="medium" value={checked} onChange={onChange} label={[<Icon name="brightness-1" />, <Icon name="brightness" />]} />
    </div>
  );
  return (
    <Fragment>
      <HeadMenu
        value={active}
        onChange={(v) => onclick(v)}
        logo={<img src="https://tdesign.gtimg.com/site/baseLogo-light.png" height="28" alt="logo" />}
        style={{ marginBottom: 0, width: '100%' }}
        operations={operations()}
      >
        {dynamicsRouters.map((router: any) => (
          <SubMenu  key={router.path} value={router.path} title={router.name}>
            {router.children.map((routerChildren: any) => (
              <MenuItem onClick={(v)=>(v)} target='_blank' href='http://localhost:5173/1home/1home' key={routerChildren.path} value={routerChildren.path}>{routerChildren.name}</MenuItem>
            ))}
          </SubMenu>
        ))}
        
      </HeadMenu>
      
      
    </Fragment>
  );
}

export default Double;
