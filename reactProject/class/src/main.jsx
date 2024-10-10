import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Header from './Commons/Header.jsx';
import Footer from './Commons/Footer.jsx';
import Home from './Home.jsx';
import About from './Pages/About.jsx';
import HookExp from './Pages/HookExp.jsx';
import HookExp2 from './Pages/HookExp2.jsx';
import { createBrowserRouter,RouterProvider,Route,Link } from 'react-router-dom';

import './style/app.scss'
import StateExp from './Pages/StateExp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/hook",
    element: <HookExp />,
  },
  {
    path: "/hook2",
    element: <HookExp2 />,
  },
  {
    path: "/state",
    element: <StateExp />,
  },
]);

createRoot(document.getElementById('root')).render(
  <>
    <Header />
      <RouterProvider router={router} />
    <Footer />
  </>,
)
