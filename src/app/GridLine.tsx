'use client'

import { useTheme } from 'next-themes'

function GridLine({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const cls = resolvedTheme === 'dark' ? 'gridLine-Dark' : 'gridLine-Light'
  return <div className={cls + ' ' + className}></div>
}

export default GridLine
