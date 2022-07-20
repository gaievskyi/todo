import { memo } from 'react'
import styled from 'styled-components'
import { colors } from 'theme'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  margin: 20px auto;
  display: flex;
  place-items: center;
  gap: 15px;
`

const Button = memo(styled.button`
  display: grid;
  place-items: center;
  width: 65px;
  height: 65px;
  background-color: ${colors.secondary};
  border: 2px solid ${colors.tones.dark};
  cursor: pointer;
`)

const Input = styled.input`
  border: 2px solid ${colors.tones.dark};
  outline: none;
  height: 65px;
  padding: 0 20px;
  min-width: 250px;
`

export const AddToDo = {
  Container,
  Button,
  Input
}
