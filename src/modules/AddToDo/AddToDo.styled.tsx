import { memo } from 'react'
import styled from 'styled-components'
import { colors } from 'theme'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  height: 80px;
`

const Box = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  width: 100%;
  height: 100%;
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

export const Styled = {
  Container,
  Box,
  Button,
  Input
}
