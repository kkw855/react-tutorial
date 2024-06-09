import MainNavigation from '@/components/MainNavigation.tsx'

const ErrorPage = () => {
  return (
    <main>
      <MainNavigation />
      <main className='text-center space-y-3'>
        <h1 className='text-3xl font-bold'>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </main>
  )
}

export default ErrorPage
