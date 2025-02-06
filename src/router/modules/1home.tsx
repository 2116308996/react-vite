import Home1to1 from "../../views/1home/1home-1";
import Home1to2 from "../../views/1home/1home-2";
import Home1to3 from "../../views/1home/1home-3";
import Home1to4 from "../../views/1home/1home-4";
import Home1to5 from "../../views/1home/1home-5";
import Home1to6 from "../../views/1home/1home-6";
import Home1to7 from "../../views/1home/1home-7";

import RouterAuth from '../routerAuth';
const home1route = {
    path: '/1home/1home',
    name: 'ReactHooks',
    children: [
        {
            path: '/1home/1home',
            name: "基础篇",
            element: <RouterAuth><Home1to1 /></RouterAuth>
        },
        {
            path: '/1home/2home',
            name: "工具篇",
            element: <Home1to2 />
        },
        {
            path: '/1home/3home',
            name: "数据驱动hooks",
            element: <Home1to3 />
        },
        {
            path: '/1home/4home',
            name: "副作用hooks",
            element: <Home1to4 />
        },
        {
            path: '/1home/5home',
            name: "状态传递hooks",
            element: <Home1to5 />
        },
        {
            path: '/1home/6home',
            name: "状态派生hooks",
            element: <Home1to6 />
        },
        {
            path: '/1home/7home',
            name: "工具hooks",
            element: <Home1to7 />
        }
    ]
};
export default home1route
