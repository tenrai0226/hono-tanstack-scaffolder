import { Button, Dropdown, Label } from '@heroui/react'
import { Globe } from 'lucide-react'
import { useLocale } from 'use-intl'
import { setLocaleCookie } from '~/lib/i18n/client'
import { defaultLocale, type Locale, localeNames, supportedLocales } from '~/lib/i18n/shared'

export function LocaleSwitcher() {
  const currentLocale = useLocale() as Locale

  const handleAction = (key: React.Key) => {
    const locale = key as Locale
    setLocaleCookie(locale)

    const newLocalePath = locale === defaultLocale ? '' : `/${locale}`
    const currentPath = window.location.pathname
    const regex = new RegExp(`^/(${supportedLocales.join('|')})`)
    let pathWithoutLocale = currentPath.replace(regex, '')
    if (!pathWithoutLocale.startsWith('/'))
      pathWithoutLocale = `/${pathWithoutLocale}`

    if (pathWithoutLocale.startsWith('/auth')) {
      window.location.reload()
      return
    }

    const newPath = `${newLocalePath}${pathWithoutLocale === '/' && newLocalePath !== '' ? '' : pathWithoutLocale}`
    window.location.href = newPath + window.location.search + window.location.hash
  }

  return (
    <Dropdown>
      <Button variant="ghost" size="sm" isIconOnly>
        <Globe className="w-5 h-5" />
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu
          aria-label="Language selection"
          onAction={handleAction}
          selectedKeys={new Set([currentLocale])}
          selectionMode="single"
        >
          {supportedLocales.map(locale => (
            <Dropdown.Item key={locale} id={locale} textValue={localeNames[locale as Locale]}>
              <Label>{localeNames[locale as Locale]}</Label>
              <Dropdown.ItemIndicator />
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  )
}
