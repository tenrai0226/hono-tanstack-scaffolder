import { Spinner } from '@heroui/react'
import { useTranslations } from 'use-intl'
import { IntlProvider } from '../providers/intl-provider'

function DefaultPendingBase() {
  const t = useTranslations()

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] w-full p-8 text-center gap-4">
      <Spinner size="lg" />
      <h2 className="text-xl font-bold mt-4">Loading...</h2>
      <p className="text-stone-500 max-w-md">Please wait while we prepare your content.</p>
    </div>
  )
}

export function DefaultPending() {
  return (
    <IntlProvider>
      <DefaultPendingBase />
    </IntlProvider>
  )
}
