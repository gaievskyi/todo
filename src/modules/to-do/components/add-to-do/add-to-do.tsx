import { useRef, useState } from 'react'
import { Plus } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'
import { colors } from 'common/theme'
import { useSnackbarStore } from 'modules'
import { Styled } from './add-to-do.styled'

type AddToDoProps = {
  onAdd: (text: string) => void
}

export const AddToDo: React.FC<AddToDoProps> = ({ onAdd }) => {
  const { t } = useTranslation()
  const [inputValue, setInputValue] = useState('')
  const { showSnackbar } = useSnackbarStore()

  const input = useRef(document.createElement('input'))

  const isEmptyInput = inputValue.trim() === ''

  const clearInput = () => {
    setInputValue('')
    input.current.value = ''
  }

  const add = () => {
    if (isEmptyInput) {
      showSnackbar({ variant: 'error', message: t('addToDo.errors.empty') })
    }
    onAdd(inputValue)
    clearInput()
    showSnackbar({ variant: 'success', message: t('addToDo.success') })
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
    <Styled.Container>
      <Styled.Box>
        <Styled.Input
          ref={input}
          placeholder={t('addToDo.input.placeholder')}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
        />
        <Styled.Button onClick={add}>
          <Plus size={30} color={colors.tones.dark} />
        </Styled.Button>
      </Styled.Box>
    </Styled.Container>
  )
}
