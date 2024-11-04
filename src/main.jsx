import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import {route} from '../src/Router/route.jsx'
import { Provider } from 'react-redux'
import { store } from './utils/Store/Store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={route} />
    </Provider>
  </StrictMode>,
)
