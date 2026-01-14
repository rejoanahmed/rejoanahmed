import { Moon, Sun } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Button } from '@rex/ui/components/button'
import { useTheme } from '@/components/theme-provider'

export function ThemeToggle() {
  const theme = useTheme()
  return (
    <Button
      onClick={() => theme.setTheme(theme.theme === 'light' ? 'dark' : 'light')}
      size="sm"
      variant="ghost"
    >
      <HugeiconsIcon
        className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        icon={Sun}
      />
      <HugeiconsIcon
        className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        icon={Moon}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
