import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import LoginComponent from './components/Login.jsx'
import RegisterComponent from './components/Register.jsx'
import { Provider } from 'react-redux'
import store from './reduxStore/store.js'

const router = createBrowserRouter(
  [
    {
      path: '/', element: <App />,
      children:[
        {
          path: '/', element: <Home />
        },
        {
          path: '/login', element: <LoginComponent />
        },
        {
          path: '/register', element: <RegisterComponent />
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
