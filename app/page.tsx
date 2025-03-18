import LoadingContainer from '@/components/global/LoadingContainer'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero'
import React, { Suspense } from 'react'

// import { Button } from '@/components/ui/button'

function HomePage() {
  return (
    <>
      {/* <h1 className="text-3xl">HomePage</h1> */}
      {/* <Button variant="secondary" size="lg" className="capitalize m-8">
        Click me
      </Button> */}

      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  )
}

export default HomePage
