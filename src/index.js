import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import ErrorPage from './routes/ErrorPage'
import Home from './routes/Home'
import Coordenadores from './routes/Coordenadores'
import Comite from './routes/Comite'
import Equipamentos from './routes/Equipamentos'
import Publicacoes from './routes/Publicacoes'
import Colaboradores from './routes/Colaboradores'
import Equipe from './routes/Equipe';
import Apoio from './routes/Apoio';

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "equipamentos",
    element: <Equipamentos />,
  }
])*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "coordenadores",
        element: <Coordenadores />,
      },
      {
        path: "comite",
        element: <Comite />,
      },
      {
        path: "equipe",
        element: <Equipe />,
      },
      {
        path: "equipamentos",
        element: <Equipamentos />,
      },
      {
        path: "publicacoes",
        element: <Publicacoes />,
      },
      {
        path: "colaboradores",
        element: <Colaboradores />,
      },
      {
        path: "apoios",
        element: <Apoio />,
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
