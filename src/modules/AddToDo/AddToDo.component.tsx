import { useRef, useState } from 'react'
import { Plus } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'
import { useSnackbarStore } from 'components'
import { colors } from 'theme'
import { AddToDo } from './AddToDo.styled'

type AddToDoProps = {
  onAdd: (text: string) => void
}

const AddToDoComponent: React.FC<AddToDoProps> = ({ onAdd }) => {
  const { t } = useTranslation()
  const [inputValue, setInputValue] = useState('')
  const { showSnackbar } = useSnackbarStore()

  const input = useRef(document.createElement('input'))

  const add = () => {
    if (inputValue.trim().length === 0) {
      showSnackbar({
        variant: 'error',
        message: t('addToDo.errors.empty')
      })
      return
    }
    onAdd(inputValue)
    setInputValue('')
    input.current.value = ''
    showSnackbar({
      variant: 'success',
      message: t('addToDo.success')
    })
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value)

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.target.blur()
      add()
    }
  }

  return (
    <AddToDo.Container>
      <AddToDo.Input
        ref={input}
        placeholder={t('addToDo.input.placeholder')}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      />
      <AddToDo.Button onClick={add}>
        <Plus size={30} color={colors.tones.dark} />
      </AddToDo.Button>
    </AddToDo.Container>
  )
}

export { AddToDoComponent as AddToDo }
