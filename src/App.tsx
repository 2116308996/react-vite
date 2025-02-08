import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'tdesign-react/es/style/index.css';
import { MessagePlugin } from 'tdesign-react';
import Menu from './components/menu';
import { staticRouters, routes } from './router/router';
import { Routes, Route, useLocation, createBrowserRouter, RouterProvider } from "react-router-dom";
window.MessagePlugin = MessagePlugin
declare global {
  interface Window {
    MessagePlugin: typeof MessagePlugin;
  }
}
function App() {
  const mylocation=useLocation()
  console.log(mylocation.pathname,staticRouters)
  // const userouter = createBrowserRouter(routes);
  return (
    <>
      <Menu>
      </Menu>
      {/* <RouterProvider router={userouter}>
      </RouterProvider> */}
      <div>
        <Routes>
          {routes.map((route: any, index: number) => (
            <Route key={index} path={route.path} element={route.element}/>
          ))}
        </Routes>
      </div>
    </>
  )
}

export default App
