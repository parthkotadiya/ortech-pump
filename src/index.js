import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './about';
import Ortech from './parth';
import Contact from './contactus';
import Product from './product';
import Application from './application';
import Header from './header';
import Footer from './footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router= createBrowserRouter(
[{
  path: "/",
  element: <App />,
},
{
  path:"/parth",
  element:<Ortech/>
}
,{
  path:"/About",
  element:<About/>
},
{
  path:"/contactus",
  element:<Contact/>
},
{
  path:"/product",
  element:<Product/>
},
{
  path:"/application",
  element:<Application/>
},
{
  path:"header",
  element:<Header/>
},
{
  path:"/footer",
  element:<Footer/>

}


]

)

root.render(

  <React.StrictMode>
<RouterProvider router={router}>
<App/>
</RouterProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
