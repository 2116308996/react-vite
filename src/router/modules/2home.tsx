import Home2to1 from "../../views/2home/2home-1";
import Home2to2 from "../../views/2home/2home-2";
import Home2to3 from "../../views/2home/2home-3";
import Home2to4 from "../../views/2home/2home-4";

import RouterAuth from '../routerAuth';
const home1route = {
    path: '/2home/1home',
    name: 'React组件',
    children: [
        {
            path: '/2home/1home',
            name: "组件通信",
            element: <RouterAuth><Home2to1 /></RouterAuth>
        },
        {
            path: '/2home/2home',
            name: "受控组件",
            element: <RouterAuth><Home2to2 /></RouterAuth>
        },
        {
            path: '/2home/3home',
            name: "传送组件",
            element: <RouterAuth><Home2to3 /></RouterAuth>
        },
        {
            path: '/2home/4home',
            name: "异步组件",
            element: <RouterAuth><Home2to4 /></RouterAuth>
        }
    ]
};
export default home1route
