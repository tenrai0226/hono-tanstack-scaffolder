import { Breadcrumbs, Button, ListBox, Surface } from '@heroui/react'
import { Link, Outlet, useLocation, useNavigate } from '@tanstack/react-router'
import {
  Archive,
  Globe,
  LayoutDashboard,
  LogOut,
  MapPin,
  Menu,
  Settings,
  Store,
  Users,
} from 'lucide-react'
import * as React from 'react'
import { useSession } from '~/hooks/use-session'
import { authClient } from '~/utils/auth'

export function AdminLayout({ children }: { children?: React.ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { data: session } = useSession()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
    { id: 'regions', label: 'Regions', icon: MapPin, href: '/admin/regions' },
  ]

  const handleLogout = async () => {
    await authClient.signOut()
    navigate({ to: '/dashboard' })
  }

  // 计算当前选中的 Key
  const activeKey = menuItems.find(item => location.pathname === item.href)?.id || 'dashboard'

  return (
    <div className="flex min-h-screen bg-background">
      {/* 侧边栏 - 桌面端 */}
      <Surface variant="default" className="hidden lg:flex flex-col w-64 border-r border-divider sticky top-0 h-screen">
        <div className="p-6">
          <Link to="/dashboard" className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
            <span className="text-primary">Scaffolder</span>
            {' '}
            Admin
          </Link>
        </div>

        <div className="flex-1 px-4 overflow-y-auto">
          <ListBox
            aria-label="Admin Navigation"
            selectionMode="single"
            selectedKeys={new Set([activeKey])}
            onAction={(key) => {
              const item = menuItems.find(i => i.id === key)
              if (item)
                navigate({ to: item.href as any })
            }}
          >
            {menuItems.map(item => (
              <ListBox.Item id={item.id} key={item.id} textValue={item.label} className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <item.icon className="size-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
              </ListBox.Item>
            ))}
          </ListBox>
        </div>

        <div className="p-4 border-t border-divider flex flex-col gap-2">
          <div className="flex items-center gap-3 px-2 mb-2">
            <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              {session?.user?.name?.[0] || 'A'}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold truncate">{session?.user?.name}</span>
              <span className="text-xs text-muted truncate">{session?.user?.email}</span>
            </div>
          </div>
          <Button variant="ghost" className="w-full justify-start text-danger hover:bg-danger/10" onPress={handleLogout}>
            <LogOut className="size-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </Surface>

      {/* 主体内容 */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-divider flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40 bg-background/80 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <Button variant="ghost" isIconOnly className="lg:hidden" onPress={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu />
            </Button>
            <Breadcrumbs className="hidden sm:flex">
              <Breadcrumbs.Item href="/admin">Admin</Breadcrumbs.Item>
              <Breadcrumbs.Item>{menuItems.find(i => i.href === location.pathname)?.label || 'Dashboard'}</Breadcrumbs.Item>
            </Breadcrumbs>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" isIconOnly>
              <Settings className="size-5" />
            </Button>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-8 overflow-x-hidden">
          <React.Suspense fallback={<div className="flex items-center justify-center h-full">Loading...</div>}>
            {children ?? <Outlet />}
          </React.Suspense>
        </main>
      </div>
    </div>
  )
}
