import { Link } from '@tanstack/react-router'
import { LocalizedLink } from '~/components/common/localized-link'

export function Footer() {
  return (
    <footer className="border-t border-divider/40 bg-background mt-auto">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="flex flex-col gap-8 py-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-3 max-w-xs">
            <LocalizedLink to="/" className="inline-flex items-center gap-2 font-semibold text-foreground">
              <span className="text-lg font-bold tracking-tight">TB2 Tabelog Buddy</span>
            </LocalizedLink>
            <p className="text-sm text-stone-500 leading-relaxed">
              Discover Japan's best restaurants without language barriers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="mb-3 text-xs font-semibold text-foreground uppercase tracking-wider">
                Discovery
              </h3>
              <ul className="space-y-2">
                <li><LocalizedLink to="/discovery" className="text-sm text-stone-500 hover:text-primary transition-colors">Map Search</LocalizedLink></li>
                <li><LocalizedLink to="/dashboard" className="text-sm text-stone-500 hover:text-primary transition-colors">My Favorites</LocalizedLink></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-semibold text-foreground uppercase tracking-wider">
                Account
              </h3>
              <ul className="space-y-2">
                <li><Link to="/auth/$pathname" params={{ pathname: 'sign-in' }} className="text-muted hover:text-primary transition-colors">Sign In</Link></li>
                <li><Link to="/auth/$pathname" params={{ pathname: 'sign-up' }} className="text-muted hover:text-primary transition-colors">Register</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px bg-divider/40" />

        <div className="flex flex-wrap items-center justify-between gap-4 py-5">
          <p className="text-xs text-stone-500">
            &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            TB2. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
