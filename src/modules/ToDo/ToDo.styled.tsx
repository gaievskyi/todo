import styled from 'styled-components'
import { colors } from 'theme'

const Container = styled.div<{ isCompleted: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: ${colors.tones.light};
  padding: 20px;
  border: 2px solid ${colors.tones.dark};
  transition: all 0.25s ease;

  ${(props) => {
    const { isCompleted } = props

    return isCompleted
      ? `
      background-color: ${colors.secondary};
      height: 40px;
    `
      : `
    background-color: ${colors.tones.light};
    height: 80px;
    `
  }}
`

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 90%;
  padding-right: 30px;
`
const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

const Input = styled.input<{ isCompleted: boolean }>`
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  width: 100%;
  height: 100%;
  ${({ isCompleted }) =>
    'text-decoration: ' + (isCompleted ? 'line-through' : 'none')};
`

const Checkbox = styled.input<{ type: 'checkbox' }>``

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: grid;
  place-items: center;
`

export const ToDo = {
  Container,
  Info,
  Actions,
  Input,
  Checkbox,
  DeleteButton
}
