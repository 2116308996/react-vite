import home1route from "./modules/1home";
import home2route from "./modules/2home";
import Login from '../views/login';
import Home1to1 from "../views/1home/1home-1";
import Home3 from '../views/3home/index'
import Screen from '../views/4screen/index'
//import { createBrowserRouter } from "react-router-dom";
import { RouteItem } from './types';
//静态路由
const staticRouters :RouteItem[]= [
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
    },
    {
        path:'/mc',
        name:'鸣潮官网',
        element:<Home3></Home3>
    },
    {
        path:'/screen',
        name:'屏幕',
        element:<Screen></Screen>
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
const routes: RouteItem[] = [];
function RouteFilter(foldRoutes: RouteItem[]) {
    foldRoutes.forEach((route: RouteItem) => {
        if (route.children) {
            RouteFilter(route.children)
        }else{
            routes.push(route)
        }
    });
}
RouteFilter(foldRoutes);
//console.log(staticRouters, dynamicsRouters, foldRoutes,routes)
export  { staticRouters, dynamicsRouters, foldRoutes,routes };