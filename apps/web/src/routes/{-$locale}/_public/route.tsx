import { createFileRoute, Outlet } from '@tanstack/react-router'
import * as React from 'react'
import { PublicLayout } from '~/components/layout/public-layout'

export const Route = createFileRoute('/{-$locale}/_public')({
  component: PublicLayoutRoute,
})

function PublicLayoutRoute() {
  return (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  )
}
