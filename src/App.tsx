import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'tdesign-react/es/style/index.css';
import { MessagePlugin } from 'tdesign-react';
import Menu from './components/menu';
import { dynamicsRouters, foldRoutes, routes } from './router/router';
import { Routes, Route, Router, useNavigate, useLocation, createBrowserRouter, RouterProvider } from "react-router-dom";
window.MessagePlugin = MessagePlugin
declare global {
  interface Window {
    MessagePlugin: typeof MessagePlugin;
  }
}
function App() {
 
  // const userouter = createBrowserRouter(routes);
 // console.log("aa", useLocation())

  return (
    <>
      <Menu>
      </Menu>
      {/* <RouterProvider router={userouter}>
      </RouterProvider> */}
      <div style={{  paddingLeft: '10px',paddingRight:'10px' }}>
        <Routes>
          {routes.map((route: any, index: number) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </>
  )
}

export default App
