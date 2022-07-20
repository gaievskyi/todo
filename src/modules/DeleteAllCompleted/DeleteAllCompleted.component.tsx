import { Trash } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'
import { useSnackbarStore } from 'components'
import { colors } from 'theme'
import { DeleteAllCompleted } from './DeleteAllCompleted.styled'

type DeleteAllCompletedProps = {
  onDeleteSelected: () => void
  isVisible?: boolean
}

export const DeleteAllCompletedComponent: React.FC<DeleteAllCompletedProps> = ({
  onDeleteSelected,
  isVisible = false
}) => {
  const { t } = useTranslation()
  const { showSnackbar } = useSnackbarStore()

  const deleteAll = () => {
    onDeleteSelected()
    showSnackbar({
      variant: 'success',
      message: t('deleteAllCompleted.success')
    })
  }

  return (
    <DeleteAllCompleted.Container>
      <DeleteAllCompleted.Button onClick={deleteAll} isVisible={isVisible}>
        <>
          <span>{t('deleteAllCompleted.title')}</span>
          <Trash color={colors.tones.dark} size={27} />
        </>
      </DeleteAllCompleted.Button>
    </DeleteAllCompleted.Container>
  )
}
