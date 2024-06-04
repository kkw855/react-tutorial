import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '@pages/Home.tsx'
import Products from '@pages/Products.tsx'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
