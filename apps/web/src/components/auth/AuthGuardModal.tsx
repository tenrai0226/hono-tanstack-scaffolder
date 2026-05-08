import { Modal } from '@heroui/react'
import { Auth } from '@better-auth-ui/heroui'
import { useAuthModalStore } from '~/stores/use-auth-modal-store'

import { useTranslations } from 'use-intl'

export function AuthGuardModal() {
  const { isOpen, closeAuthModal } = useAuthModalStore()
  const t = useTranslations('discovery')

  return (
    <Modal>
      <Modal.Backdrop isOpen={isOpen} onOpenChange={(open) => !open && closeAuthModal()} variant="blur">
        <Modal.Container>
          <Modal.Dialog>
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>{t('authGuardModal.title', { defaultValue: 'Sign in to continue' })}</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="pb-6">
              <p className="text-sm text-stone-500 mb-4">
                {t('authGuardModal.subtitle', { defaultValue: 'Sign in to save favorites and add private notes.' })}
              </p>
              <div className="flex justify-center">
                <Auth view="signIn" path="sign-in" />
              </div>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}
