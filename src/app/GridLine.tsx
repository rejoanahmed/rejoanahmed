'use client'

import { useTheme } from 'next-themes'

function GridLine() {
  const { resolvedTheme } = useTheme()
  const className =
    resolvedTheme === 'dark' ? 'gridLine-Dark' : 'gridLine-Light'
  return <div className={className}></div>
}

export default GridLine
