import type { Locale } from '~/lib/i18n/shared'

interface PageMeta {
  title: string
  description: string
}

type PageMetaMap = Record<Locale, PageMeta>

export const PAGE_META: Record<string, PageMetaMap> = {
  '/': {
    'zh-CN': {
      title: 'TB2 Discovery — 日本百名店餐厅发现与 AI 预订',
      description: '探索日本顶级 100 餐厅，支持多语言地图发现与 AI 智能预订助手。',
    },
    'zh-TW': {
      title: 'TB2 Discovery — 日本百名店餐廳發現與 AI 預訂',
      description: '探索日本頂級 100 餐廳，支持多語言地圖發現與 AI 智能預訂助手。',
    },
    'en': {
      title: 'TB2 Discovery — Japan Top 100 Restaurants & AI Booking',
      description: 'Discover curated Japan Hyakumeiten restaurants with interactive maps and AI assistance.',
    },
    'ja': {
      title: 'TB2 Discovery — 日本百名店レストラン発見とAI予約',
      description: '日本のトップ100レストランを探索。多言語マップとAIアシスタントで最高の食体験を。',
    },
    'ko': {
      title: 'TB2 Discovery — 일본 백명점 레스토랑 발견 및 AI 예약',
      description: '일본 최고의 100개 레스토랑을 탐색하세요. 다국어 지도와 AI 비서로 최고의 미식 경험을 제공합니다.',
    },
  },
}

const DEFAULT_LOCALE: Locale = 'zh-CN'

export function getPageMeta(pathname: string, locale?: string): PageMeta {
  const pageMeta = PAGE_META[pathname]
  if (!pageMeta) {
    return { title: 'TB2 Discovery', description: '' }
  }
  const resolvedLocale = (locale || DEFAULT_LOCALE) as Locale
  return pageMeta[resolvedLocale] || pageMeta[DEFAULT_LOCALE]
}
