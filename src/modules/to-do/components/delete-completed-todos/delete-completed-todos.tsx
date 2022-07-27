import { Trash } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'
import { colors } from 'common/theme'
import { useSnackbarStore } from 'modules'
import { Styled } from './delete-completed-todos.styled'

type DeleteAllCompletedProps = {
  onDeleteSelected: () => void
  isVisible?: boolean
}

export const DeleteAllCompleted: React.FC<DeleteAllCompletedProps> = ({
  onDeleteSelected,
  isVisible = false
}) => {
  const { t } = useTranslation()
  const { showSnackbar } = useSnackbarStore()

  const deleteAllSelected = () => {
    onDeleteSelected()
    showSnackbar({
      variant: 'success',
      message: t('deleteAllCompleted.success')
    })
  }

  return (
    <Styled.Container>
      <Styled.Button onClick={deleteAllSelected} isVisible={isVisible}>
        <>
          <span>{t('deleteAllCompleted.title')}</span>
          <Trash color={colors.tones.dark} size={27} />
        </>
      </Styled.Button>
    </Styled.Container>
  )
}
