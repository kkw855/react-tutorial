import { Outlet } from 'react-router-dom'

import MainNavigation from '@/components/MainNavigation.tsx'

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className='container'>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
