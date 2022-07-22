import { memo } from 'react'
import styled from 'styled-components'
import { colors } from 'theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 85%;
  max-width: 600px;
  margin: 0 auto;
  height: 100%;
  margin-bottom: 50px;
`

const Title = memo(styled.h1`
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 2px;
  color: ${colors.tones.dark};
`)

const Subtitle = memo(styled.h2`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 2px;
  color: ${colors.tones.dark};
  margin-bottom: 30px;
`)

export const Styled = {
  Title,
  Subtitle,
  Container
}
