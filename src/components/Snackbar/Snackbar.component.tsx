import { useMedia } from 'common/hooks'
import { useSnackbarStore } from './Snackbar.store'
import { Snackbar } from './Snackbar.styled'

const SnackbarComponent: React.FC = () => {
  const { variant, message, isOpen } = useSnackbarStore()
  const isSmallDevice = useMedia('(max-width: 900px)')

  return (
    <Snackbar.Container
      isOpen={isOpen}
      variant={variant}
      isCompact={isSmallDevice}
    >
      <p style={{ width: '100%' }}>{message}</p>
    </Snackbar.Container>
  )
}

export { SnackbarComponent as Snackbar }
