import { ViewMode } from '@iguanadex/uikit'
import { updateQuery } from '@iguanadex/utils/clientRouter'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'

export function useViewMode() {
  const router = useRouter()
  const mode = useMemo(
    () => (router.query.view === String(ViewMode.CARD).toLowerCase() ? ViewMode.CARD : ViewMode.TABLE),
    [router.query],
  )
  const setViewMode = useCallback(
    (viewMode: ViewMode) => {
      if (mode === viewMode) {
        return
      }
      router.push(
        updateQuery(router.asPath, {
          view: viewMode.toLowerCase(),
        }),
        '',
        { scroll: false },
      )
    },
    [router, mode],
  )

  return {
    mode,
    setViewMode,
  }
}
