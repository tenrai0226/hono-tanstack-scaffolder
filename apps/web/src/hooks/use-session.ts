import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { createSessionQuery } from '~/lib/session-query'

/**
 * 响应式 Session Hook
 * 使用 Suspense 模式，确保 SSR 阶段的一致性
 */
export function useSession() {
  const queryClient = useQueryClient()
  const sessionQuery = createSessionQuery(queryClient)
  return useSuspenseQuery(sessionQuery)
}
