import home1route from "./modules/1home";
import home2route from "./modules/2home";
import Login from '../views/login';
import Home1to1 from "../views/1home/1home-1";
import { createBrowserRouter } from "react-router-dom";
//静态路由
const staticRouters = [
    {
        path: '/',
        name: '首页',
        meta: {
            showMenu: true,
        },
        element: <Home1to1 />
    },
    {
        path: '/login',
        name: '登录',
        meta: {
            showMenu: false,
        },
        element: <Login />
    }
]
//动态路由
const dynamicsRouters = [
    home1route,
    home2route
]
//路由折叠
const foldRoutes = [...staticRouters, ...dynamicsRouters]
//路由平铺
const routes: any = [];
function RouteFilter(foldRoutes: any[]) {
    foldRoutes.forEach((route: any) => {
        
        if (route.children) {
            RouteFilter(route.children)
        }else{
            routes.push(route)
        }
    });
}
RouteFilter(foldRoutes);
console.log(staticRouters, dynamicsRouters, foldRoutes,routes)
export  { staticRouters, dynamicsRouters, foldRoutes,routes };