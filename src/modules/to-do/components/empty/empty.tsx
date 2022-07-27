import { Check2All } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'
import { Styled } from './empty.styled'

export const Empty: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Styled.Container>
      <Check2All size={150} />
      <small>{t('empty')}</small>
    </Styled.Container>
  )
}
