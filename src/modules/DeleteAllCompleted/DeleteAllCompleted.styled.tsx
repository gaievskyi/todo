import styled from 'styled-components'
import { colors } from 'theme'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${colors.tones.dark};
`

const Button = styled.button<{ isVisible: boolean }>`
  display: flex;
  place-items: center;
  gap: 5px;
  background: none;
  padding: 15px;
  border: 2px solid ${colors.tones.dark};
  cursor: pointer;
  color: ${colors.tones.dark};
  opacity: 0;
  visibility: hidden;

  ${({ isVisible }) =>
    isVisible &&
    `
    visibility: visible;
    opacity: 1;

    &:hover {
      background-color: ${colors.secondary};
    }
  `}
`

export const Styled = {
  Container,
  Button
}
