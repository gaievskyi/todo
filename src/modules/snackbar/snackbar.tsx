import { useMedia } from 'common/hooks'
import { useSnackbarStore } from './snackbar.store'
import { Styled } from './snackbar.styled'

export const Snackbar: React.FC = () => {
  const { variant, message, isOpen } = useSnackbarStore()

  const isSmallDevice = useMedia('(max-width: 900px)')

  return (
    <Styled.Container
      isOpen={isOpen}
      variant={variant}
      isCompact={isSmallDevice}
    >
      <p style={{ width: '100%' }}>{message}</p>
    </Styled.Container>
  )
}
