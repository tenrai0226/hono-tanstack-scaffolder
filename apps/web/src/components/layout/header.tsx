import { Button, Surface } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import * as React from 'react'
import { LocaleSwitcher } from '~/components/common/locale-switcher'
import { LocalizedLink } from '~/components/common/localized-link'
import { ModeToggle } from '~/components/common/mode-toggle'
import { createSessionQuery } from '~/lib/session-query'

export function Header() {
  const { data } = useQuery(createSessionQuery())
  const isLoggedIn = !!data?.session

  return (
    <Surface variant="default" className="sticky top-0 z-50 w-full border-b border-divider/50 backdrop-blur-md bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-6">
          <LocalizedLink to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <span className="text-primary text-2xl">⚡️</span>
            <span>Scaffolder</span>
          </LocalizedLink>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            {isLoggedIn && (
              <LocalizedLink to="/admin" className="hover:text-primary transition-colors">Admin Panel</LocalizedLink>
            )}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <ModeToggle />
          <LocaleSwitcher />
          {isLoggedIn
            ? (
                <LocalizedLink to="/dashboard">
                  <Button size="sm">Dashboard</Button>
                </LocalizedLink>
              )
            : (
                <>
                  <Link to="/auth/$pathname" params={{ pathname: 'sign-in' }}>
                    <Button variant="ghost">Sign In</Button>
                  </Link>
                  <Link to="/auth/$pathname" params={{ pathname: 'sign-up' }}>
                    <Button size="sm">Join Now</Button>
                  </Link>
                </>
              )}
        </div>
      </div>
    </Surface>
  )
}
