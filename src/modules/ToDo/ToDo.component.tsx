import { useState } from 'react'
import { Archive } from 'react-bootstrap-icons'
import type { ToDoType } from 'common/types'
import { useSnackbarStore } from 'components'
import { t } from 'i18next'
import { colors } from 'theme'
import { ToDo } from './ToDo.styled'

type ToDoProps = {
  index: number
  onToggle: (id: number) => void
  onDelete: (id: number) => void
  onEdit: (id: number, text: string) => void
} & ToDoType

export const ToDoComponent: React.FC<ToDoProps> = ({
  index,
  onToggle,
  onDelete,
  onEdit,
  id,
  text,
  isCompleted
}) => {
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
    <ToDo.Container isCompleted={isCompleted}>
      <ToDo.Info>
        <small>{++index}.</small>
        <ToDo.Input
          value={inputValue}
          isCompleted={isCompleted}
          disabled={isCompleted}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
        />
      </ToDo.Info>

      <ToDo.Actions>
        <ToDo.DeleteButton onClick={deleteToDo}>
          <Archive size={28} color={colors.tones.dark} />
        </ToDo.DeleteButton>

        <ToDo.Checkbox
          type="checkbox"
          checked={isCompleted}
          onChange={toggleToDo}
        />
      </ToDo.Actions>
    </ToDo.Container>
  )
}
