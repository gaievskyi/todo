import { colors } from 'common/theme'
import styled from 'styled-components'

const Container = styled.div<{
  isOpen: boolean
  variant: 'success' | 'error'
  isCompact?: boolean
}>`
  font-size: 0.8em;
  position: fixed;
  margin: 0 auto;
  display: flex;
  place-items: center;
  text-align: center;
  width: 100%;
  background-color: ${colors.tones.light};
  z-index: 2;
  transition: all 0.5s ease;

  ${({ isCompact, variant }) => {
    if (isCompact) {
      return `
        border-bottom: 2px solid ${colors.tones.dark};
        border-right: 2px solid ${colors.tones.dark};
        padding: 10px;
        top: 0;
      `
    }
    return `
      transform: translateX(20px);
      max-width: 200px;
      padding: 20px;
      bottom: 20px;
      border: 2px solid ${
        variant === 'success' ? colors.tones.dark : colors.error
        // eslint-disable-next-line indent
      };
    `
  }}

  ${(props) => {
    const { isOpen } = props

    return isOpen
      ? `
      left: 0;
      opacity: 1;
      visibility: visible;
    `
      : `
    left: -50%;
    opacity: 0;
    visibility: hidden;
  `
  }}
`

export const Styled = {
  Container
}
