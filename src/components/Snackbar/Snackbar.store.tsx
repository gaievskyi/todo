import { i18n } from 'common/translations'
import create from 'zustand'

type SnackbarState = {
  isOpen: boolean
  variant: 'success' | 'error'
  message: string

  showSnackbar: (payload: {
    variant?: 'success' | 'error'
    message?: string
  }) => void
}

export const useSnackbarStore = create<SnackbarState>((set) => ({
  isOpen: false,
  variant: 'error',
  message: i18n.t('error'),

  showSnackbar: (payload) => {
    set((state) => ({
      variant: payload.variant,
      message: payload.message,
      isOpen: !state.isOpen
    }))
    setTimeout(() => set(() => ({ isOpen: false })), 3500)
  }
}))
