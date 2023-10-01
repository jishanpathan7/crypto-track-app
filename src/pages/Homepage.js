//* Packages Imports */
import { Suspense,lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

//* Components Imports */
import Banner from '../component/Banner/Banner'
import ErrorFallback from '../component/ErrorBoundary'

//* Lazy Imports */
const CoinsTabe = lazy(() => import("../component/CoinsTabe"))

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