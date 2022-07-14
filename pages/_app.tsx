import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  if(isSSR) return null
  
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
