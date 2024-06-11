import { NavLink } from 'react-router-dom'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { buttonVariants } from '@/components/ui/button.tsx'
import { cn } from '@/lib/utils.ts'

const MainNavigation = () => {
  return (
    <header className="mb-14 flex justify-center pt-8">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                cn(buttonVariants({ variant: 'link' }), 'text-lg', {
                  'text-red-700': isActive,
                })
              }
            >
              Home
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                cn(buttonVariants({ variant: 'link' }), 'text-lg', {
                  'text-red-700': isActive,
                })
              }
            >
              Products
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

export default MainNavigation
