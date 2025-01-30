import Home1to1 from "../../views/1home/1home-1";
import Home1to2 from "../../views/1home/1home-2";
import RouterAuth from '../routerAuth';
const home1route = {
    path: '/1home/1home',
    name: 'React',
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
        }
    ]
};
export default home1route
