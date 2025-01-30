import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'tdesign-react/es/style/index.css';
import Menu from './cmpontents/menu';
import { dynamicsRouters, foldRoutes, routes } from './router/router';
import { Routes, Route, Router, useNavigate, useLocation, createBrowserRouter, RouterProvider } from "react-router-dom";

import * as allRouter from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)
  // const userouter = createBrowserRouter(routes);
   console.log("aa", useLocation())
  return (
    <>
      <Menu>
      </Menu>
      {/* <RouterProvider router={userouter}>
      </RouterProvider> */}
      <Routes>
        {routes.map((route: any, index: number) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  )
}

export default App
