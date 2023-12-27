'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function GridLine({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const cls = resolvedTheme === 'dark' ? 'gridLine-Dark' : 'gridLine-Light';
  return <div className={cls + ' ' + className ?? ''}></div>;
}

export default GridLine;
