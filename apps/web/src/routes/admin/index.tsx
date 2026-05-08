import { Card, Surface } from '@heroui/react'
import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'

export const Route = createFileRoute('/admin/')({
  component: AdminDashboard,
})

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted text-lg mt-1">Welcome back to the Scaffolder Control Center.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Shops', value: '1,284', change: '+12%', color: 'blue' },
          { label: 'Pending Updates', value: '43', change: '-5%', color: 'orange' },
          { label: 'Active Users', value: '8,921', change: '+18%', color: 'green' },
          { label: 'API Health', value: '99.9%', change: 'Stable', color: 'purple' },
        ].map((stat, i) => (
          <Card key={i} className="p-6" variant="secondary">
            <p className="text-sm font-medium text-muted">{stat.label}</p>
            <div className="flex items-baseline gap-2 mt-2">
              <h2 className="text-3xl font-bold">{stat.value}</h2>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                stat.color === 'green'
                  ? 'bg-green-100 text-green-700'
                  : stat.color === 'blue'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-orange-100 text-orange-700'
              }`}
              >
                {stat.change}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <Surface variant="secondary" className="p-8 rounded-3xl min-h-[300px] flex items-center justify-center border border-divider/50">
        <div className="text-center">
          <p className="text-muted italic text-lg">System analytics visualization coming soon...</p>
        </div>
      </Surface>
    </div>
  )
}
