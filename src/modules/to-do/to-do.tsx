import { useState } from 'react'
import { Archive } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'
import { colors } from 'common/theme'
import type { TodoType } from 'common/types'
import { useSnackbarStore } from 'modules'
import { Styled } from './to-do.styled'

type TodoProps = {
  index: number
  onToggle: (id: number) => void
  onDelete: (id: number) => void
  onEdit: (id: number, text: string) => void
} & TodoType

export const Todo: React.FC<TodoProps> = ({
  index,
  onToggle,
  onDelete,
  onEdit,
  id,
  text,
  isCompleted
}) => {
  const { t } = useTranslation()
  const [inputValue, setInputValue] = useState(text)
  const { showSnackbar } = useSnackbarStore()

  const editToDo = () => onEdit(id, inputValue)
  const toggleToDo = () => onToggle(id)
  const deleteToDo = () => {
    onDelete(id)
    showSnackbar({
      variant: 'success',
      message: t('todo.delete.success')
    })
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value)

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      editToDo()
      e.target.blur()
      showSnackbar({
        variant: 'success',
        message: t('todo.edit.success')
      })
    }
  }

  return (
    <Styled.Container isCompleted={isCompleted}>
      <Styled.Info>
        <small>{++index}.</small>
        <Styled.Input
          value={inputValue}
          isCompleted={isCompleted}
          disabled={isCompleted}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
        />
      </Styled.Info>

      <Styled.Actions>
        <Styled.DeleteButton onClick={deleteToDo}>
          <Archive size={28} color={colors.tones.dark} />
        </Styled.DeleteButton>

        <Styled.Checkbox
          type="checkbox"
          checked={isCompleted}
          onChange={toggleToDo}
        />
      </Styled.Actions>
    </Styled.Container>
  )
}
