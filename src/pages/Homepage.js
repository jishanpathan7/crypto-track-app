import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Banner from '../component/Banner/Banner'
import ErrorFallback from '../component/ErrorBoundary'

const CoinsTabe = React.lazy(() => import("../component/CoinsTabe"))
const Homepage = () => {
  return (
    <>
    <Banner/>
    <ErrorBoundary FallbackComponent={ErrorFallback}
    onReset={() => {}}
    >
    <Suspense fallback= {<div>
      Loadng...
    </div>}>
    <CoinsTabe/>
    </Suspense>
    </ErrorBoundary>
  
    </>
  )
}

export default Homepage