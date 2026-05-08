import { create } from 'zustand'

interface IAuthModalStore {
  isOpen: boolean
  openAuthModal: () => void
  closeAuthModal: () => void
}

export const useAuthModalStore = create<IAuthModalStore>((set) => ({
  isOpen: false,
  openAuthModal: () => set({ isOpen: true }),
  closeAuthModal: () => set({ isOpen: false }),
}))
