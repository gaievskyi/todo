import styled from 'styled-components'
import { colors } from 'theme'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Button = styled.button`
  display: flex;
  place-items: center;
  gap: 5px;
  background: none;
  padding: 15px;
  border: 2px solid ${colors.tones.dark};
  cursor: pointer;
`

export const DeleteAllCompleted = {
  Container,
  Button
}
