import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home/Home'
import Page from '../components/Page1/Page'
import App from '../App'
export const route = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
           { path:'/',
             element:<Home />
           },
           {
             path:"/page2",
             element:<Page />,
           }
        ],
    },
    
])