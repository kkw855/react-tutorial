import { Link } from 'react-router-dom'

import { buttonVariants } from '@/components/ui/button.tsx'

const Home = () => {
  return (
    <main>
      <h1 className='text-3xl'>My Home Page</h1>
      <Link to='/products' className={buttonVariants({ variant: 'outline' })}>Go to products</Link>
    </main>
  )
}

export default Home
