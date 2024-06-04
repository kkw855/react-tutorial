import { ChevronRightIcon, EnvelopeOpenIcon, ReloadIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button.tsx'
import { Link } from 'react-router-dom'

const ButtonPage = () => {
  return (
    <main>
      <div className="mt-2 flex flex-wrap justify-center gap-2">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <ChevronRightIcon />
        <Button variant="outline" size="icon">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
        <Button>
          <EnvelopeOpenIcon className='h-4 w-4 mr-2'/>Login with Email
        </Button>
        <Button disabled>
          <ReloadIcon className='mr-2 h-4 w-4 animate-spin'/>Please wait
        </Button>
        <Button asChild>
          <Link to='/login'>Login</Link>
        </Button>
      </div>
    </main>
  )
}

export default ButtonPage
