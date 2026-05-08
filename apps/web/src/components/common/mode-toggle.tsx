'use client'

import { Button, Dropdown, Label } from '@heroui/react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from '~/components/providers/theme-provider'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Dropdown>
      <Button variant="ghost" size="sm" isIconOnly aria-label="Toggle theme">
        <Sun className="h-[20px] w-[20px] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[20px] w-[20px] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu
          aria-label="Theme selection"
          onAction={key => setTheme(key as any)}
          selectedKeys={new Set([theme])}
          selectionMode="single"
        >
          <Dropdown.Item key="light" id="light" textValue="Light">
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4" />
              <Label>Light</Label>
            </div>
            <Dropdown.ItemIndicator />
          </Dropdown.Item>
          <Dropdown.Item key="dark" id="dark" textValue="Dark">
            <div className="flex items-center gap-2">
              <Moon className="h-4 w-4" />
              <Label>Dark</Label>
            </div>
            <Dropdown.ItemIndicator />
          </Dropdown.Item>
          <Dropdown.Item key="system" id="system" textValue="System">
            <div className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              <Label>System</Label>
            </div>
            <Dropdown.ItemIndicator />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  )
}
