import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {Home,About,Login,Register,Product,Landing,Error} from './pages'
import {loader as landingLoader} from './pages/Landing.tsx'
import {loader as productLoader} from './pages/Product.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        loader:landingLoader,
        element:<Landing/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/product/:id',
        loader:productLoader,
        element:<Product/>
      }
    ]
  },
  {
    path:'login',
    element:<Login/>,
    errorElement:<Error/>
  },
  {
    path:'register',
    element:<Register/>,
    errorElement:<Error/>
  }
])
const App = () => {
  return (
     <RouterProvider router={router}/>
  )
}
export default App