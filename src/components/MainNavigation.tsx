import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button.tsx'
import { cn } from '@/lib/utils.ts'

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul className='flex flex-row justify-center items-center p-8'>
          <li>
            <Link to="/" className={cn(buttonVariants({ variant: 'link' }), 'text-lg text-yellow-500 p-4')}>Home</Link>
          </li>
          <li>
            <Link to="/products" className={cn(buttonVariants({ variant: 'link' }), 'text-lg text-yellow-500 p-4')}>Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
