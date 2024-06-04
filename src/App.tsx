import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import '@/App.css'
import Home from '@pages/Home.tsx'

const router = createBrowserRouter([{ path: '/', element: <Home /> }])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
